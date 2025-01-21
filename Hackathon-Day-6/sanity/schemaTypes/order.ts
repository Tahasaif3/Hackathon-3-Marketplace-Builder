export default {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "orderNumber",
      title: "Order Number",
      type: "string",
    },
    {
      name: "trackingNumber",
      title: "Tracking Number",
      type: "string",
    },
    {
      name: "customer",
      title: "Customer",
      type: "object",
      fields: [
        { name: "firstName", type: "string", title: "First Name" },
        { name: "lastName", type: "string", title: "Last Name" },
        { name: "email", type: "string", title: "Email" },
      ],
    },
    {
      name: "shippingAddress",
      title: "Shipping Address",
      type: "object",
      fields: [
        { name: "address", type: "string", title: "Address" },
        { name: "city", type: "string", title: "City" },
        { name: "zipCode", type: "string", title: "ZIP Code" },
      ],
    },
    {
      name: "items",
      title: "Order Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Item Name" },
            { name: "quantity", type: "number", title: "Quantity" },
            { name: "price", type: "number", title: "Price" },
            { name: "image", type: "string", title: "Image URL" },
          ],
        },
      ],
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Processing", value: "processing" },
          { title: "Confirmed", value: "confirmed" },
          { title: "Out for Delivery", value: "out_for_delivery" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "statusUpdates",
      title: "Status Updates",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "status", type: "string", title: "Status" },
            { name: "location", type: "string", title: "Location" },
            { name: "timestamp", type: "datetime", title: "Timestamp" },
            { name: "notes", type: "text", title: "Notes" },
          ],
        },
      ],
    },
    {
      name: "subtotal",
      title: "Subtotal",
      type: "number",
    },
    {
      name: "shipping",
      title: "Shipping Cost",
      type: "number",
    },
    {
      name: "tax",
      title: "Tax",
      type: "number",
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
}

