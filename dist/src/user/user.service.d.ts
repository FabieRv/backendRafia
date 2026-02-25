import { PrismaService } from './prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        adress: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
}
