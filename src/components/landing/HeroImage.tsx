import Image from "next/image";
import { motion, Variants } from 'framer-motion';
// Images
import ImageDesktop from '@images/resources/imageDesktop.png';

const leftToRight: Variants = {
    offscreen: {
        x: -300,
        opacity: 0,
    },
    onscreen: {
        x: -50,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: .8,
            delay: .1,
        }
    }
}

const rightToLeft: Variants = {
    offscreen: {
        x: 300,
        opacity: 0,
    },
    onscreen: {
        x: 50,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: .8,
            delay: .1,
        }
    }
}

const HeroImage = () => {
    return (
        <section className="w-full flex justify-evenly items-center flex-wrap px-[1rem] 2xl:px-40 xl:flex-nowrap 2xl:flex-nowrap mt-20">
            <motion.div
                initial='offscreen'
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={leftToRight}>
                    <div>
                        <Image
                            src={ImageDesktop}
                            className='w-[480px] lg:w-[650px]'
                            alt='Imagen de interfaz responsive'
                        />
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial='offscreen'
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={rightToLeft}>
                    <article className="flex items-start flex-col text-start mt-10 xl:items-end xl:text-end">
                        <h1 className="text-blue-1000 font-black text-3xl lg:text-5xl max-w-xs">
                            <b className="text-purple-900">Tooles</b>, más que una herramienta
                        </h1>
                        <h3 className="text-blue-1000 font-medium text-lg max-w-md mt-7">
                            Además de conocer a tiempo las novedades de tus procesos legales a través del servicio de vigilancia, pódras generar y comprar contratos en línea, contar con asesorías legales personalizadas y muchas opciones más que se ajustan a tus necesidades o a las de tu empresa
                        </h3>
                        <button type="button" className='bg-blue-950 text-greenBlue-900 font-normal text-lg rounded-lg py-4 px-4 hover:bg-blue-910 mt-4'>
                            Conoce Tooles gratis
                        </button>
                    </article>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HeroImage;