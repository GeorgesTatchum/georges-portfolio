import '@/components/CodeBlock/'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

export const CodeBlock = (props: { description: string, className?: string }) => {
    const { description, className } = props
    const { theme } = useTheme()
    let colors: string[] = ['bg-[#FF5F56]', 'bg-[#FFBD2E]', "bg-[#27C93F]"]

    // const [typedContent, setTypedContent] = useState('');

    // useEffect(() => {
    //     let currentIndex = 0;
    //     const intervalId = setInterval(() => {
    //         if (currentIndex <= description.length) {
    //             setTypedContent(description.slice(0, currentIndex));
    //             currentIndex++;
    //         } else {
    //             clearInterval(intervalId); // Arrête l'effet de frappe lorsque tout le texte est affiché
    //         }
    //     }, 5);

    //     return () => {
    //         clearInterval(intervalId); // Nettoie l'intervalle lors du démontage du composant
    //     };
    // }, [description]);

    return (
        <div className={`flex flex-col gap-3 p-3 border-2 border-gray rounded-lg dark:bg-[#0A1A22] w-full text-sm ${className}`}>
            <div className='flex gap-1'>
                {
                    colors.map((e, index) => (
                        <>
                            <div key={index + e} className={`rounded-[50%] h-3 w-3 ${e} cursor-pointer`} /></>
                    ))
                }

            </div>
            <div className='flex'>
                <div className={`flex-shrink-0 text-right pr-3`}>
                    {description.split("\n").map((_, index) => (
                        <span key={index} className={`block text-[#666666] ${description.split("\n").length > 12 ? 'mt-0.5' : ''}`}>{index + 1}</span>
                    ))}
                </div>
                <div className="flex-grow pl-3 ">
                    {description.split("\n").map((line, index) => (
                        <div key={index + line[12]} className={`whitespace-pre-wrap`}>{parse(line)} </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
