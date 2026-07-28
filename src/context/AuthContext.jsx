import { createContext, useContext, useState } from "react";
import { postAction } from "../apis/api"; // Adjust import path to your api helper if needed

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isCoordinator, setIsCoordinator] = useState(() => {
        return localStorage.getItem("isCoordinator") === "true";
    });

    const [savedPassword, setSavedPassword] = useState(() => {
        return localStorage.getItem("coordPassword") || "";
    });

    const login = async (username, password) => {
        try {
            // Ask Apps Script to verify credentials
            const res = await postAction({
                action: "login",
                username: username.trim(),
                password: password.trim()
            });

            if (res && res.success) {
                setIsCoordinator(true);
                setSavedPassword(password.trim());

                localStorage.setItem("isCoordinator", "true");
                localStorage.setItem("coordPassword", password.trim());
                return true;
            }
            return false;
        } catch (err) {
            console.error("Login request failed:", err);
            return false;
        }
    };

    const logout = () => {
        setIsCoordinator(false);
        setSavedPassword("");
        localStorage.removeItem("isCoordinator");
        localStorage.removeItem("coordPassword");
    };

    return (
        <AuthContext.Provider value={{ isCoordinator, isAuthenticated: isCoordinator, password: savedPassword, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);