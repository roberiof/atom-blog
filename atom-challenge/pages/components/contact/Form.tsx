import { MessageType } from '@/types'
import { PostMessageAPi } from '@/utils'
import React , { useState , useEffect } from 'react'

interface FocusedInputType{
    name: boolean, 
    email: boolean, 
    message: boolean
}

type ObjectKeyType = 'name' | 'email' | 'message'

type InputTextareaEventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

export const Form = () => {
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


    const handleInputChange = (e:InputTextareaEventType, objectKey:ObjectKeyType) => {
        setFormValues(prev => {
          const newObj = {...prev}
          newObj[objectKey] = e.target.value
          return newObj 
        })
    }

    const handleFocusChange = (objectKey:ObjectKeyType) => {
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
        const response = isAllInfoFilledUp && formValues.email.includes('@')
        setIsSubmitBtnDisabled(!response);
      }, [formValues]);

  return (
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
                className={`border-2 p-2 rounded-md transition-all font-bold ${isSubmitBtnDisabled ? 'text-primary' : 'bg-primary text-white'}`}
            > 
                Enviar 
            </button>
        </div>
    </form>
  )
}
