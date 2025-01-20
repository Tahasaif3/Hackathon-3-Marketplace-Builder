import { Rule } from '@sanity/types';

export default  {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Product name is required'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required().error('Image is required'),
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.min(0).required().error('Original price must be greater than or equal to 0'),
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',
      validation: (Rule: Rule) =>
        Rule.min(0).required().error('Discounted price must be greater than or equal to 0'),
    },
  ],
};
