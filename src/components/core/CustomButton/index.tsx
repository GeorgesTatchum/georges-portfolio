import useTranslation from 'next-translate/useTranslation'
import React from 'react'

interface CustomButtonProps {
    title: string,
    className?: string,
    onClick?: () => void,
    size?: 'small' | 'medium'
    disable?: boolean
  }
const CustomButton = (props: CustomButtonProps) => {
    const { t } = useTranslation('common')
    const { className, title, onClick, size = 'medium' } = props
  return (
    <button 
      className={`dark:bg-white/10 bg-gray bg-opacity-10 rounded-md items-center flex justify-center p-4 hover:cursor-pointer ${props.disable === true ? '' : 'hover:!bg-primary dark:hover:!bg-primary/60 hover:!text-white hover:scale-[1.02] transition-transform duration-300 transform-origin-center ease-in-out'} ${className} `}
      onClick={onClick}
    >
        <span className={`uppercase text-center truncate ${size === 'small' ? ' text-xs leading-[10px]' : 'text-base leading-4'} Sfera hover:cursor-pointer select-none`}>{t(title)}</span>
    </button>
  )
}

export default CustomButton