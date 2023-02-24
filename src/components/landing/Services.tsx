import Link from "next/link";

const Services = () => {
    return (
        <section className='mt-40'>
            <article>
                <h2 className='text-blue-1000 font-black text-2xl mb-20 p-[1rem] lg:pl-[2%] xl:pl-[5%] 2xl:pl-[17%]'>
                    Generamos valor a las pymes y grandes empresas del país
                </h2>
            </article>
            <div className='flex justify-between overflow-x-auto max-w-[80rem] m-auto'>
                <Link href='/' className='flex justify-end flex-col p-4 min-w-[15rem] mx-6 w-64 h-[25rem] bg-blue-1000 rounded-2xl bg-card2 bg-no-repeat bg-cover bg-[-30rem] hover:drop-shadow-4xl'>
                    <h5 className='mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Vigilancia Judicial
                    </h5>
                    <p className='font-medium text-blueGray-50 max-w-[14rem]'>
                        Si eres demandante, demandado o abogado, tendrás la actualización completa de tu proceso.
                    </p>
                </Link>
                <Link href='/' className='flex justify-end flex-col p-4 min-w-[15rem] mx-6 w-64 h-[25rem] bg-blue-1000 rounded-2xl bg-card1 bg-no-repeat bg-cover bg-[-250px] relative hover:drop-shadow-4xl'>
                    <button className='bg-[#f9edff] text-[#b13de9] font-bold rounded-full w-44 py-2 absolute top-[1.5rem] right-[1rem]'>
                        ideal para PYMES
                    </button>
                    <h5 className='mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Vigpro Pyme
                    </h5>
                    <p className='font-medium text-blueGray-50 max-w-[14rem]'>
                        Es un conjunto de soluciones legales en la nube para las pequeñas y medianas empresas.
                    </p>
                </Link>
                <Link href='/' className='flex justify-end flex-col p-4 min-w-[15rem] mx-6 w-64 h-[25rem] bg-blue-1000 rounded-2xl bg-card2 bg-no-repeat bg-cover bg-[-30rem] relative hover:drop-shadow-4xl'>
                    <button className='bg-[#f9edff] text-[#b13de9] font-bold rounded-full w-44 py-2 absolute top-[1.5rem] right-[1rem]'>
                        ideal para PYMES
                    </button>
                    <h5 className='mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Contratos en línea
                    </h5>
                    <p className='font-medium text-blueGray-50 max-w-[14rem]'>
                        Crea tus contratos laborales o de servicios de manera sencilla y ágil dentro de nuestra plataforma.
                    </p>
                </Link>
                <Link href='/' className='flex justify-end flex-col p-4 min-w-[15rem] mx-6 w-64 h-[25rem] bg-blue-1000 rounded-2xl bg-card1 bg-no-repeat bg-cover bg-[-250px] relative hover:drop-shadow-4xl'>
                    <h5 className='mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Proyectos especiales
                    </h5>
                    <p className='font-medium text-blueGray-50 max-w-[14rem]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                    </p>
                </Link>
            </div>
            <div className='flex justify-center mt-10'>
                <button className='border-solid border-2 border-blue-910 text-blue-910 rounded-lg p-4 font-bold'>
                    Ver todos los servicios
                </button>
            </div>
        </section>
    )
}

export default Services;