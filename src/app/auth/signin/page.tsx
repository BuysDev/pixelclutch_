"use client"

import { GameController, Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Minimum 6 characters")
})

export default function LoginPage() {
    const [showPass, setShowPass] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen bg-cyber-black flex items-center justify-center p-4">
            <div className="w-full max-w-xs">
                <div className="text-center mb-8">
                    <GameController className="mx-auto w-8 h-8 text-neon-blue" />
                    <h1 className="mt-3 text-2xl font-light tracking-widest text-gray-100">PIXELCLUTCH</h1>
                </div>

                {/* Login Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">EMAIL</label>
                            <input
                                {...register('email')}
                                type="email"
                                className="w-full bg-gray-900/50 border border-gray-800 rounded px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-neon-blue/50"
                                placeholder="player@example.com"
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">PASSWORD</label>
                            <div className="relative">
                                <input
                                    {...register('password')}
                                    type={showPass ? "text" : "password"}
                                    className="w-full bg-gray-900/50 border border-gray-800 rounded px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-electric-pink"
                                >
                                    {showPass ? <EyeSlash className='cursor-pointer' size={14} /> : <Eye className='cursor-pointer' size={14} />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-cobalt-blue hover:bg-cobalt-blue/90 text-white py-2.5 rounded text-sm font-medium tracking-wider transition-colors cursor-pointer"
                        >
                            SIGN IN
                        </button>
                    </form>

                    <div className="mt-5 pt-5 border-t border-gray-800 text-center">
                        <a href="#" className="text-xs text-gray-300 hover:text-electric-pink hover:underline">
                            Forgot password?
                        </a>
                        <p className="mt-3 text-xs text-gray-400">
                            New player? <a href="/register" className="hover:text-electric-pink hover:underline">Create account</a>
                        </p>
                    </div>
                </div>

                {/* Version */}
                <p className="mt-8 text-center text-xs text-gray-400">v1.0.0</p>
            </div>
        </div>
    )
}