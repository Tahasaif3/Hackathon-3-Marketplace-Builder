import { ShippingFormData, ShippingRate } from "@/types/shipping"

const shippingRates: ShippingRate[] = [
  {
    id: 'standard',
    service: 'Standard Shipping',
    rate: 5.99,
    estimatedDays: '5-7 business days'
  },
  {
    id: 'express',
    service: 'Express Shipping',
    rate: 14.99,
    estimatedDays: '2-3 business days'
  },
  {
    id: 'overnight',
    service: 'Overnight Shipping',
    rate: 29.99,
    estimatedDays: '1 business day'
  }
]

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
    estimated_delivery: getEstimatedDeliveryDate(selectedRate.estimatedDays)
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
  console.log(trackingNumber)
  
  const currentDate = new Date()
  const yesterday = new Date(currentDate)
  yesterday.setDate(yesterday.getDate() - 1)
  
  return {
    status: 'In Transit',
    location: 'Local Distribution Center',
    timestamp: currentDate.toISOString(),
    details: [
      {
        status: 'Package received at distribution center',
        location: 'Local Distribution Center',
        timestamp: currentDate.toISOString()
      },
      {
        status: 'Package picked up by courier',
        location: 'Regional Facility',
        timestamp: yesterday.toISOString()
      },
      {
        status: 'Shipping label created',
        location: 'Seller Facility',
        timestamp: yesterday.toISOString()
      }
    ]
  }
}



