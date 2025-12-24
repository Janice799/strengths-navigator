import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for existing user
        const savedUser = localStorage.getItem('strengths_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Demo login - accept any email/password
        const userData = {
            id: Date.now(),
            email,
            name: email.split('@')[0],
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('strengths_user', JSON.stringify(userData));
        setUser(userData);
        return { success: true };
    };

    const signup = (email, password, name) => {
        // Demo signup
        const userData = {
            id: Date.now(),
            email,
            name: name || email.split('@')[0],
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('strengths_user', JSON.stringify(userData));
        setUser(userData);
        return { success: true };
    };

    const logout = () => {
        localStorage.removeItem('strengths_user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
