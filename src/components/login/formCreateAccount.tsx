
import { Button } from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"


export function CreateAccount() {
    let { isFocusVisible, focusProps } = useFocusRing()

    

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <p className="font-poppins">Please login to your account.</p>
            </div>
            
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
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                    invalid:text-red-600 rounded-lg outline-none"
                />


                <label className="mb-2 text-sm">
                    E-mail adress
                </label>
                <input 
                    name="email"  
                    type="text"
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <label className="mb-2 text-sm">
                    Create password
                </label>
                <input 
                    name="password"  
                    type="text"
                    required
                    className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                    invalid:text-red-600 rounded-lg outline-none"
                />

                <Button
                    type="button"
                    className="flex text-xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                    outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second"
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