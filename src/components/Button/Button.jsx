const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const base = "px-4 py-2 rounded transition"
  const styles = {
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    outline: "border border-amber-600 text-amber-600 hover:bg-amber-50"
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button   // ONLY default export