import { useState } from "react";
import { LoginRequest, UserDto, UserRegistrationRequest } from "../types/user";
import { loginUser, registerUser } from "../services/userService";

export const useAuth = () => {
    const [user, setUser] = useState<UserDto | null>(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (credentials: LoginRequest) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await loginUser(credentials);
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            setUser(response.user);
        } catch (err: any) {
            const errorMsg = err.response?.status === 401
                ? 'Invalid username or password'
                : 'Login failed. Please try again.';
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
    }

    const register = async (userData: UserRegistrationRequest) => {
        setIsLoading(true);
        setError(null);

        try {
            await registerUser(userData);
            login({ username: userData.username, password: userData.password });
        } catch (err: any) {
            const errorMsg = err.response?.status === 409
                ? 'Username already exists'
                : 'Registration failed. Please try again.';
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    }

    const clearError = () => setError(null);
    
    return { user, isLoading, error, login, logout, register, clearError, isAuthenticated: !!user };
}