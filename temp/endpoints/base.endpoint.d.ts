import { Axios } from "axios";
import { Socket } from "socket.io-client";
export declare class BaseEndpoint {
    protected client: Axios;
    socket: Socket;
    constructor(client: Axios, socket: Socket);
    list(): Promise<any>;
    find(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
//# sourceMappingURL=base.endpoint.d.ts.map