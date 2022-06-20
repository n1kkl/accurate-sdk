import { EventEndpoint } from "./endpoints/event.endpoint";
import { ParcourEndpoint } from "./endpoints/parcour.endpoint";
import { UserEndpoint } from "./endpoints/user.endpoint";
import { TargetEndpoint } from "./endpoints/target.endpoint";
export declare class ApiClient {
    private client;
    private socket;
    user: UserEndpoint;
    event: EventEndpoint;
    parcour: ParcourEndpoint;
    target: TargetEndpoint;
    private constructor();
    static create(base: string, socketServer: string, token: string): Promise<ApiClient>;
}
//# sourceMappingURL=api.client.d.ts.map