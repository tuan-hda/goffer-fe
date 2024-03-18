export type User = {
    id: string;
    email: string;
    name?: string;
    avatar?: string;
    role: string;
    isEmailVerified: boolean;
    isBanned: boolean;
};

export type SignUpRequest = {
    email: string;
    password: string;
};
