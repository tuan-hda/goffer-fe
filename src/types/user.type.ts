export type User = {
    id: string;
    email: string;
    name?: string;
    avatar?: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    isEmailVerified: false;
    isBanned: false;
};

export type SignUpRequest = {
    email: string;
    password: string;
};
