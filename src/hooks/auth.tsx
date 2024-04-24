'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

interface SingInProps {
    email: string
    password: string
}

export interface User {
    name: string
    email: string
    avatar?: string
    password: string
}

interface AuthContextProps {
    singIn: (SingInProps: SingInProps) => void
    singOut: () => void
    updateProfile: (user: UpdateProfileProps) => void
    user: User | null
}

interface UpdateProfileProps {
    user: {
        id?: string
        name: string
        email: string
        avatar?: string
        password: string
    }
    avatarFile?: File | string
}

export const AuthContext = createContext<AuthContextProps>({
    singIn: () => {},
    singOut: () => {},
    updateProfile: () => {},
    user: null
})


function AuthProvider({ children }: any) {
    const [data, setData] = useState<{ user: User | null; token: string | null }>({
        user: null,
        token: null,
    })
    const [userIsActive, setUserIsActive] = useState<boolean | string>(false)

    const router = useRouter()
    
    function singOut() {
        localStorage.removeItem('@store999:user')
        localStorage.removeItem('@store999:token')

        setData({user: null, token: null})
    }
    
    async function singIn({ email, password}: SingInProps) {

        try {
            const response = await api.post('http://localhost:3333/sessions', { email, password })
            const { user, token } = response.data

            // api.defaults.headers.authorization = `Bearer ${token}`
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            
            localStorage.setItem('@store999:user', JSON.stringify(user))
            localStorage.setItem('@store999:token', token)
            
            setData({ user, token })

            if (data && data.user) {
                router.push('/detailsAdmin')
            } else {
                console.log('erro ao fazer login')
            }
        } catch(error: any) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('não foi possivel acessar')
            }
        }
    }

    async function updateProfile({ user, avatarFile }: UpdateProfileProps) {
        try {

            if (avatarFile) {
                const fileUpload = new FormData()
                fileUpload.append('avatar', avatarFile)

                const response = await api.patch('/users/avatar', fileUpload)
                user.avatar = response.data.avatar
            }

            
            await api.put('users', user)
            localStorage.setItem('@store999:user', JSON.stringify(user))

            setData({ user, token: data.token })
            alert('Perfil atualizado')
        } catch (error) {
            if (error) {
                alert('Erro ao atualizar perfil')
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@store999:token')
        const user = localStorage.getItem('@store999:user')

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
            
            setUserIsActive(user)
        }
        
    }, [])


    useEffect(() => {
        if (userIsActive && data.user) {
            console.log('ativado effect')
            router.push('/detailsAdmin/home')
        } else {
            console.log('desativado')
            router.push('/login')
        }
    }, [router, userIsActive, data])

    
    return (
        <AuthContext.Provider value={{ 
            singIn,
            singOut,
            updateProfile,
            user: data.user
        }}>
            
            {userIsActive ? `Logado!` : 'nao logado'}
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}


export { AuthProvider, useAuth }