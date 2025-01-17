export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'cuisineType',
      title: 'Cuisine Type',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'postcode', type: 'string' },
        { name: 'location', type: 'geopoint' }
      ]
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(0).max(5)
    },
    {
      name: 'averageDeliveryTime',
      title: 'Average Delivery Time (minutes)',
      type: 'number'
    },
    {
      name: 'isOpen',
      title: 'Is Open',
      type: 'boolean'
    }
  ]
}

