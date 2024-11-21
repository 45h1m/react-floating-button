
const FloatingButtonOptionLabel = ({children, className, ariaLabel="Option label"}) => {
  return (
    <p aria-label={ariaLabel} className={`${className}`}>{children || "Option"}</p>
  )
}

export default FloatingButtonOptionLabel