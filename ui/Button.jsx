import React from "react";

export function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold btn-focus transition-all";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl hover:scale-[1.02]",
    secondary:
      "bg-white text-blue-700 border-2 border-blue-600 hover:bg-blue-50",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
    subtle: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    warning: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    success: "bg-green-500 text-white hover:bg-green-600",
  };
  return (
    <Comp className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}

// Utilidad local: concatenar clases evitando falsy
export function cn(...args) {
  return args.filter(Boolean).join(" ");
}