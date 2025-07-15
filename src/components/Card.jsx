export function Card({ children, className = "" }) {
  return <section className={`${className} relative `}>{children}</section>;
}
