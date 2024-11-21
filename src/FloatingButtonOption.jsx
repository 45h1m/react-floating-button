const FloatingButtonOption = ({ children, onClick, ariaLabel="Floating button option" }) => {
    return (
        <button
            type="button"
            role="menuitem"
            className="ady-floating-btn-option"
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default FloatingButtonOption;
