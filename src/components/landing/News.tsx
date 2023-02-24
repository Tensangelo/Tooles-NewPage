import Link from 'next/link';
import Image from 'next/image';
// Images
import News1 from '@images/resources/news1.png';
import News2 from '@images/resources/news2.png';
import News3 from '@images/resources/news3.png';

const News = () => {
    return (
        <section className='mt-32 max-w-[3000px] m-auto'>
            <p className='text-2xl font-bold text-blue-1000 p-[1rem] lg:pl-[2%] xl:pl-[5%] 2xl:pl-[17rem] mb-16'>
                Conoce las novedades del sector <b className='text-greenBlue-900'>”Legaltech”</b>
            </p>
            <section className='max-w-[80rem] w-full m-auto flex xl:justify-evenly items-center overflow-x-auto'>
                <div className='min-w-[18rem] max-w-sm mx-2 h-[28rem] bg-white rounded-2xl border-2 border-gray-200 shadow hover:border-purple-900 containerNews'>
                    <Link href='/'>
                        <Image
                            src={News1}
                            className='rounded-t-xl w-full h-[12rem]'
                            alt='Imagen de novedad'
                        />
                    </Link>
                    <div className='p-5'>
                        <Link href='/' className='mb-2 text-sm font-bold tracking-tight text-purple-900'>
                            Eventos
                        </Link>
                        <p className='mt-3 mb-3 font-bold text-xl text-blue-950 titleContainer'>
                            Conferencia Legaltech 2.0
                        </p>
                        <p className='mb-3 text-sm font-normal text-blue-950'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et id turpis nibh malesuada morbi hendrerit. 
                        </p>
                        <div className='flex items-center space-x-4 mt-5'>
                            <Image
                                className='w-10 h-10 rounded-full'
                                src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                                width={100}
                                height={10}
                                alt='avatar' />
                            <div className='font-medium dark:text-white'>
                                <div className='text-sm font-bold text-blue-950'>
                                    Mauricio Ragazzi
                                </div>
                                <div className='mt-1 text-xs text-[#9DB8D1]'>
                                    Mar 13, 2022 · 5 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='min-w-[18rem] max-w-sm mx-2 h-[28rem] bg-white rounded-2xl border-2 border-gray-200 shadow hover:border-purple-900 containerNews'>
                    <Link href='/'>
                        <Image
                            src={News2}
                            className='rounded-t-xl w-full h-[12rem]'
                            alt='Imagen de novedad'
                        />
                    </Link>
                    <div className='p-5'>
                        <Link href='/' className='mb-2 text-sm font-bold tracking-tight text-purple-900'>
                            Noticias
                        </Link>
                        <p className='mt-3 mb-3 font-bold text-xl text-blue-950 titleContainer'>
                            Nueva regulación
                        </p>
                        <p className='mb-3 text-sm font-normal text-blue-950'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et id turpis nibh malesuada morbi hendrerit.
                        </p>
                        <div className='flex items-center space-x-4 mt-5'>
                            <Image
                                className='w-10 h-10 rounded-full'
                                src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                                width={100}
                                height={10}
                                alt='avatar' />
                            <div className='font-medium dark:text-white'>
                                <div className='text-sm font-bold text-blue-950'>
                                    Rafael Lopez
                                </div>
                                <div className='mt-1 text-xs text-[#9DB8D1]'>
                                    Mar 08, 2022 · 10 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='min-w-[18rem] max-w-sm mx-2 h-[28rem] bg-white rounded-2xl border-2 border-gray-200 shadow hover:border-purple-900 containerNews'>
                    <Link href='/'>
                        <Image
                            src={News3}
                            className='rounded-t-xl w-full h-[12rem]'
                            alt='Imagen de novedad'
                        />
                    </Link>
                    <div className='p-5'>
                        <Link href='/' className='mb-2 text-sm font-bold tracking-tight text-purple-900'>
                            Podcasts
                        </Link>
                        <p className='mt-3 mb-3 font-bold text-xl text-blue-950 titleContainer'>
                            Podcast para Legaltech
                        </p>
                        <p className='mb-3 text-sm font-normal text-blue-950'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et id turpis nibh malesuada morbi hendrerit. 
                        </p>
                        <div className='flex items-center space-x-4 mt-5'>
                            <Image
                                className='w-10 h-10 rounded-full'
                                src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                                width={100}
                                height={10}
                                alt='avatar' />
                            <div className='font-medium dark:text-white'>
                                <div className='text-sm font-bold text-blue-950'>
                                    Mónica Vega
                                </div>
                                <div className='mt-1 text-xs text-[#9DB8D1]'>
                                    Feb 10, 2022 · 3 min read
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center mt-14'>
                <button className='border-solid border-2 border-blue-910 text-blue-910 rounded-lg p-4 font-bold'>
                    Ver todas las novedades
                </button>
            </section>
        </section>
    )
}

export default News;