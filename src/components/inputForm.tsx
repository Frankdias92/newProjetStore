
interface InputFormProps {
    name?: string
    type: string
    placeHolder: string
    changeValue?: () => void
}

export function InputForm({ name, type, placeHolder, changeValue}: InputFormProps) {

    return (
        <input 
            name={name}  
            type={type}
            placeholder={placeHolder}
            onChange={changeValue}
            required
            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-secondary/35 focus:ring-2 focus:ring-store-orange
            invalid:text-red-600 rounded-lg outline-none placeholder:opacity-30"
        />
    )
}