export function Card({ children, className = "" }) {
  return <section className={`${className} `}>{children}</section>;
}
