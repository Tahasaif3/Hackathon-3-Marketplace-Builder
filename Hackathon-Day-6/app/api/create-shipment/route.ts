import { NextResponse } from 'next/server'
import { createShipment } from '@/lib/shipping'

export async function POST(request: Request) {
  try {
    const { formData, selectedRate, cartItems } = await request.json()
    console.log(cartItems)
    const shipment = await createShipment(formData, selectedRate)
    
    return NextResponse.json(shipment)
  } catch (error) {
    console.error('Error creating shipment:', error)
    return NextResponse.json(
      { error: 'Failed to create shipment' },
      { status: 500 }
    )
  }
}

