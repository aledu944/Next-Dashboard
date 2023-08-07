'use client'
import { FormEvent, useState } from "react"
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs"


export const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const loginWithCredentials = async (e: FormEvent) => {
        e.preventDefault();
        signIn("credentials", { email, password });
        // signIn("credentials", { username: "jsmith", password: "1234" })
    }



    return (
        <form
            className="login__form"
            onSubmit={loginWithCredentials}
        >
            <div className='mb-3 flex flex-col min-w-md'>
                <label className='text-slate-500' htmlFor="email">Correo Electronico:</label>
                <input 
                    className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500' 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className='mb-3 flex flex-col min-w-md'>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500' 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}

                />
            </div>

            <button className="btn-primary w-full" type="submit">Iniciar Sesion</button>
            <button onClick={() => signIn('google')} className="btn-primary w-full flex items-center justify-center gap-2">
                <BsGoogle/>
                Iniciar con Google 
            </button>
        </form>
    )
}
