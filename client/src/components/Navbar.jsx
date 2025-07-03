import { Link} from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {Button} from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";

    };

    return (
        <nav className="glass sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-4 py-3 flex justify-between items-center">
            <Link to="/dashboard" className="font-bold text-lg">Dev Task Manager</Link>

            <div className="flex items-center gap-2">
                <ThemeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <UserCircleIcon className="h-6 w-6" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
        
    )
}