import { Axios } from "axios";
import { Socket } from "socket.io-client";

export class BaseEndpoint {
    constructor(
        protected client: Axios,
        public socket: Socket
    ) {
    }

    async list(): Promise<any> {
        throw new Error('Not implemented.');
    }

    async find(id: string): Promise<any> {
        throw new Error('Not implemented.');
    }

    async create(data: any): Promise<any> {
        throw new Error('Not implemented.');
    }

    async update(id: string, data: any): Promise<any> {
        throw new Error('Not implemented.');
    }

    async delete(id: string): Promise<any> {
        throw new Error('Not implemented.');
    }
}