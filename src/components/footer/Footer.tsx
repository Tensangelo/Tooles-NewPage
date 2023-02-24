import Link from "next/link";
import Info from "./Info";
import Links from "./Links";
import Products from "./Products";

const Footer = () => {
    return (
        <section className='bg-blue-1000 pt-[5rem] pb-5 px-4 mt-32'>
            <section className='flex justify-evenly items-start flex-wrap w-full h-[100%]'>
                <Info />
                <Links />
                <Products />
            </section>
            <div className='bg-blue-910 w-11/12 h-[1px] m-auto' />
            <article className='flex flex-wrap justify-evenly mt-5 text-center'>
                <p className='text-white text-sm mt-4'>
                    Desarrollo por &nbsp;
                    <Link href={'https://portfolio-ang.vercel.app/'} className='font-bold'>
                        Angelo Gaona
                    </Link>
                </p>
                <p className='text-white text-sm mt-4'>
                    Copyright® 2021 | All Rights Reserved | Powered by <b>TOOLES ©</b>
                </p>
            </article>
        </section>
    )
}

export default Footer;