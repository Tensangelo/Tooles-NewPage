const Form = () => {
    return (
        <section className='mt-32'>
            <section className='flex flex-col justify-center items-center'>
                <article className='text-center'>
                    <p className='text-3xl font-bold text-blue-1000 mb-5'>
                        ¿Tienes alguna duda?
                    </p>
                    <p className='text-4xl font-bold text-purple-900 mb-10'>
                        ¡Hablemos!
                    </p>
                    <p className='text-lg text-blue-1000 mb-5'>
                        Dejanos tus datos para contactarte
                    </p>
                </article>
                <form className='max-w-[50rem] w-full mt-10 flex flex-col items-center'>
                    <div className='flex justify-center flex-wrap w-full'>
                        <input
                            type={'text'}
                            placeholder='Nombre completo'
                            required
                            className='w-[90%] my-3 bg-white border-[#bdd7ef] border rounded-md p-3 placeholder:text-[#bdd7ef] outline-none'
                        />
                        <input
                            type={'text'}
                            placeholder='Correo electrónico'
                            required
                            className='w-[90%] bg-white border-[#bdd7ef] border rounded-md p-3 placeholder:text-[#bdd7ef] outline-none'
                        />
                    </div>
                    <textarea
                        placeholder='Cuéntanos tu duda'
                        required
                        className='w-[90%] h-[10rem] m-auto bg-white border-[#bdd7ef] border rounded-md p-3 placeholder:text-[#bdd7ef] resize-none mt-5 outline-none'
                    />
                    <div className='w-[90%] flex justify-end'>
                        <button type='submit' className='bg-white border-[#bdd7ef] border rounded-md text-[#bdd7ef] hover:bg-blue-950 hover:text-greenBlue-900 font-normal text-lg py-4 px-4 mt-4'>
                            Enviar solicitud
                        </button>
                    </div>
                </form>
            </section>
            <article className='max-w-[50rem] m-auto p-[1rem]'>
                <p className='text-sm text-blue-1000 font-bold mt-10 mb-5'>
                    Información de contacto
                </p>
                <p className='text-sm text-[#7f9bb4]'>
                    Cll 127 B Bis # 49-48, Bogotá, Colombia
                </p>
                <p className='text-sm text-[#7f9bb4] my-3'>
                    +57 317 590 2953
                </p>
                <p className='text-sm text-[#7f9bb4]'>
                    hablemos@tooles.com
                </p>
            </article>
        </section>
    )
}

export default Form;