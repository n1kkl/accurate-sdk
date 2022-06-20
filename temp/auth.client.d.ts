import { User } from "@auth0/auth0-spa-js";
export declare class AuthClient {
    private static readonly cookieName;
    private static readonly stateName;
    private auth;
    private constructor();
    static create(domain: string, clientId: string, audience: string): Promise<AuthClient>;
    authorize(redirectUri: string): Promise<void>;
    logout(redirectUri: string): Promise<void>;
    isAuthenticated(): Promise<boolean>;
    getUser(): Promise<User>;
    getAccessToken(): Promise<string>;
}
//# sourceMappingURL=auth.client.d.ts.map