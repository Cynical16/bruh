"use client"

import { Button } from "@/components/ui/button"

interface ScrollButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function ScrollButton({ children, className, size = "default" }: ScrollButtonProps) {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button 
      size={size}
      className={className}
      onClick={scrollToProducts}
    >
      {children}
    </Button>
  );
} 