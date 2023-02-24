import HeroVideo from "./landing/HeroVideo";
import SuccesStories from "./landing/SuccesStories";
import HeroImage from "./landing/HeroImage";
import Services from "./landing/Services";
import Carousel from "./landing/Carousel";
import Testimonials from "./landing/Testimonials";
import HeroBackground from "./landing/HeroBackground";
import News from "./landing/News";
import Form from "./landing/Form";

const LandingPage = () => {
    return (
        <>
            <HeroVideo />
            <SuccesStories />
            <HeroImage />
            <Services />
            <Carousel />
            <Testimonials />
            <HeroBackground />
            <News />
            <Form />
        </>
    )
}

export default LandingPage;