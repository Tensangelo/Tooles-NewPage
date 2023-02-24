import Link from "next/link";

const Links = () => {
    return (
        <section className=''>
            <p className='text-white text-xl font-bold'>
                Enlaces
            </p>
            <ul className='text-white text-sm my-5 font-bold'>
                <li className='my-3'>
                    <Link href='/'>
                        Inicio
                    </Link>
                </li>
                <li className='my-3'>
                    <Link href='/'>
                        Servicios
                    </Link>
                </li>
                <li className='my-3'>
                    <Link href='/'>
                        Clientes
                    </Link>
                </li>
                <li className='my-3'>
                    <Link href='/'>
                        Novedades
                    </Link>
                </li>
                <li className='my-3'>
                    <Link href='/'>
                        Contáctenos
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Links;