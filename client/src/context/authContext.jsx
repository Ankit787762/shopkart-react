import { createContext, useContext, useEffect, useState } from "react";
import Api from "../services/Api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Restore login when app starts / page refreshes
    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await Api.get("/users/me");
                setUser(res.data.user);
            } catch (error) {
                setUser(null);
            }
        };

        checkUser();
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            await Api.post("/users/logout");
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}