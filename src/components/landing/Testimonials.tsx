import Image from 'next/image';
// Images
import User from '@images/resources/david.png';

const Testimonials = () => {
    return (
        <section className='mt-32'>
            <section className='flex flex-wrap justify-center items-center'>
                <div className='p-[1rem] lg:p-10 rounded-xl md:rounded-l-xl w-[max-content]' style={{'background': 'linear-gradient(134.49deg, #1D2F68 0%, #30468A 100%)'}}>;
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
                <div >
                    <Image
                        src={User}
                        className='rounded-xl w-[320px] lg:w-[400px]'
                        alt='picture of user'
                    />
                </div>
            </section>
            <section className='flex justify-center mt-14'>
                <button className='border-solid border-2 border-blue-910 text-blue-910 rounded-lg p-4 font-bold'>
                    Ver todos los testimonios
                </button>
            </section>
        </section>
    )
}

export default Testimonials;