'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "@/services/api";

interface AuthProviderProps {
    name: string
    email: string
    children: ReactNode
}
export const AuthContext = createContext({})


function AuthProvider({ children }: any) {
    const [data, setData] = useState({})
    
    
    async function singIn({ email, password}: any) {

        try {
            const response = await api.post('http://localhost:3333/sessions', { email, password })
            const { user, token } = response.data

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({ user, token })

            // console.log('usuario: ', user, 'token: ', token)

        } catch(error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('não foi possivel acessar')
            }
        }
    }

    return (
        <AuthContext.Provider value={{ singIn, data }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}


export { AuthProvider, useAuth }