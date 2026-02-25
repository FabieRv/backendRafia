import { UserService } from './user.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
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
