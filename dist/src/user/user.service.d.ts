import { PrismaService } from './prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        email: string;
        password: string;
        id: number;
        name: string;
        phone: string;
        adress: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
}
