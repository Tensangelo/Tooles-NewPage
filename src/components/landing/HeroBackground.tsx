import Image from "next/image";
// Images
import ImageDesktop from '@images/resources/imageDesktop.png';

const HeroBackground = () => {
    return (
        <section className="w-full flex justify-evenly items-center flex-wrap px-10 lg:px-40 py-40 mt-32" style={{ 'background': 'linear-gradient(104.82deg, #0F1C46 -0.69%, #7717A5 100%)' }}>
            <article className="flex items-start flex-col">
                <h1 className="text-greenBlue-900 font-bold text-3xl lg:text-4xl">
                    ¡Prueba Tooles gratis!
                </h1>
                <h3 className="text-white font-medium text-1xl lg:text-2xl max-w-md mt-7">
                    Conoce hoy lo fácil y ágil qué es consultar  procesos jurídicos y legales con Tooles.
                </h3>
                <button type="button" className="text-blue-900 bg-greenBlue-900 border-solid border-2 border-greenBlue-900 hover:bg-greenBlue-700 text-base font-bold rounded-lg px-5 py-2.5 text-center mt-5">
                    Pruébalo gratis
                </button>
            </article>
            <div>
                <Image
                    src={ImageDesktop}
                    className='mt-10'
                    alt='Imagen de interfaz responsive'
                    width={650}
                />
            </div>
        </section>
    )
}

export default HeroBackground;