import { AuthBody, CreateUser } from './auth.controller';
import { PrismaService } from 'src/user/prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(authRegister: CreateUser): Promise<{
        name: string;
        email: string;
        phone: string;
        adress: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date | null;
        id: number;
    }>;
    login({ authBody }: {
        authBody: AuthBody;
    }): Promise<{
        name: string;
        email: string;
        password: string;
        phone: string;
        adress: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date | null;
        id: number;
    }>;
    private hasPassword;
    private isPasswordValid;
}
