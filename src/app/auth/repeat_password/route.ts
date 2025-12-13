'use client'

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleReset(e: React.FormEvent) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        // Aqui você pode chamar sua API de reset de senha
        console.log("Resetar senha para:", email, password);
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-zinc-900/80 border border-gray-700 rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-white text-center mb-6">Resetar Senha</h1>

                <form onSubmit={handleReset} className="flex flex-col gap-4">
                    <Input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-gray-600 rounded-md"
                    />

                    <Input
                        type="password"
                        placeholder="Nova senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-gray-600 rounded-md"
                    />

                    <Input
                        type="password"
                        placeholder="Confirmar nova senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="border-gray-600 rounded-md"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-electric-pink text-black font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition"
                    >
                        Salvar Senha
                    </button>
                </form>
            </div>
        </div>
    );
}
