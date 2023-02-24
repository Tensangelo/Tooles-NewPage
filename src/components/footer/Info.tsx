import Image from "next/image";

const Info = () => {
    return (
        <section className="mb-10">
            <div>
                <Image
                    src={'https://tooles.co/wp-content/uploads/2022/10/Logo.png'}
                    alt='Logo Tooles Blanco'
                    width={120}
                    height={10}
                />
            </div>
            <article>
                <p className='text-2xl text-white font-bold my-5'>
                    ¡Conoce Tooles gratis!
                </p>
                <p className='text-sm text-white max-w-[320px]'>
                    Para conocer Tooles no necesitas ser un experto en el ámbito jurídico ni realizar una gran inversión, puedes iniciar probando nuestra herramienta de forma gratutita
                </p>
                <button type="button" className="text-blue-900 bg-greenBlue-900 border-solid border-2 border-greenBlue-900 hover:bg-greenBlue-700 text-base font-bold rounded-lg px-5 py-2.5 text-center mt-5">
                    Conoce Tooles aquí
                </button>
            </article>
        </section>
    )
}

export default Info;