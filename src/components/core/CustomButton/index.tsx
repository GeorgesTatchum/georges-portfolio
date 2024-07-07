import useTranslation from 'next-translate/useTranslation'
import React from 'react'

interface CustomButtonProps {
    title: string,
    className?: string,
    onClick?: () => void
  }
const CustomButton = (props: CustomButtonProps) => {
    const { t } = useTranslation('common')
  return (
    <div className={`dark:bg-white/10 bg-gray bg-opacity-10 hover:!bg-primary dark:hover:!bg-primary/60 hover:!text-white rounded-md items-center flex justify-center p-3 hover:cursor-pointer ${props.className}`}
    onClick={props.onClick}
    >
        <span className="uppercase text-center truncate text-base Sfera hover:cursor-pointer">{t(props.title)}</span>
    </div>
  )
}

export default CustomButton