import createAuth0Client, {Auth0Client, User } from "@auth0/auth0-spa-js";

export class AuthClient {
    private static readonly cookieName = 'accurate_token';
    private static readonly stateName = 'accurate_state';
    private auth!: Auth0Client;

    private constructor(auth: Auth0Client) {
        this.auth = auth;
    }

    public static async create(domain: string, clientId: string, audience: string): Promise<AuthClient> {
        const auth = await createAuth0Client({
            domain: domain,
            client_id: clientId,
            audience: audience,
            scope: 'openid profile email',
        });

        // fetch token if user just signed in using oauth
        const query = new URLSearchParams(window.location.search);
        if (query.has('code')) {
            await auth.getTokenSilently();
        }

        return new AuthClient(auth);
    }

    public async authorize(redirectUri: string): Promise<void> {
        await this.auth.loginWithRedirect({
            responseType: 'token',
            redirect_uri: redirectUri,
            ui_locales: 'de'
        });
    }

    public async logout(redirectUri: string): Promise<void> {
        await this.auth.logout({
            returnTo: redirectUri
        });
    }

    public async isAuthenticated(): Promise<boolean> {
        return await this.auth.isAuthenticated();
    }

    public async getUser(): Promise<User> {
        if (!(await this.auth.isAuthenticated())) {
            throw new Error('User must be authenticated.');
        }
        return await this.auth.getUser() as User;
    }

    public async getAccessToken(): Promise<string> {
        if (!(await this.auth.isAuthenticated())) {
            throw new Error('User must be authenticated.');
        }
        return await this.auth.getTokenSilently();
    }
}