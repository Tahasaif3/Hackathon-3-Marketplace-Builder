import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import products from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, products],
};

// import { type SchemaTypeDefinition } from 'sanity'
// import { productSchema, categorySchema } from './product'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [productSchema, categorySchema],
// }

