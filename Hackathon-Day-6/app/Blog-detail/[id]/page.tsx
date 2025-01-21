import { Metadata } from 'next'
import { notFound } from "next/navigation"
import BlogDetails from "../../../components/blog-details"

interface BlogPost {
  id: number
  title: string
  date: string
  author: string
  comments: number
  content: string[]
  quote: string
  image: string
  tags: string[]
}

interface Params {
  id: string;
}

export interface PageProps {
  params: Promise<Params>;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Reasons To Do A Digital Detox Challenge",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 3,
    content: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
    ],
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/blogg1.png?height=500&width=800",
    tags: ["Restaurant", "Dinner", "Pizza", "Yummy"]
  },
  {
    id: 2,
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 3,
    content: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
    ],
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/blogg2.png?height=500&width=800",
    tags: ["Restaurant", "Dinner", "Pizza", "Yummy"]
  },
  {
    id: 3,
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 3,
    content: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    ],
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: "/blogg3.png?height=500&width=800",
    tags: ["Restaurant", "Dinner", "Pizza", "Yummy"]
  },
  {
    id: 4,
    title: "My Favourite Easy Black Pizza Toast Recipe",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 3,
    content: [
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    ],
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: "/blogg4.png?height=500&width=800",
    tags: ["Restaurant", "Dinner", "Pizza", "Yummy"]
  }
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.id.toString() === resolvedParams.id);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return { title: post.title, description: post.content[0] };
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.id.toString() === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return <BlogDetails post={post} />;
}

