import { useFloatingButton } from "./FloatingButton";

const FloatingButtonIcon = ({ children, className }) => {
    const { setFloatBtnOpen, open } = useFloatingButton();

    const style = { transform: "scale(1) rotate(0deg)", opacity: "1", transition: "400ms ease" };

    return (
        <button aria-label="Toggle floating button" onClick={(e) => setFloatBtnOpen(!open)} className="ady-floating-btn-toggle" style={style}>
            <span className={`ady-floating-btn-icon ady-floating-btn-main-icon ${className}`}>
                {children || (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-plus"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                )}
            </span>
            <span className={`ady-floating-btn-icon ady-floating-btn-close-icon ${className}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
            </span>
        </button>
    );
};

export default FloatingButtonIcon;
