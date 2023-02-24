import Link from "next/link";

const Products = () => {
    return (
        <section className=''>
            <p className='text-white text-xl font-bold'>
                Producto
            </p>
            <ul className='text-white text-sm my-5 font-bold'>
                <li className='my-3'>
                    <Link href='/'>
                        Iniciar sesión
                    </Link>
                </li>
                <li className='my-3'>
                    <Link href='/'>
                        Registrarme
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Products;