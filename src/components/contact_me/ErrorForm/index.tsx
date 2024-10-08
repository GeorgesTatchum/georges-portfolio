import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function ErrorForm(props: any){
  const {t} = useTranslation('common')
  const {message} = props
    return (
        <div className={`bg-blood-red/20 rounded-md flex items-center text-blood-red p-1 my-2`}>
          <span>
          {
            message != undefined && message != "" ?
            message :
            t('required_field')
          }
        </span>
        </div>
    )
}