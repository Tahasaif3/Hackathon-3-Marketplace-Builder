import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { CartItem } from '@/types/product';

interface OrderReceiptProps {
  orderData: {
    orderNumber: string;
    trackingNumber: string;
    orderDate: string;
    items: CartItem[];
    shippingAddress: {
      name: string;
      address: string;
      city: string;
      zipCode: string;
    };
    totals: {
      subtotal: number;
      shipping: number;
      tax: number;
      total: number;
    };
  };
}

export default function OrderReceipt({ orderData }: OrderReceiptProps) {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    const content = receiptRef.current?.innerHTML;

    if (content && printWindow) {
      printWindow.document.write('<html><head><title>Receipt</title>');
      printWindow.document.write(
        `<style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f7fc;
              margin: 0;
              padding: 0;
              color: #333;
            }
            .receipt-wrapper {
              background-color: #ffffff;
              width: 80%;
              margin: 20px auto;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            }
            .receipt-header {
              text-align: center;
              margin-bottom: 30px;
            }
            .receipt-header h1 {
              font-size: 32px;
              color: #FF5733; /* Bright orange for a touch of excitement */
              margin: 0;
              letter-spacing: 2px;
            }
            .receipt-header p {
              font-size: 18px;
              margin: 5px 0;
              color: #777;
              font-style: italic;
            }
            .section-title {
              font-weight: bold;
              font-size: 16px;
              text-transform: uppercase;
              color: #333;
              margin: 20px 0 10px;
              border-bottom: 2px solid #eee;
              padding-bottom: 5px;
            }
            .section {
              margin-bottom: 20px;
            }
            .section p {
              font-size: 14px;
              margin: 5px 0;
              line-height: 1.6;
              color: #555;
            }
            .table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 30px;
            }
            .table th, .table td {
              padding: 12px 15px;
              text-align: left;
              border-bottom: 2px solid #f4f4f4;
            }
            .table th {
              background-color: #f9f9f9;
              color: #444;
              font-weight: normal;
            }
            .table td {
              color: #333;
              font-size: 14px;
            }
            .total-section {
              text-align: right;
              font-size: 16px;
              font-weight: bold;
              margin-top: 30px;
            }
            .total-section span {
              margin-left: 20px;
              font-size: 18px;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              margin-top: 50px;
              color: #888;
            }
            .footer p {
              margin: 5px 0;
            }
      
            /* Print-specific styles */
            @media print {
              body {
                background-color: #fff;
                margin: 0;
                padding: 0;
              }
              .receipt-wrapper {
                box-shadow: none;
                padding: 10px;
                margin: 10px;
              }
              .print-button {
                display: none;
              }
              .table th, .table td {
                padding: 10px 12px;
              }
              .total-section {
                font-size: 18px;
                font-weight: bold;
              }
              .total-section span {
                font-size: 20px;
              }
              .footer {
                font-size: 10px;
                margin-top: 30px;
              }
            }
          </style>`
      );
      printWindow.document.write('</head><body>');
      printWindow.document.write(content);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  if (!orderData) return null;

  const { orderNumber, trackingNumber, orderDate, items, shippingAddress, totals } = orderData;

  return (
    <div>
      {/* Print Button */}
      <div className="mb-4 flex justify-end print:hidden">
        <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          Print Receipt
        </Button>
      </div>

      {/* Receipt Content */}
      <div className="bg-white p-8 rounded-lg shadow-sm" ref={receiptRef}>
        <div className="print-content">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-orange-500">Food</span>luck
              </h1>
              <p className="text-gray-500 mt-1">Order Receipt</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Order Information</h3>
              <div className="space-y-1 text-sm">
                <p>Order Number: {orderNumber}</p>
                <p>Tracking Number: {trackingNumber}</p>
                <p>Order Date: {new Date(orderDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Shipping Address</h3>
              <div className="space-y-1 text-sm">
                <p>{shippingAddress.name}</p>
                <p>{shippingAddress.address}</p>
                <p>
                  {shippingAddress.city}, {shippingAddress.zipCode}
                </p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <table className="w-full mb-8" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '8px 0' }}>Item</th>
                <th style={{ textAlign: 'center', padding: '8px 0' }}>Quantity</th>
                <th style={{ textAlign: 'right', padding: '8px 0' }}>Price</th>
                <th style={{ textAlign: 'right', padding: '8px 0' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '8px 0' }}>{item.name}</td>
                  <td style={{ textAlign: 'center', padding: '8px 0' }}>{item.quantity}</td>
                  <td style={{ textAlign: 'right', padding: '8px 0' }}>${item.price.toFixed(2)}</td>
                  <td style={{ textAlign: 'right', padding: '8px 0' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-sm" style={{ padding: '4px 0' }}>
                <span>Subtotal</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm" style={{ padding: '4px 0' }}>
                <span>Shipping</span>
                <span>${totals.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm" style={{ padding: '4px 0' }}>
                <span>Tax</span>
                <span>${totals.tax.toFixed(2)}</span>
              </div>
              <div
                className="flex justify-between font-semibold"
                style={{ borderTop: '1px solid #e5e7eb', paddingTop: '8px', marginTop: '8px' }}
              >
                <span>Total</span>
                <span>${totals.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
