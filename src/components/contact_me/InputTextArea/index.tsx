import ErrorForm from '../ErrorForm';

export interface formInput {
    label?: string;
    placeholder?: any;
    type?: string;
    controller: any;
    name: string;
    onChange?: any
    isRequired?: any
}

export default function InputTextArea(props: formInput) {
    const {
        label,
        name,
        placeholder,
        isRequired,
        onChange,
        controller
    } = props

    return (
        <div className={``}>
            {label ? <label className='font-bold capitalize'> {label} <b>{isRequired ? "*" : ""}</b> <br /></label> : ''}
            <textarea
                {...controller(name, {
                    required: isRequired ? true : false,
                }
                )}
                min="0"
                className='rounded-md py-2 px-4 w-full h-40 Sfera placeholder-darkest dark:placeholder-white bg-darkest/10 dark:bg-white/10'
                placeholder={placeholder}
                onKeyUp={onChange}
            />
            {
                (isRequired != undefined) && (isRequired[name] && <ErrorForm message={`${isRequired[name]?.message}`} />)
            }
        </div>
    )
}