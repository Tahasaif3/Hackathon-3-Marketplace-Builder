export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Appetizer', value: 'appetizer' },
          { title: 'Main Course', value: 'main' },
          { title: 'Dessert', value: 'dessert' },
          { title: 'Beverage', value: 'beverage' }
        ]
      }
    },
    {
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{ type: 'restaurant' }]
    },
    {
      name: 'isAvailable',
      title: 'Is Available',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'preparationTime',
      title: 'Preparation Time (minutes)',
      type: 'number'
    }
  ]
}

