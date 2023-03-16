import { useLoaderData } from "@remix-run/react";
import { getPost } from "../../models/posts.server";
import { formatearFecha } from "../../utils/helpers"; 
export function meta({data}){
  if(!data){
      return{
          title: 'GuitarLA - Blog no encontrado',
          description: 'Guitarras, blog de guitarras, blog no encontrado'
      }
  }
  return{
      title:`GuitarLA - ${data?.data[0]?.attributes.titulo}`,
      description:`Blog, venta de guitarras, Blog ${data.data[0].attributes.titulo}`
  }
}
export async function loader({ params }) {
  const { postURL } = params;
  const post = await getPost(postURL);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}
const Post = () => {
  const post = useLoaderData();
  const { titulo, imagen, contenido, publishedAt } = post?.data[0]?.attributes;
  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen?.data.attributes.url}
        alt={`Imagen del articulo ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default Post;
