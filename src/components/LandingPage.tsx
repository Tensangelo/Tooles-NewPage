import HeroVideo from "./landing/HeroVideo";
import SuccesStories from "./landing/SuccesStories";
import HeroImage from "./landing/HeroImage";
import Services from "./landing/Services";
import Carousel from "./landing/Carousel";
import Testimonials from "./landing/Testimonials";
import HeroBackground from "./landing/HeroBackground";
import News from "./landing/News";
import Form from "./landing/Form";
import { motion, Variants } from 'framer-motion';
// Animation
const Pop: Variants = {
    offscreen: {
        opacity: 0,
        y: 300,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: .8,
        }
    }
}

const LandingPage = () => {
    return (
        <>
            <HeroVideo />
            <SuccesStories />
            <HeroImage />
            <motion.div
                initial='offscreen'
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={Pop}>
                    <Services />
                </motion.div>
            </motion.div>
            <Carousel />
            <Testimonials />
            <HeroBackground />
            <motion.div
                initial='offscreen'
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={Pop}>
                    <News />
                </motion.div>
            </motion.div>
            <motion.div
                initial='offscreen'
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={Pop}>
                    <Form />
                </motion.div>
            </motion.div>
        </>
    )
}

export default LandingPage;