import { client } from '@/lib/sanity'
import ChefPageClient from './chef-page-client'

async function getChefs() {
  return client.fetch(`*[_type == "chef"]{
    _id,
    name,
    position,
    image,
    experience,
    specialty,
    description,
    available
  }`)
}

export default async function ChefPage() {
  const chefs = await getChefs()

  return <ChefPageClient chefs={chefs} />
}

