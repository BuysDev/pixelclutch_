"use client"

import { useState } from "react"
import Header from "@/components/hub/navigation/header";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Profile() {
    const [preview, setPreview] = useState<string | null>(null)

    function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="flex-1 p-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold mt-4 text-white">Meu perfil</h1>

                    <div className="mt-6 bg-zinc-900/60 border border-gray-700 rounded-lg shadow-lg">
                        {/* Avatar + Nome */}
                        <div className="p-6 flex items-center gap-6 border-b border-gray-700">
                            <div className="relative">
                                <Avatar className="bg-electric-pink/10 rounded-full flex items-center justify-center w-24 h-24 overflow-hidden">
                                    {preview ? (
                                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-2xl font-bold text-white">MG</span>
                                    )}
                                </Avatar>

                                {/* Botão de upload */}
                                <label
                                    htmlFor="avatarUpload"
                                    className="absolute bottom-0 right-0 bg-electric-pink text-black text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-pink-600"
                                >
                                    Alterar
                                </label>
                                <Input
                                    id="avatarUpload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white">Mago GZR</h2>
                                <p className="text-gray-400">G4RR4</p>
                            </div>
                        </div>

                        {/* Formulário */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input type="text" className="border-gray-600 rounded-md" placeholder="Nome de usuário" />
                            <Input type="email" className="border-gray-600 rounded-md" placeholder="Email" />
                            <Input type="text" className="border-gray-600 rounded-md" placeholder="País" />
                            <Input type="text" className="border-gray-600 rounded-md" placeholder="Função no time" />
                        </div>

                        {/* Botão */}
                        <div className="p-6 flex justify-end">
                            <button className="bg-electric-pink text-black font-bold py-2 px-6 rounded-lg hover:bg-pink-600 transition">
                                Salvar alterações
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
