import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import products from './product';
import order from './order';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, products,order],
};



