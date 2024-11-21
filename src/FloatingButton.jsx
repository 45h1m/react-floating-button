// 45h1m Nov 2024

import React, { createContext, useContext } from "react";

import "./ady-floating-btn.css";

// Create a Context for Floating Button
const FloatingButtonContext = createContext();

export const useFloatingButton = () => useContext(FloatingButtonContext);

const FloatingButton = ({ children, open, setFloatBtnOpen, className }) => {
    return (
        <FloatingButtonContext.Provider value={{ open, setFloatBtnOpen }}>
            <div className={`ady-floating-btn ${open && "active"}`}>
                <div className={`ady-floating-btn-main ${className}`}>
                    {children}
                </div>
                <div
                    onClick={() => setFloatBtnOpen(false)}
                    className="ady-floating-btn-backdrop"
                >
                    <div className={`backdrop-highlight`}></div>
                </div>
            </div>
        </FloatingButtonContext.Provider>
    );
};

export default FloatingButton;
