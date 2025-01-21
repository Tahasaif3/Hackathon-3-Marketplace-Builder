export interface OrderData {
    orderNumber: string;
    trackingNumber: string;
    orderDate: string;
    items: any[];
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
  }
  
  export function storeOrderData(data: OrderData) {
    sessionStorage.setItem('orderData', JSON.stringify(data));
  }
  
  export function getOrderData(): OrderData | null {
    const data = sessionStorage.getItem('orderData');
    return data ? JSON.parse(data) : null;
  }
  
