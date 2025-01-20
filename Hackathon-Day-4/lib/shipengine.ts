const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY
const SHIPENGINE_API_URL = 'https://api.shipengine.com/v1'

export interface ShipEngineRate {
  rate_id: string
  service_code: string
  carrier_id: string
  shipping_amount: {
    amount: number
    currency: string
  }
  insurance_amount: {
    amount: number
    currency: string
  }
  delivery_days: number
  carrier_delivery_days: string
  estimated_delivery_date: string
}

export interface ShipEngineAddress {
  name: string
  company_name?: string
  address_line1: string
  city_locality: string
  postal_code: string
  country_code: string
  state_province: string
}

async function shipEngineRequest(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${SHIPENGINE_API_URL}${endpoint}`, {
    ...options,
    headers: {
      'API-Key': SHIPENGINE_API_KEY!,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'ShipEngine API request failed')
  }

  return response.json()
}

export async function getRates(fromAddress: ShipEngineAddress, toAddress: ShipEngineAddress, packages: any[]) {
  const payload = {
    rate_options: {
      carrier_ids: ['se-222794', 'se-222795', 'se-222793', 'se-222792']
    },
    from_address: fromAddress,
    to_address: toAddress,
    packages
  }

  const rates = await shipEngineRequest('/rates/estimate', {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  return rates.rate_estimates
}

export async function createLabel(
  fromAddress: ShipEngineAddress,
  toAddress: ShipEngineAddress,
  packages: any[],
  rateId: string
) {
  const payload = {
    shipment: {
      carrier_id: 'se-222793', 
      service_code: 'usps_priority_mail',
      ship_from: fromAddress,
      ship_to: toAddress,
      packages
    },
    rate_id: rateId
  }

  const label = await shipEngineRequest('/labels', {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  return label
}

export async function trackShipment(trackingNumber: string, carrierId: string) {
  const tracking = await shipEngineRequest(`/tracking?carrier_id=${carrierId}&tracking_number=${trackingNumber}`)
  return tracking
}

