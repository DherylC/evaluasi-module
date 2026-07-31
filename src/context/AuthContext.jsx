import { createContext, useContext, useState } from "react";
import { postAction } from "../apis/api"; // Updated import path if needed

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isCoordinator, setIsCoordinator] = useState(() => {
        return localStorage.getItem("isCoordinator") === "true";
    });

    const [savedPassword, setSavedPassword] = useState(() => {
        return localStorage.getItem("coordPassword") || "";
    });

    const login = async (username, password) => {
        const cleanPassword = password.trim();
        const cleanUsername = username.trim();

        try {
            // Pass cleanPassword as the 1st argument (for postAction),
            // and the payload object as the 2nd argument.
            const res = await postAction(cleanPassword, {
                action: "login",
                username: cleanUsername,
                password: cleanPassword
            });

            if (res && res.success) {
                setIsCoordinator(true);
                setSavedPassword(cleanPassword);

                localStorage.setItem("isCoordinator", "true");
                localStorage.setItem("coordPassword", cleanPassword);
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