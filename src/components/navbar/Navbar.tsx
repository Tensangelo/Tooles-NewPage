import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial='offscreen'
            whileInView={'onscreen'}
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: .6,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5'>
                    <div className='container flex flex-wrap items-center justify-between mx-auto'>
                        <Link href={'/'} className='flex items-center'>
                            <Image
                                src={'https://tooles.co/wp-content/uploads/2022/09/TOOLES-A-M.png'}
                                alt={'Logo Tooles'}
                                width={124}
                                height={19.2}
                            />
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            data-collapse-toggle='navbar-default'
                            type='button'
                            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            aria-controls='navbar-default'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            )}
                        </button>
                        <div className='hidden w-full lg:block lg:w-auto' id='navbar-default'>
                            <ul className='flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
                                <li>
                                    <a href='#' className='block py-2 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900 md:p-0' aria-current='page'>
                                        Servicios
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='block py-2 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900 md:p-0' aria-current='page'>
                                        Clientes
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='block py-2 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900 md:p-0' aria-current='page'>
                                        Novedades
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='block py-2 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900 md:p-0' aria-current='page'>
                                        Contáctenos
                                    </a>
                                </li>
                                <li>
                                    <button type='button' className='text-blue-900 bg-transparent border-solid border-2 border-blue-900 hover:border-violet-900 hover:text-violet-900 rounded-lg text-base font-bold px-5 py-2.5 text-center'>
                                        Iniciar sesión
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='text-blue-900 bg-greenBlue-900 border-solid border-2 border-greenBlue-900 hover:bg-greenBlue-700 text-base font-bold rounded-lg px-5 py-2.5 text-center'>
                                        Registrarme
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Transition
                        show={isOpen}
                        enter='transition ease-out duration-100 transform'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='transition ease-in duration-75 transform'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        {(ref) => (
                            <div className='lg:hidden' id='mobile-menu'>
                                <div ref={ref} className='px-2 pt-2 pb-3 space-y-2 sm:px-3 text-center'>
                                    <a href='#' className='block py-1 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900' aria-current='page'>
                                        Servicios
                                    </a>
                                    <a href='#' className='block py-1 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900' aria-current='page'>
                                        Clientes
                                    </a>
                                    <a href='#' className='block py-1 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900' aria-current='page'>
                                        Novedades
                                    </a>
                                    <a href='#' className='block py-1 pl-3 pr-4 text-base font-bold text-blue-900 rounded hover:text-violet-900' aria-current='page'>
                                        Contáctenos
                                    </a>
                                    <button type='button' className='text-blue-900 bg-transparent border-solid border-2 border-blue-900 hover:border-violet-900 hover:text-violet-900 rounded-lg text-base font-bold px-5 py-2.5 text-center mr-3'>
                                        Iniciar sesión
                                    </button>
                                    <button type='button' className='text-blue-900 bg-greenBlue-900 border-solid border-2 border-greenBlue-900 hover:bg-greenBlue-700 text-base font-bold rounded-lg px-5 py-2.5 text-center mr-3'>
                                        Registrarme
                                    </button>
                                    <div className='block w-full h-0.5 bg-blue-900' />
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>
            </motion.div>
        </motion.div>
    )
}

export default Navbar;