import { AuthBody } from './auth.controller';
import { PrismaService } from 'src/user/prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    login({ authBody }: {
        authBody: AuthBody;
    }): Promise<any>;
    private hasPassword;
}
