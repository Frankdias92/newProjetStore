

import { Button } from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"
import { useRouter } from "next/navigation"

import { api } from "../../services/api"
import { useState } from "react"


export function CreateAccount() {
    let { isFocusVisible, focusProps } = useFocusRing()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useRouter()
    

    function handleSingUp() {
        // console.log(name, email, password)

        if (!name || !email || !password) {
            alert('Preencha todos os campos!')
        }

        api.post('/users', { name, email, password })
        .then(() => {
            alert('Usuário cadastrado com sucesso!')
            navigate.push('/login')
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possivel cadastrar')
            }
        })
    }


    

    return (
        <section className="flex flex-col w-[320px] py-20 items-center">
            <h1 className="text-2xl w-full ml-6 mb-5 font-bold">Criar conta!</h1>
            
            <form 
                // method="POST"
                // onSubmit={onSubmit}
                className="flex flex-col w-full font-poppins lg:w-[90%]"
            >
                <label className="mb-2 text-sm">
                    Your name
                </label>
                <input 
                    name="name"  
                    type="text"
                    onChange={event => setName(event.target.value)}
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-orange focus:ring-2 focus:ring-store-orange
                    invalid:text-red-600 rounded-lg outline-none"
                />


                <label className="mb-2 text-sm">
                    E-mail adress
                </label>
                <input 
                    name="email"  
                    type="text"
                    onChange={event => setEmail(event.target.value)}
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-orange focus:ring-2 focus:ring-store-orange
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <label className="mb-2 text-sm">
                    Create password
                </label>
                <input 
                    name="password"  
                    type='text'
                    onChange={event => setPassword(event.target.value)}
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-store-orange focus:ring-2 focus:ring-store-orange
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <Button
                    type="button"
                    onClick={handleSingUp}
                    className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-store-orange rounded-xl mt-6 shadow-lg antialiased
                    outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second"
                        style={{
                            outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                        }}
                >
                    Login
                </Button>
            </form>
        </section>
    )
}