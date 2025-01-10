"use client"

import Link from "next/link"
import { ScrollButton } from "./scroll-button"

export function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[600px]">
      <div className="glass-card flex items-center justify-between px-6 py-4 sm:px-12 sm:py-6">
        <Link href="/" className="text-gradient font-bold text-lg sm:text-xl">
          Mamba Accounts
        </Link>
        <div className="flex items-center gap-4">   
          <ScrollButton 
            size="sm"
            className="gradient-border bg-background/50 hover:bg-background/80 transition-all duration-300 text-white"
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
          >
            Buy Now
          </ScrollButton>
        </div>
      </div>
    </div>
  )
}
