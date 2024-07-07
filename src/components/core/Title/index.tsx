import React from 'react'
interface TitleProps {
    title: string,
    className?: string
}
const Title = (props: TitleProps) => {
  return (
    <span className={`Sfera text-5xl md:text-4xl sm:text-2xl xs:text-2xl text-left ${props.className !== undefined ? props.className : ''}`}>
        {props.title}
    </span>
  )
}

export default Title