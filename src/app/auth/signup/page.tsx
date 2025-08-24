"use client"

import { GameController, Eye, EyeSlash, User } from '@phosphor-icons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'

const schema = z.object({
    username: z.string()
        .min(3, "3+ characters")
        .max(20, "Max 20 characters")
        .regex(/^[a-z0-9_]+$/, "Letters, numbers, _ only"),
    email: z.string().email("Invalid email"),
    password: z.string()
        .min(8, "8+ characters")
        .regex(/[A-Z]/, "1 uppercase letter")
        .regex(/[0-9]/, "1 number"),
    game: z.string().min(1, "Select a game"),
    confirmPassword: z.string()
        .min(8, "8+ characters")
        .regex(/[A-Z]/, "1 uppercase letter")
        .regex(/[0-9]/, "1 number"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
})

const games = [
    { id: 'valorant', name: 'Valorant' },
    { id: 'lol', name: 'League of Legends' },
    { id: 'cs2', name: 'CS2' },
    { id: 'other', name: 'Other' }
]

export default function RegisterPage() {
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: object) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen bg-cyber-black flex items-center justify-center p-4">
            <div className="w-full max-w-xs">
                {/* Logo/Title */}
                <div className="text-center mb-8">
                    <GameController className="mx-auto w-8 h-8" />
                    <h1 className="mt-3 text-2xl font-light tracking-widest text-gray-100">PIXELCLUTCH</h1>
                    <p className="mt-1 text-xs text-gray-500">Join the competition</p>
                </div>

                {/* Registration Card */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Username */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">USERNAME</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <User size={14} className="text-gray-500" />
                                </div>
                                <input
                                    {...register('username')}
                                    className="w-full bg-gray-900/50 border border-gray-800 rounded px-4 pl-9 py-2.5 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-neon-blue/50"
                                    placeholder="your_tag"
                                />
                            </div>
                            {errors.username && <p className="mt-1 text-xs text-red-400">{errors.username.message}</p>}
                        </div>

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

                        {/* Main Game */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">MAIN GAME</label>
                            <select
                                {...register('game')}
                                className="w-full bg-gray-900/50 border border-gray-800 rounded px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 appearance-none"
                            >
                                <option value="">Select game</option>
                                {games.map(game => (
                                    <option key={game.id} value={game.id}>{game.name}</option>
                                ))}
                            </select>
                            {errors.game && <p className="mt-1 text-xs text-red-400">{errors.game.message}</p>}
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
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-neon-blue"
                                >
                                    {showPass ? <EyeSlash size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">CONFIRM PASSWORD</label>
                            <div className="relative">
                                <input
                                    {...register('confirmPassword')}
                                    type={showConfirmPass ? "text" : "password"}
                                    className="w-full bg-gray-900/50 border border-gray-800 rounded px-4 py-2.5 text-sm text-gray-100 focus:outline-none focus:ring-1 focus:ring-neon-blue/50 pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-neon-blue"
                                >
                                    {showConfirmPass ? <EyeSlash size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="mt-1 text-xs text-red-400">{errors.confirmPassword.message}</p>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-cobalt-blue hover:bg-cobalt-blue/90 cursor-pointer py-2.5 rounded text-sm font-medium tracking-wider transition-colors mt-2"
                        >
                            CREATE ACCOUNT
                        </button>
                    </form>

                    <div className="mt-5 pt-5 border-t border-gray-800 text-center">
                        <p className="text-xs text-gray-400">
                            Already registered? <Link href="/auth/signin" className="text-neon-blue hover:underline hover:text-electric-pink">Sign in</Link>
                        </p>
                    </div>
                </div>

                {/* Version */}
                <p className="mt-8 text-center text-xs text-gray-400">v1.0.0</p>
            </div>
        </div>
    )
}