import { ApiObject } from "../types/api-objects/api-object.type";
import { CreateUserDto, UpdateUserDto } from "../types/dto/user.dto";
import {PrivateUser, PublicUser } from "../types/api-objects/user.type";
import { BaseEndpoint } from "./base.endpoint";
import { TEvent } from "../types/api-objects/event.type";
import { CreateEventDto, UpdateEventDto } from "../types/dto/event.dto";
import { Parcour } from "../types/api-objects/parcour.type";
import { CreateParcourDto, UpdateParcourDto } from "../types/dto/parcour.dto";

export class ParcourEndpoint extends BaseEndpoint {
    async list(): Promise<ApiObject<Parcour>[]> {
        return (await this.client.get('parcour')).data;
    }

    async find(id: string): Promise<ApiObject<Parcour>> {
        return (await this.client.get(`parcour/${id}`)).data;
    }

    async create(data: CreateParcourDto): Promise<ApiObject<Parcour>> {
        return (await this.client.post('parcour', data)).data;
    }

    async update(id: string, data: UpdateParcourDto): Promise<Parcour> {
        return (await this.client.patch(`parcour/${id}`, data)).data;
    }

    async delete(id: string): Promise<Parcour> {
        return (await this.client.delete(`parcour/${id}`)).data;
    }
}