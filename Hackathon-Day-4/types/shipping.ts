export interface ShippingRate {
    id: string
    service: string
    rate: number
    estimatedDays: string
  }
  
  export interface ShippingFormData {
    firstName: string
    lastName: string
    email: string
    address: string
    city: string
    zipCode: string
  }
  
  