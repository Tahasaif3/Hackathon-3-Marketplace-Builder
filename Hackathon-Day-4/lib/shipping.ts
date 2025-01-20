import { ShippingFormData, ShippingRate } from "@/types/shipping"

const shippingRates: ShippingRate[] = [
  {
    id: "regular",
    service: "Regular Delivery",
    rate: 2.99,
    estimatedTime: "45-60 minutes",
    description: "Affordable delivery for orders that are not time-sensitive.",
  },
  {
    id: "priority",
    service: "Priority Delivery",
    rate: 5.99,
    estimatedTime: "30-45 minutes",
    description: "Faster delivery for hot and fresh meals.",
  },
  {
    id: "express",
    service: "Express Delivery",
    rate: 9.99,
    estimatedTime: "20-30 minutes",
    description: "Fastest delivery option for urgent orders.",
  },
];
export async function getShippingRates(address?: Partial<ShippingFormData>): Promise<ShippingRate[]> {
  
  if (!address || (address.city && address.zipCode)) {
    return Promise.resolve(shippingRates)
  }
  return Promise.resolve([])
}

export async function createShipment(
  formData: ShippingFormData,
  selectedRate: ShippingRate
): Promise<ShipmentResponse> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log(formData)
  return {
    success: true,
    tracking_code: 'TRK' + Math.random().toString(36).substring(2, 10).toUpperCase(),
    service: selectedRate.service,
    estimated_delivery: getEstimatedDeliveryDate(selectedRate.estimatedTime)
  }
}


function getEstimatedDeliveryDate(estimatedDays: string): string {
  const days = parseInt(estimatedDays.split('-')[0])
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString()
}

interface ShipmentResponse {
  success: boolean
  tracking_code: string
  service: string
  estimated_delivery: string
}

export async function getTrackingInfo(trackingNumber: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log(`Tracking Order ID: ${trackingNumber}`);


  const currentDate = new Date();
  const orderReceivedTime = new Date(currentDate);
  orderReceivedTime.setMinutes(orderReceivedTime.getMinutes() - 45);

  const orderPreparedTime = new Date(orderReceivedTime);
  orderPreparedTime.setMinutes(orderPreparedTime.getMinutes() + 15); 

  const orderPickedUpTime = new Date(orderPreparedTime);
  orderPickedUpTime.setMinutes(orderPickedUpTime.getMinutes() + 15); 

  const orderOutForDeliveryTime = new Date(orderPickedUpTime);
  orderOutForDeliveryTime.setMinutes(orderOutForDeliveryTime.getMinutes() + 10);
  
  return {
    status: "Out for Delivery",
    location: "Near Your Address",
    timestamp: currentDate.toISOString(),
    details: [
      {
        status: "Order is out for delivery",
        location: "Delivery Driver En Route",
        timestamp: orderOutForDeliveryTime.toISOString(),
      },
      {
        status: "Order picked up by the delivery driver",
        location: "Restaurant",
        timestamp: orderPickedUpTime.toISOString(),
      },
      {
        status: "Order prepared and packed",
        location: "Kitchen",
        timestamp: orderPreparedTime.toISOString(),
      },
      {
        status: "Order received",
        location: "Restaurant",
        timestamp: orderReceivedTime.toISOString(),
      },
    ],
  };
}
