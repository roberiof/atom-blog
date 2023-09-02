'use client';
import { MessageType } from '@/types'
import { PostMessageAPi } from '@/utils'
import React , { useState , useEffect } from 'react'

interface FocusedInputType{
    name: boolean, 
    email: boolean, 
    message: boolean
}

const Contact = () => {
    const [ isFocusedInputs , setIsFocusedInputs ] = useState<FocusedInputType>({
        name: false,
        email: false,
        message: false
    })
    const defaultFormValues = {
        name: '',
        email: '',
        message: ''
    }
    const [ formValues , setFormValues ] = useState<MessageType>(defaultFormValues)
    const [isSubmitBtnDisabled , setIsSubmitBtnDisabled] = useState<boolean>(true)


    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, objectKey:string) => {
        setFormValues(prev => {
          const newObj = {...prev}
          newObj[objectKey] = e.target.value
          return newObj 
        })
    }

    const handleFocusChange = (objectKey:string) => {
        if(formValues[objectKey] !== ''){
            return 
        }

        setIsFocusedInputs(prev => {
          const newObj = {...prev}
          newObj[objectKey] = !newObj[objectKey]
          return newObj 
        })
    }

    const StoreMessage = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()  
        PostMessageAPi(formValues)
        setTimeout( () => (
            alert('Mensagem enviada com sucesso!')
        ), 400)
        setFormValues(defaultFormValues)
    }

    useEffect(() => {
        const isAllInfoFilledUp = Object.values(formValues).every(item => item != '')
        const response = Object.values(formValues).every(item => item != '') && formValues.email.includes('@')
        setIsSubmitBtnDisabled(!response);
      }, [formValues]);

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
                
                <form className='w-full xl:w-1/2 mt-8 lg:mt-0' onSubmit={(e) => StoreMessage(e)}> 
                    <div className='w-full xl:w-2/3 m-auto flex flex-col gap-8' data-aos="fade-left">
                        <div className={`${isFocusedInputs.name ? 'focus' : ''} inputDiv`}>
                            <label htmlFor="name"> Name </label>
                            <input
                                type="text" required
                                onFocus={() => handleFocusChange('name')}
                                onBlur={() => handleFocusChange('name')}
                                value={formValues.name}
                                onChange={(e) => handleInputChange(e, 'name')}
                            />
                        </div>

                        <div className={`${isFocusedInputs.email ? 'focus' : ''} inputDiv`}>
                            <label htmlFor="email"> Email </label>
                            <input
                                type="text" required
                                onFocus={() => handleFocusChange('email')}
                                onBlur={() => handleFocusChange('email')}
                                value={formValues.email}
                                onChange={(e) => handleInputChange(e, 'email')}
                            />
                        </div>

                        <div className={`${isFocusedInputs.message ? 'focus' : ''} inputDiv`}>
                            <label htmlFor="message"> Message </label>
                            <textarea
                                required
                                onFocus={() => handleFocusChange('message')}
                                onBlur={() => handleFocusChange('message')}
                                value={formValues.message}
                                onChange={(e) => handleInputChange(e, 'message')}
                            />
                        </div>

                        <button type='submit' id="submitBtnForm" aria-label="Form Result" disabled={isSubmitBtnDisabled}
                            className={`border-2 p-2 rounded-md transition-all font-bold ${isSubmitBtnDisabled ? 'text-primary' : 'bg-primary text-white'}`}> 
                            Enviar 
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact