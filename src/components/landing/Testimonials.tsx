import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
// Images
import User from '@images/resources/david.png';

const leftToRight: Variants = {
    offscreen: {
        x: -300,
        opacity: 0,
    },
    onscreen: {
        x: 0,
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
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: .8,
            delay: .1,
        }
    }
}

const Pop: Variants = {
    offscreen: {
        opacity: 0,
        scale: .5
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: .8,
        }
    }
}

const Testimonials = () => {
    return (
        <section className='mt-32'>
            <section className='flex flex-wrap-reverse justify-center items-center'>
                <motion.div
                    initial='offscreen'
                    whileInView={'onscreen'}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div variants={leftToRight}>
                        <div className='p-[1rem] lg:p-10 md:rounded-l-xl w-[max-content]' style={{'background': 'linear-gradient(134.49deg, #1D2F68 0%, #30468A 100%)'}}>;
                            <p className='text-white font-bold text-xl max-w-xs'>
                                La herramienta online con la que cuenta Tooles se convierte en una plataforma sencilla pero eficiente a la hora de monitorear y supervisar los procesos en curso en los diferentes juzgados del país.
                            </p>
                            <p className='text-greenBlue-900 font-bold text-xl my-5'>
                                David E. Montenegro Reyes
                            </p>
                            <p className='text-[#647DCE] font-bold text-sm'>
                                Abogado en Vía 40 Express
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial='offscreen'
                    whileInView={'onscreen'}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div variants={rightToLeft}>
                        <div>
                            <Image
                                src={User}
                                className='rounded-xl w-[320px] lg:w-[400px]'
                                alt='picture of user'
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            <motion.div
                initial='offscreen'
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={Pop}>
                    <section className='flex justify-center mt-14'>
                        <button className='border-solid border-2 border-blue-910 text-blue-910 rounded-lg p-4 font-bold'>
                            Ver todos los testimonios
                        </button>
                    </section>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Testimonials;