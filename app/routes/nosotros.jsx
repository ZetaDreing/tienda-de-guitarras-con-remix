import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
export function meta(){
  return{
      title:'GuitarLa - Nosotros',
      description: 'Venta de guitarras, blog de musica y mas'
  }
}
export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen nosotros" />
        <div>
          <p>Donec ultricies euismod odio eget viverra. Phasellus justo tortor, imperdiet suscipit lacus sit amet, scelerisque facilisis elit. Integer blandit, enim eget mollis blandit, lorem arcu condimentum felis, ut condimentum est neque at metus. Vestibulum condimentum ac risus ut vestibulum. Sed sapien nisi, tincidunt quis consequat vel, lacinia at velit. Mauris consequat quam neque, eu viverra est aliquam ac. Duis sodales placerat ullamcorper. Suspendisse congue condimentum elit eget sodales. Morbi consectetur risus turpis, quis sollicitudin mi ornare eu. Nullam aliquam rhoncus ex in ornare. Vivamus fringilla eu tortor iaculis maximus.</p>

          <p>Donec ultricies euismod odio eget viverra. Phasellus justo tortor, imperdiet suscipit lacus sit amet, scelerisque facilisis elit. Integer blandit, enim eget mollis blandit, lorem arcu condimentum felis, ut condimentum est neque at metus. Vestibulum condimentum ac risus ut vestibulum. Sed sapien nisi, tincidunt quis consequat vel, lacinia at velit. Mauris consequat quam neque, eu viverra est aliquam ac. Duis sodales placerat ullamcorper. Suspendisse congue condimentum elit eget sodales. Morbi consectetur risus turpis, quis sollicitudin mi ornare eu. Nullam aliquam rhoncus ex in ornare. Vivamus fringilla eu tortor iaculis maximus.</p>
        </div>

      </div>

    </main>
  )
}

export default Nosotros