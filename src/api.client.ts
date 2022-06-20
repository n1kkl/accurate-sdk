import axios, {Axios} from "axios";
import { EventEndpoint } from "./endpoints/event.endpoint";
import { ParcourEndpoint } from "./endpoints/parcour.endpoint";
import { UserEndpoint } from "./endpoints/user.endpoint";
import {io, Socket} from 'socket.io-client';
import { TargetEndpoint } from "./endpoints/target.endpoint";

export class ApiClient {
    private client: Axios;
    private socket: Socket;
    public user: UserEndpoint;
    public event: EventEndpoint;
    public parcour: ParcourEndpoint;
    public target: TargetEndpoint;

    private constructor(
        base: string,
        socketServer: string,
        token: string,
    ) {
        const socketServerToken = new URL(socketServer);
        socketServerToken.searchParams.append('authorization', token);

        this.client = axios.create({
            baseURL: base,
            headers: {
                authorization: token
            }
        });
        this.socket = io(socketServerToken.toString())
        this.user = new UserEndpoint(this.client, this.socket);
        this.event = new EventEndpoint(this.client, this.socket);
        this.parcour = new ParcourEndpoint(this.client, this.socket);
        this.target = new TargetEndpoint(this.client, this.socket);
    }

    public static async create(base: string, socketServer: string, token: string): Promise<ApiClient> {
        return new ApiClient(base, socketServer, token);
    }
}