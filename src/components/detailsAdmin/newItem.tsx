import { FormEvent, ReactNode } from "react";
import { FiPlus, FiX } from "react-icons/fi";


interface NewItemProps {
    isNew?: boolean
    value?: string
    onClick?: () => void
    placeholder?: string 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function NewItem({ isNew, value, onClick, onChange, ...rest}: NewItemProps) {

    return (
        <div className="flex flex-col w-full justify-center items-center relative">
            <input 
                type="text" 
                value={value}
                readOnly={!isNew}
                className={`${isNew ? 'focus:ring-2 focus:ring-store-orange' : ' ring-1 ring-store-secondary/35'} flex w-full h-14 mb-2 pl-4 
                invalid:text-red-600 rounded-lg outline-none border-0 placeholder:opacity-30`}
                onChange={onChange}
                {...rest}
            />

                <button
                    type="button"
                    onClick={onClick}
                    className={`${isNew ? 'text-store-orange':'text-red-600'} flex justify-end right-0 pr-4 top-5 absolute`}
                >
                    { isNew ? <FiPlus /> : <FiX />}
                </button>
        </div>
    )
}