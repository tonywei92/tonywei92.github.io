"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonToggleDarkMode } from "@/components/ui/button-toggle-dark-mode";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function Navbar({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("flex justify-center text-sm font-medium", className)}>
      <div className="inline-flex rounded-r-3xl rounded-l-3xl backdrop-blur-sm bg-opacity-50 bg-zinc-200 dark:bg-opacity-50 dark:bg-zinc-800 relative overflow-hidden w-full md:w-auto">
        <div
          className={cn(
            "py-4 px-6 inline-flex items-center justify-between transition-all duration-300 relative z-20 md:w-auto w-full",
            isOpen ? "opacity-100 top-0" : "opacity-0 top-[-100%]"
          )}
        >
          <nav className="flex justify-between space-x-6">
            <a href="/">Home</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
          </nav>
          <div className="pl-24 flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center absolute left-0 right-0 top-0 bottom-0 px-6">
          <div
            className={cn(
              "flex items-center space-x-2 relative transition-all duration-300",
              isOpen ? "left-[-100%]" : "left-0"
            )}
          >
            <Logo className="dark:fill-white w-5 h-5" />
            <div className="dark:text-white">Tony Song</div>
          </div>
          <div
            className={cn(
              "flex items-center space-x-2 relative transition-all duration-300",
              isOpen ? "right-[-100%]" : "right-0"
            )}
          >
            <ButtonToggleDarkMode />
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
