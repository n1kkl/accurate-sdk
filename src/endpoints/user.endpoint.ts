import { ApiObject } from "../types/api-objects/api-object.type";
import { CreateUserDto, UpdateUserDto } from "../types/dto/user.dto";
import {PrivateUser, PublicUser } from "../types/api-objects/user.type";
import { BaseEndpoint } from "./base.endpoint";

export class UserEndpoint extends BaseEndpoint {
    async list(): Promise<ApiObject<PublicUser>[]> {
        return (await this.client.get('user')).data;
    }

    async me(): Promise<ApiObject<PrivateUser>> {
        return (await this.client.get('user')).data;
    }

    async find(id: string): Promise<ApiObject<PublicUser>> {
        return (await this.client.get(`user/${id}`)).data;
    }

    async create(data: CreateUserDto): Promise<ApiObject<PrivateUser>> {
        return (await this.client.post('user', data)).data;
    }

    async update(id: string, data: UpdateUserDto): Promise<PrivateUser> {
        return (await this.client.patch(`user/${id}`, data)).data;
    }

    async delete(id: string): Promise<PrivateUser> {
        return (await this.client.delete(`user/${id}`)).data;
    }
}