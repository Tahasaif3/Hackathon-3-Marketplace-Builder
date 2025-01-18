import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef],
};

// import { type SchemaTypeDefinition } from 'sanity'
// import { productSchema, categorySchema } from './product'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [productSchema, categorySchema],
// }

