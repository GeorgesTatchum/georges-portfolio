import '@/components/CodeBlock/'
import parse from 'html-react-parser'
import { Roboto_Mono } from 'next/font/google'
import { useCallback, useEffect, useRef, useState } from 'react'

const robotMono = Roboto_Mono({ subsets: ['latin'] })

export const CodeBlock = (props: { description: string, className?: string, second?: boolean }) => {
    const { description, className, second } = props
    let colors: string[] = ['bg-[#FF5F56]', 'bg-[#FFBD2E]', "bg-[#27C93F]"]
    let year = new Date().getFullYear() - 2020
    const textRef = useRef(null);
    const [lineCount, setLineCount] = useState(0);

    const calculateLineCount = useCallback(() => {
        if (textRef.current) {
            const element = textRef.current as HTMLElement;
            const style = window.getComputedStyle(element);
            const lineHeight = parseFloat(style.lineHeight);
            const height = element.clientHeight;
            const numberOfLines = height / lineHeight;
    
            // Counting the number of explicit line breaks (\n) in the text
            const lineBreaks = (description.match(/\n/g) || []).length;
    
            // The total number of lines is the sum of the measured lines and the explicit line breaks
            setLineCount(Math.ceil(numberOfLines) + lineBreaks);
        }
    },  [description]);

    useEffect(() => {
        // Calculate the line count after the component is mounted
        setTimeout(calculateLineCount, 0);

        window.addEventListener('resize', calculateLineCount);
        return () => {
            window.removeEventListener('resize', calculateLineCount);
        };
    }, [calculateLineCount]);

    return (
        <div className={`flex flex-col gap-3 p-3 dark:bg-[#0A1A22] text-sm ${className} relative bg-white rounded-lg ${robotMono.className}`}>
            <div className='flex gap-2'>
                {
                    colors.map((e, index) => (
                        <div key={index} className={`rounded-[50%] h-3 w-3 ${e} cursor-pointer`} />
                    ))
                }
            </div>
            <div className='flex flex-row-reverse'>
                <div ref={textRef} className="flex-grow pl-3 text-xs leading-6 whitespace-pre-wrap">
                    {description.replace("{year}", year.toString()).split("\n").map((line, index) => (
                        <div key={index} className={`whitespace-pre-wrap`}>{parse(line)}</div>
                    ))}
                </div>
                <div className={`flex-shrink-0 text-right pr-3 leading-6 gap-1`}>
                    {(Array.from({ length: lineCount })).map((_, index) => (
                        <span key={index} className={`block text-[#666666] text-xs`}>{index + 1}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
