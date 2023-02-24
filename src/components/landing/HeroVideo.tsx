import Image from 'next/image';
// Images
import Video from '@images/resources/video.png';

const HeroVideo = () => {
    return (
        <section className='w-full flex justify-evenly items-center flex-wrap mt-10 p-[1rem] 2xl:px-44 xl:px-40'>
            <article>
                <h1 className='text-blue-1000 font-black 2xl:text-6xl xl:text-6xl lg:text-5xl text-3xl max-w-xl'>
                    Gestiona tus procesos legales <b className='text-greenBlue-900'>digitalmente</b>
                </h1>
                <h3 className='text-blue-1000 font-medium text-1xl lg:text-2xl lg max-w-lg mt-7'>
                    Con <b className='text-blue-1000 font-black'>Tooles</b> no es necesario ser un experto en áspectos jurídicos. Aprende a gestionar y vigilar fácilmente tus procesos legales a través de nuestras herramientas digitales.
                </h3>
                <p className='text-blue-1000 font-bold text-lg max-w-lg mt-7'>
                    Anímate y conoce nuestra herramienta gratuita
                </p>
                <button type='button' className='bg-blue-950 text-greenBlue-900 font-normal text-lg rounded-lg py-4 px-4 hover:bg-blue-910 mt-4'>
                    ¡Conoce Tooles gratis!
                </button>
            </article>
            <div>
                <Image
                    src={Video}
                    className='rounded-lg drop-shadow-3xl 2xl:w-[440px] xl:w-[400px] lg:w-[340px] md:w-[280px] w-[280px] mt-10'
                    alt='imagen simulador de un reproductor de video'
                    priority
                />
            </div>
        </section>
    )
}

export default HeroVideo;