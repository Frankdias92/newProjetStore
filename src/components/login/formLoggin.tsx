
import { Button } from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"
import { useRouter } from "next/navigation"


export function LogginAccount() {
    let { isFocusVisible, focusProps } = useFocusRing()
    const router = useRouter()


    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">Bem vindo a sua loja!</h1>
                <p className="font-poppins">entre com seu login.</p>
            </div>
            
            <form 
                // method="POST"
                // onSubmit={onSubmit}
                className="flex flex-col w-full font-poppins lg:w-[90%]"
            >

                <label className="mb-2 text-sm">
                    E-mail
                </label>
                <input 
                    name="email"  
                    type="text"
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-store-orange
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <label className="mb-2 text-sm">
                    Senha
                </label>
                <input 
                    name="password"  
                    type="text"
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-store-orange
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <Button
                    type="button"
                    onClick={() => router.push('/detailsAdmin/home')}
                    className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                    outline-none border-0 focus:ring-2 focus:ring-store-orange"
                        style={{
                            outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                        }}
                >
                    Login
                </Button>

            </form>
        </>
    )
}