import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isCoordinator, setIsCoordinator] = useState(() => {
        return localStorage.getItem("isCoordinator") === "true";
    });

    const [savedPassword, setSavedPassword] = useState(() => {
        return localStorage.getItem("coordPassword") || "";
    });

    const login = (username, password) => {
        const expectedUsername = import.meta.env.VITE_LOGIN_USN;
        const expectedPassword = import.meta.env.VITE_LOGIN_PASSWORD;

        if (username === expectedUsername && password === expectedPassword) {
            setIsCoordinator(true);
            setSavedPassword(password);
            localStorage.setItem("isCoordinator", "true");
            localStorage.setItem("coordPassword", password);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsCoordinator(false);
        setSavedPassword("");
        localStorage.removeItem("isCoordinator");
        localStorage.removeItem("coordPassword");
    };

    return (
        <AuthContext.Provider value={{ isCoordinator, password: savedPassword, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);