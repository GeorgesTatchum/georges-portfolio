import ErrorForm from '../ErrorForm';

export interface formInput {
    label?: string;
    placeholder?: string;
    type?: string;
    controller: any;
    name: string;
    onChange?: any
    isRequired?: any
    min?: number
    max?: number
    valueSetter?: any
}

export default function InputTextField(props: formInput) {
    const {
        label,
        name,
        type,
        placeholder,
        isRequired,
        onChange,
        controller,
        min,
        max,
        valueSetter
    } = props

    function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (file && type == 'file') {
            const reader = new FileReader();
            reader.onload = () => {
                valueSetter("base64", reader["result"])
            };
            reader.readAsDataURL(file);
        }
    }


    const fileInputClass = `block text-sm text-slate-500 file:mr-4 mt-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-deep-purple hover:file:bg-deep-purple/25`

    return (
        <div className={`w-full`}>
            {label ? <label className='font-bold'> {label} <b>{isRequired ? "*" : ""}</b> <br /></label> : ''}
            <input
                {...controller(name, {
                    required: isRequired ? true : false,
                }
                )}
                type={type ? type : 'text'}
                className={`${type == "file" ? fileInputClass : 'rounded-[4px] py-3 px-4'} w-full Sfera text-xs placeholder-darkest dark:placeholder-white bg-darkest/10 dark:bg-white/10 border-none outline-none resize-none focus:outline-primary focus:outline focus:outline-2 transition-all duration-300`}
                min={min ? min : 0}
                max={max}
                accept='.pdf, image/*, .docx'
                placeholder={placeholder}
                onKeyUp={onChange}
                onChangeCapture={handleImageUpload}
            />
            {
                (isRequired != undefined) && (isRequired[name] && <ErrorForm message={`${isRequired[name]?.message}`} />)
            }
        </div>
    )
}