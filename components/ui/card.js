export function Card({ children }) {
  return <div className="bg-white rounded-2xl shadow-md">{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}