'use client';

import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Menu, User, X } from "lucide-react";
import React from "react";
import Sidebar from "./sidebar";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
    const [open, setOpen] = React.useState(false);
    const handleMenuClick = () => {
        setOpen(!open);
    }

    const router = useRouter()
    return (
        <>
            <header className="h-20 flex sticky bg-cyber-black z-12 top-0 items-center justify-between px-4 border-b border-gray-800">
                <div className="flex items-center space-x-4">
                    <h1 className="text-3xl font-bold">Pixel<span className="text-electric-pink">Clutch</span></h1>
                </div>
                <div className="items-center flex space-x-4">
                    {/* <Notification.Root>
                        <Notification.Content text="Olá" />
                        <Notification.Actions>
                            <Notification.Action icon={X} />
                            <Notification.Action icon={Check} />
                        </Notification.Actions>
                    </Notification.Root> */}

                    <DropdownMenu>
                        <DropdownMenuTrigger className="p-2 rounded-full cursor-pointer hover:text-electric-pink">
                            <User className="h-6 w-6" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 bg-cyber-black">
                            <DropdownMenuItem onClick={() => router.push('/hub/profile')} className="cursor-pointer">
                                Perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push('/hub/settings')} className="cursor-pointer">
                                Configurações
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut} className="cursor-pointer text-red-500">
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="">
                        {
                            open ? (
                                <X className="cursor-pointer hover:text-electric-pink" onClick={handleMenuClick} />
                            ) : (
                                <Menu className="cursor-pointer hover:text-electric-pink" onClick={handleMenuClick} />
                            )
                        }
                    </div>
                </div>
            </header>
            <div className="">
                <Sidebar open={open} />
            </div>
        </>
    );
}