import React from 'react'
import styles from './loader.module.scss'
import useTranslation from 'next-translate/useTranslation'

const Loader = () => {
  const {t}= useTranslation('common')
  return (
    <div className='flex items-center justify-center h-screen xs:px-10'>
        <div className='relative flex justify-center items-center'>
        <div className={`${styles.ring}`}></div>
        <div className={`${styles.ring}`}></div>
        <div className={`${styles.ring}`}></div>
        <span className='text-sm'>{t('loading')}</span>
    </div>
    </div>
  )
}

export default Loader