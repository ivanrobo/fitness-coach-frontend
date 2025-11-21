import apiClient from './apiClient';
import { UserRegistrationRequest, UserDto, LoginRequest, LoginResponse } from '../types/user';

export const registerUser = async (userData: UserRegistrationRequest): Promise<UserDto> => {
    const response = await apiClient.post<UserDto>('/users/register', userData);
    return response.data;
};

export const loginUser = async (loginData: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/users/login', loginData);
    return response.data;
};
