import '@/components/CodeBlock/'
import parse from 'html-react-parser'

export const CodeBlock = (props: { description: string, className?: string, second?: boolean }) => {
    const { description, className, second } = props
    let colors: string[] = ['bg-[#FF5F56]', 'bg-[#FFBD2E]', "bg-[#27C93F]"]
    let year = new Date().getFullYear() - 2020

    return (
        <div className={`flex flex-col gap-3 p-3 dark:bg-[#0A1A22] text-sm ${className} relative bg-white rounded-lg`}>
            <div className='flex gap-2'>
                {
                    colors.map((e, index) => (
                        <>
                            <div key={index + e} className={`rounded-[50%] h-3 w-3 ${e} cursor-pointer`} /></>
                    ))
                }

            </div>
            <div className='flex'>
                <div className={`flex-shrink-0 text-right pr-3 ${second === true ? 'leading-7' : 'leading-8'}`}>
                    {(second === true ? (description.split("\n")).concat(["1", "2", "3", "4","5","6"]) : description.split("\n")).map((_, index) => (
                        <span key={index} className={`block text-[#666666] `}>{index + 1}</span>
                    ))}
                </div>
                <div className="flex-grow pl-3 text-xs leading-6">
                    {description.replace("{year}", year.toString()).split("\n").map((line, index) => (
                        <div key={index + line[12]} className={`whitespace-pre-wrap ${description.split("\n").length <= 12 ? 'mt-1 '  : ''}`}>{parse(line)} </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
