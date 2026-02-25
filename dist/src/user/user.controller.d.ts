import { UserService } from './user.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    getUsers(): Promise<{
        email: string;
        password: string;
        id: number;
        name: string;
        phone: string;
        adress: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
    getUser(userId: string): Promise<{
        email: string;
        password: string;
        id: number;
        name: string;
        phone: string;
        adress: string;
        role: import("@prisma/client").$Enums.Role;
    }[]>;
}
