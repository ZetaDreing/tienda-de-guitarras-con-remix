import { getPosts } from "~/models/posts.server"
import {useLoaderData}from '@remix-run/react'
import ListadoPosts from "~/components/listado-posts"
export function meta(){
  return{
    title: 'GuitarLa - Nuestro Blog',
    description: 'GuitarLa, nuestro blog, ayuda para tocar la guitarra'
  }
}
export async function loader(){
  const posts = await getPosts()
  console.log(posts)
  return posts.data

}
function Blog() {
  const posts = useLoaderData()
  return (
      <ListadoPosts
        posts={posts}
      />
  )
}

export default Blog