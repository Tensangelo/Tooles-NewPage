import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper';

const Carousel = () => {

    return (
        <section className='mt-32 h-[40rem]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className='h-full'
            >
                <SwiperSlide>
                    <div className='bg-magdalena bg-no-repeat bg-cover bg-center h-full flex flex-col justify-center pl-[13%]'>
                        <p className='text-2xl text-white font-bold'>
                            Estamos presentes
                        </p>
                        <p className='text-2xl text-white font-bold'>
                            en los 1103 municipios
                        </p>
                        <p className='text-2xl text-white font-bold'>
                            de Colombia
                        </p>
                        <p className='text-sm text-white font-bold my-5'>
                            Ciénaga - Magdalena
                        </p>
                        <button type="button" className="text-blue-900 bg-greenBlue-900 border-solid border-2 border-greenBlue-900 hover:bg-greenBlue-700 text-base font-bold rounded-lg px-5 py-2.5 text-center w-[max-content]">
                            Prueba Tooles gratis
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-cartagena bg-no-repeat bg-cover bg-center h-full flex flex-col justify-center pl-[13%]'>
                        <p className='text-2xl text-white font-bold'>
                            Estamos presentes
                        </p>
                        <p className='text-2xl text-white font-bold'>
                            en los 1103 municipios
                        </p>
                        <p className='text-2xl text-white font-bold'>
                            de Colombia
                        </p>
                        <p className='text-sm text-white font-bold my-5'>
                            Cartagena - Bolivar
                        </p>
                        <button type="button" className="text-blue-900 bg-greenBlue-900 border-solid border-2 border-greenBlue-900 hover:bg-greenBlue-700 text-base font-bold rounded-lg px-5 py-2.5 text-center w-[max-content]">
                            Prueba Tooles gratis
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-salento bg-no-repeat bg-cover h-full bg-center flex flex-col justify-center pl-[13%]'>
                        <p className='text-2xl text-white font-bold'>
                            Estamos presentes
                        </p>
                        <p className='text-2xl text-white font-bold'>
                            en los 1103 municipios
                        </p>
                        <p className='text-2xl text-white font-bold'>
                            de Colombia
                        </p>
                        <p className='text-sm text-white font-bold my-5'>
                            Salento - Quindio
                        </p>
                        <button type="button" className="text-blue-900 bg-greenBlue-900 border-solid border-2 border-greenBlue-900 hover:bg-greenBlue-700 text-base font-bold rounded-lg px-5 py-2.5 text-center w-[max-content]">
                            Prueba Tooles gratis
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Carousel;