'use client';
import Form  from "./components/contact/Form";

const Contact = () => {
    return (
        <div className='relative pt-24 lg:pt-60'>
            <section className='wrapper-content flex flex-col xl:flex-row items-end gap-16'>
                <div className='flex flex-col gap-4 w-full xl:w-1/2'>
                    <h1 className='text-primary'> Sobre </h1>
                    <p className=' text-lg' data-aos="fade-up"> Bem-vindo ao <span className='cursor-pointer text-primary font-bold hover:underline'>Atom Blog </span>! Somos apaixonados por tecnologia e estamos aqui para compartilhar as <u>últimas novidades, tendências e análises no mundo da tecnologia</u>. Nossa missão é fornecer informações valiosas e insights úteis para ajudar você a acompanhar o <u>ritmo das inovações tecnológicas em constante evolução</u>. </p>

                    <p className='font-bold mt-4 text-lg'> Nossos principais contatos são: </p>
                    <ol className='list-disc ml-10 text-lg'>
                        <li data-aos="zoom-in"> (81) 999283283 </li>
                        <li data-aos="zoom-in"> atomstudio@gmail.com</li>
                    </ol>
                    <p className='text-lg mt-4'> Entre em contato! Vamos adorar recebê-lo no nosso inbox.</p>
                </div>

                <Form/>
            </section>
        </div>
    )
}

export default Contact