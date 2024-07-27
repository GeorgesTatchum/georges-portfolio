import React, { useEffect, useState } from 'react'
import InputTextField from './InputTextField'
import { useForm } from 'react-hook-form'
import InputTextArea from './InputTextArea'
import styles from './contact.module.scss'
import useTranslation from 'next-translate/useTranslation'


function Alert(props: any){
    const {status} = props
    const {t} = useTranslation('common')
    return (
        <div 
            className={`flex items-center p-3 pr-6 rounded-lg mb-10`}
            style={{backgroundColor: `${
                status == 200 ?
                "#35DB0030" :
                "rgba(255, 0, 0, 0.30)"
            }`,border: `${
                status == 200 ?
                "solid 2px #35DB00" :
                "solid 2px rgb(255, 0, 0)"
            }`}}>
            <i className= {`material-icons`} style={{marginRight: "0.5em", fontSize: "1.5em"}}>
            {
            status == 200 ?
            "\ue86c" :
            "\ue002"
          }
            </i>
          <span>
          {
            status == 200 ?
            t('successfull_message') :
            t('error_message')
          }
        </span>
        </div>
    )
}
function    Contact() {
    const [isFetching, setIsFetching] = useState(false)
    const [status, setStatus] = useState<any>(undefined)
    const [isFinish, setIsFinish] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {t, lang} = useTranslation('common')

    const onSubmit = async (d: any) => {
        setIsFetching(true)
        
        const postData = {
            email: d.email || '',
            message: d.message || '',
            name: d.username || '',
            phone: d.phone || '',
            society: d.society || ''
        }


        const url = "/api/mail"

        let headers: any = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": `${lang || "fr"};q=0.9`
          },
          mode: "cors",
          cache: "default",
          body: JSON.stringify(postData)
        }

        let response = await fetch(url, headers)
        .then(response => {
            console.log(response)
            return response;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
        console.log(response)
        setStatus(response.status)
        return response;
    }

    useEffect(() => {
        if (isFinish) {
            const finishTimeout = setTimeout(() => {
                setIsFinish(false);
            }, 8000);
    
            return () => {
                clearTimeout(finishTimeout);
            };
        }
    
        if (!!status) {
            const statusTimeout = setTimeout(() => {
                setIsFetching(false);
                setStatus(undefined);
            }, 8000);
    
            return () => {
                clearTimeout(statusTimeout);
            };
        }
    }, [isFinish, status]);
    return (
        <section className='w-full dark:bg-gradient-to-t from-[#03011000_0%] to-[#030110_100%] pt-10 pb-36 overflow-hidden' id='contact_me'>

            <div
                className="xs:mt-10 relative flex flex-col items-center xs:mx-12"
            >
                <div className='Sfera contact-gradient dark:contact-gradient-dark text-8xl sm:text-6xl md:text-7xl xs:text-[40px] uppercase text-center flex flex-col justify-center'>
                    <span className='whitespace-pre-line'>{t("hire_me")}</span>
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
                        {
                           !!status ?
                           <Alert status={status}/> :
                            <button
                                type="submit"
                                className={`uppercase text-base font-black leading-none italic text-[12px] self-end bg-darkest/10 dark:bg-white/10 rounded-[4px] py-3 px-6 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white ${isFetching == true && 'bg-primary'}`}
                            >
                                {t(isFetching ? "loading" : "send_request")}
                            </button>
                        }

                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact