import Image from 'next/image';
// Images
import Skandia from '@images/resources/logos/skandia.png';
import Porvenir from '@images/resources/logos/porvenir.png';
import Mutualser from '@images/resources/logos/mutualser.png';
import Suncolombia from '@images/resources/logos/suncolombia.png';

const SuccesStories = () => {
    return (
        <section className='flex justify-center items-center flex-col mt-32'>
            <article>
                <p className='text-blue-950 font-bold text-base'>NUESTROS CASOS DE ÉXITO</p>
            </article>
            <div className='w-full flex justify-evenly items-center flex-wrap 2xl:px-80 xl:px-60'>
                <Image
                    src={Skandia}
                    className='grayscale hover:grayscale-0 w-[200px]'
                    alt='Logo skandia'
                />
                <Image
                    src={Porvenir}
                    className='grayscale hover:grayscale-0'
                    alt='Logo porvenir'
                    width={200}
                />
                <Image
                    src={Mutualser}
                    className='grayscale hover:grayscale-0'
                    alt='Logo mutualser'
                    width={200}
                />
                <Image
                    src={Suncolombia}
                    className='grayscale hover:grayscale-0'
                    alt='Logo suncolombia'
                    width={200}
                />
            </div>
        </section>
    )
}

export default SuccesStories;