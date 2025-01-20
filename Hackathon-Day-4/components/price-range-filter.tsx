"use client"

import * as React from "react"
import { Slider } from "@/components/ui/"
import { Button } from "@/components/ui/button"

interface PriceRangeFilterProps {
  minPrice: number
  maxPrice: number
  onPriceChange: (range: [number, number]) => void
}

export function PriceRangeFilter({ minPrice, maxPrice, onPriceChange }: PriceRangeFilterProps) {
  const [priceRange, setPriceRange] = React.useState<[number, number]>([minPrice, maxPrice])
  const [displayRange, setDisplayRange] = React.useState<[number, number]>([minPrice, maxPrice])

  const handlePriceChange = (value: number[]) => {
    setDisplayRange([value[0], value[1]])
  }

  const handlePriceChangeComplete = (value: number[]) => {
    setPriceRange([value[0], value[1]])
    onPriceChange([value[0], value[1]])
  }

  return (
    <div className="mb-6">
      <h3 className="font-bold text-base md:text-lg mb-4 text-black">Filter By Price</h3>
      <div className="space-y-4">
        <Slider
          defaultValue={[minPrice, maxPrice]}
          max={maxPrice}
          min={minPrice}
          step={100}
          value={displayRange}
          onValueChange={handlePriceChange}
          onValueCommit={handlePriceChangeComplete}
          className="w-full"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            From ${displayRange[0]} to ${displayRange[1]}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePriceChangeComplete(displayRange)}
            className="text-orange-500 hover:text-orange-600"
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  )
}

