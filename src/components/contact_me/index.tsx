import React, { useState } from 'react'
import InputTextField from './InputTextField'
import { useForm } from 'react-hook-form'
import InputTextArea from './InputTextArea'
import Image from 'next/image'
import styles from './contact.module.scss'

function Contact() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (object: any) => {
        console.log("object to submit : ", object);

    }
    return (
        <section className='w-full h-full dark:bg-gradient-to-t from-[#03011000_0%] to-[#030110_100%] py-8' id='contact_me'>

            <div
                className="relative flex flex-col items-center backdrop-blur-lg xs:mx-12"
            // style={{ background: `url(/universe_bubble_bg.svg)`, backgroundRepeat: 'no-repeat', backgroundPositionX: 'center', backgroundPositionY: "center" }}
            >
                <div className='Sfera contact-gradient dark:contact-gradient-dark text-7xl xs:text-4xl uppercase text-center flex flex-col justify-center z-10 translate-y-2 xs:translate-y-0'>
                    <span>start this </span>
                    <span>connection </span>
                </div>
                <div className={`${styles.borderGradient} dark:borderGradientDark flex-none relative z-20`}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={`bg-[#10141D]/5 dark:bg-white/10 rounded-md py-5 px-12 flex flex-col items-center gap-4 relative`}>
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
                            className='Sfera text-xs self-end uppercase bg-darkest/10 dark:bg-white/10 rounded-md py-4 px-4 hover:bg-primary/30'
                        >
                            send request
                        </button>

                    </form>
                </div>
                <Image
                    width={80}
                    height={80}
                    src="/green_bubble.svg"
                    alt="green_bubble"
                    className='z-30 -translate-x-40 xs:-translate-x-28 -translate-y-10 xs:-translate-y-5 ml-10 xs:ml-30'
                />

            </div>

        </section>
    )
}

export default Contact