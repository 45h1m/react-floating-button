
const FloatingButtonOptionContainer = ({children, ariaLabel="Floating button options"}) => {
  return (
    <div aria-label={ariaLabel} role="menu" className="ady-floating-btn-option-container">{children}</div>
  )
}

export default FloatingButtonOptionContainer