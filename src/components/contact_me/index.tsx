import React, { useState } from 'react'
import InputTextField from './InputTextField'
import { useForm } from 'react-hook-form'
import InputTextArea from './InputTextArea'
import Image from 'next/image'
import styles from './contact.module.scss'
import CustomButton from '../core/CustomButton'

function    Contact() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (object: any) => {
        console.log("object to submit : ", object);

    }
    return (
        <section className='w-full h-full dark:bg-gradient-to-t from-[#03011000_0%] to-[#030110_100%] pt-10 pb-36 overflow-hidden' id='contact_me'>

            <div
                className="relative flex flex-col items-center xs:mx-12"
            >
                <div className='Sfera contact-gradient dark:contact-gradient-dark text-8xl sm:text-6xl xs:text-[40px] uppercase text-center flex flex-col justify-center'>
                    <span className='whitespace-pre-line'>{"start this\nconnection"}</span>
                </div>
                <div className={`${styles.form} w-[320px] -mt-4 z-10 xs:mt-3 bg-white/10`}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={`${styles.formContent}`} style={{ backdropFilter: 'blur(10px)'}}>
                        <InputTextField
                            placeholder={'your name'}
                            controller={register}
                            name='username'
                            type='text'
                            isRequired={errors}
                        />
                        <InputTextField
                            placeholder={'email adress'}
                            controller={register}
                            name='email'
                            type='email'
                            isRequired={errors}
                        />
                        <InputTextField
                            placeholder={'phone number'}
                            controller={register}
                            name='phone'
                            type='tel'
                            isRequired={errors}
                        />
                        <InputTextField
                            placeholder={'society'}
                            controller={register}
                            name='society'
                            type='text'
                        />
                        <InputTextArea
                            placeholder={'message'}
                            controller={register}
                            name='message'
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className='Sfera text-[12px] leading-[10px] self-end uppercase bg-darkest/10 dark:bg-white/10 rounded-[4px] py-4 px-4 hover:bg-primary hover:text-white'
                        >
                            {"send request"}
                        </button>

                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact