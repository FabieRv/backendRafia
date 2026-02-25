import { AuthService } from './auth.service';
export type AuthBody = {
    email: string;
    password: string;
};
export declare class AuthController {
    private readonly AuthService;
    constructor(AuthService: AuthService);
    login(authBody: AuthBody): Promise<any>;
}
