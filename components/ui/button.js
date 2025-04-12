export function Button({ children, variant = "default", className = "" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm";
  const variants = {
    default: "bg-blue-700 text-white hover:bg-blue-800",
    ghost: "bg-transparent text-blue-700 hover:bg-blue-100",
  };
  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
}