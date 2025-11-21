import { Gender } from './gender';

export interface UserRegistrationRequest {
    username: string;
    password: string;
    email: string;
    dateOfBirth: string;
    gender: Gender;
    height: number;
    weight: number;
}

export interface UserDto {
    id: number;
    username: string;
    email: string;
    dateOfBirth: string;
    gender: Gender;
    height: number;
    weight: number;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: UserDto;
}
