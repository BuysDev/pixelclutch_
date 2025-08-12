import { PlaySquareIcon, PlusCircleIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
    open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
    return (
        <aside className={`${open ? 'w-64' : 'hidden'} fixed h-screen z-2 border-r bg-cyber-black border-gray-800 text-white p-4`}>
            <nav className="space-y-2">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-700 items-center rounded">
                    <SearchIcon className="inline-block mr-2" />
                    {open ? "Search" : ""}
                </Link>
                <Link href="/hub/create" className="block px-4 py-2 hover:bg-gray-700 rounded items-center">
                    <PlusCircleIcon className="inline-block mr-2" />
                    {open ? "Create" : ""}
                </Link>
                <Link href="/hub/drops" className="block px-4 py-2 hover:bg-gray-700 rounded items-center">
                    <PlaySquareIcon className="inline-block mr-2" />
                    {open ? "Drops" : ""}
                </Link>
            </nav>
        </aside>
    )
}