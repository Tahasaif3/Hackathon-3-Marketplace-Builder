import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'food',
  type: 'document',
  title: 'Food',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Food Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description:
        'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Current Price',
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      description: 'Price before discount (if any)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Food Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short description of the food item',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
      description: 'Availability status of the food item',
    },
  ],
})


// export default {
//   name: 'food',
//   type: 'document',
//   title: 'Food',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Food Name',
//     },
//     {
//       name: 'category',
//       type: 'string',
//       title: 'Category',
//       description:
//         'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Current Price',
//     },
//     {
//       name: 'originalPrice',
//       type: 'number',
//       title: 'Original Price',
//       description: 'Price before discount (if any)',
//     },
//     {
//       name: 'tags',
//       type: 'array',
//       title: 'Tags',
//       of: [{ type: 'string' }],
//       options: {
//         layout: 'tags',
//       },
//       description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Food Image',
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       description: 'Short description of the food item',
//     },
//     {
//       name: 'available',
//       type: 'boolean',
//       title: 'Available',
//       description: 'Availability status of the food item',
//     },
//   ],
// };

// export default {
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     fields: [
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//         options: {
//           source: 'name',
//           maxLength: 96,
//         },
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         validation: Rule => Rule.required().positive()
//       },
//       {
//         name: 'salePrice',
//         title: 'Sale Price',
//         type: 'number',
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         options: {
//           hotspot: true,
//         },
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'category',
//         title: 'Category',
//         type: 'reference',
//         to: [{type: 'category'}],
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//     ],
//   }
  
  