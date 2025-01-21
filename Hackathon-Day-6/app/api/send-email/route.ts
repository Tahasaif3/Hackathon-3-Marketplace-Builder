import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { urlFor } from "@/lib/sanity"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderDetails, userEmail } = body

    if (!orderDetails || !userEmail) {
      return NextResponse.json({ success: false, error: "Missing order details or user email" }, { status: 400 })
    }

    const { SMTP_HOST, SMTP_PORT, EMAIL_USER, EMAIL_PASS, SHOP_OWNER_EMAIL } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !EMAIL_USER || !EMAIL_PASS || !SHOP_OWNER_EMAIL) {
      return NextResponse.json(
        { success: false, error: "Email configuration is missing on the server" },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number.parseInt(SMTP_PORT, 10),
      secure: Number.parseInt(SMTP_PORT, 10) === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const getImageUrl = (image: any) => {
      try {
        if (!image) return "/placeholder.svg"

        const imageUrl = urlFor(image)
          .width(300)
          .height(300)
          .url()

        if (!imageUrl.startsWith("http")) {
          const baseUrl = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
            ? `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`
            : "https://cdn.sanity.io"
          return `${baseUrl}${imageUrl}`
        }

        return imageUrl
      } catch (error) {
        console.error("Error generating image URL:", error)
        return "https://via.placeholder.com/300x300"
      }
    }

    const validateImageUrl = async (url: string) => {
      try {
        const response = await fetch(url, { method: "HEAD" })
        return response.ok
      } catch (error) {
        return false
      }
    }

    const processedItems = await Promise.all(
        //@ts-expect-error:error sovle
      orderDetails.items.map(async (item) => {
        const imageUrl = getImageUrl(item.image)
        const isValidImage = await validateImageUrl(imageUrl)
        return {
          ...item,
          imageUrl: isValidImage ? imageUrl : "https://via.placeholder.com/300x300",
        }
      }),
    )

    const userEmailContent = {
      from: `"Foodluck" <${EMAIL_USER}>`,
      to: userEmail,
      subject: "Your Foodluck Order Confirmation",
      html: `
        <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
          <h1 style="color: #333; text-align: center;">Thank you for your order!</h1>
          
          <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <p style="color: #555; font-size: 16px;">Hi ${orderDetails.shippingAddress.name},</p>
            <p style="color: #555; font-size: 16px;">Your order has been received and is being prepared.</p>
            
            <h2 style="color: #333;">Order Details:</h2>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
              <tr>
                <th style="text-align: left; padding: 8px; background-color: #eee;">Order Number:</th>
                <td style="padding: 8px; background-color: #fff;">${orderDetails.orderNumber}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px; background-color: #eee;">Tracking Number:</th>
                <td style="padding: 8px; background-color: #fff;">${orderDetails.trackingNumber}</td>
              </tr>
            </table>

            <h2 style="color: #333;">Items Ordered:</h2>
            ${processedItems
              .map(
                (item) => `
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px; border: 1px solid #eee; padding: 10px; border-radius: 4px;">
                <div style="display: flex; align-items: center;">
                  <img src="${item.imageUrl}" 
                       alt="${item.name}" 
                       style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 10px;"
                       width="60"
                       height="60">
                  <div>
                    <div style="font-weight: bold;">${item.name}</div>
                    <div style="color: #666;">Quantity: ${item.quantity}</div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div>$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            `,
              )
              .join("")}

            <div style="margin-top: 20px; border-top: 2px solid #eee; padding-top: 20px;">
              <table style="width: 100%; margin-top: 10px;">
                <tr>
                  <td style="padding: 8px;">Subtotal:</td>
                  <td style="text-align: right;">$${orderDetails.totals.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Shipping:</td>
                  <td style="text-align: right;">$${orderDetails.totals.shipping.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Tax:</td>
                  <td style="text-align: right;">$${orderDetails.totals.tax.toFixed(2)}</td>
                </tr>
                <tr style="font-weight: bold;">
                  <td style="padding: 8px;">Total:</td>
                  <td style="text-align: right;">$${orderDetails.totals.total.toFixed(2)}</td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-radius: 4px;">
              <h3 style="margin-top: 0;">Delivery Address:</h3>
              <p style="margin: 0;">
                ${orderDetails.shippingAddress.address}<br>
                ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.zipCode}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    const shopOwnerEmailContent = {
      from: `"Foodluck System" <${EMAIL_USER}>`,
      to: SHOP_OWNER_EMAIL,
      subject: `New Order Received - ${orderDetails.orderNumber}`,
      html: `
        <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 8px;">
          <h1 style="color: #333; text-align: center;">New Order Received</h1>
          
          <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">Order Details:</h2>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
              <tr>
                <th style="text-align: left; padding: 8px; background-color: #eee;">Order Number:</th>
                <td style="padding: 8px; background-color: #fff;">${orderDetails.orderNumber}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px; background-color: #eee;">Customer Email:</th>
                <td style="padding: 8px; background-color: #fff;">${userEmail}</td>
              </tr>
            </table>

            <h2 style="color: #333;">Items Ordered:</h2>
            ${processedItems
              .map(
                (item) => `
              <div style="display: flex; justify-content: space-between; margin-bottom: 15px; border: 1px solid #eee; padding: 10px; border-radius: 4px;">
                <div style="display: flex; align-items: center;">
                  <img src="${item.imageUrl}" 
                       alt="${item.name}" 
                       style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 10px;"
                       width="60"
                       height="60">
                  <div>
                    <div style="font-weight: bold;">${item.name}</div>
                    <div style="color: #666;">Quantity: ${item.quantity}</div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div>$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            `,
              )
              .join("")}

            <div style="margin-top: 20px; border-top: 2px solid #eee; padding-top: 20px;">
              <table style="width: 100%; margin-top: 10px;">
                <tr>
                  <td style="padding: 8px;">Subtotal:</td>
                  <td style="text-align: right;">$${orderDetails.totals.subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Shipping:</td>
                  <td style="text-align: right;">$${orderDetails.totals.shipping.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px;">Tax:</td>
                  <td style="text-align: right;">$${orderDetails.totals.tax.toFixed(2)}</td>
                </tr>
                <tr style="font-weight: bold;">
                  <td style="padding: 8px;">Total:</td>
                  <td style="text-align: right;">$${orderDetails.totals.total.toFixed(2)}</td>
                </tr>
              </table>
            </div>

            <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-radius: 4px;">
              <h3 style="margin-top: 0;">Delivery Address:</h3>
              <p style="margin: 0;">
                ${orderDetails.shippingAddress.address}<br>
                ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.zipCode}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(userEmailContent)
    await transporter.sendMail(shopOwnerEmailContent)

    return NextResponse.json({ success: true, message: "Emails sent successfully!" })
  } catch (error: any) {
    console.error("Error sending emails:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

