import { PrismaService } from './prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<any>;
}
