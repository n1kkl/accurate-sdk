import { ApiObject } from "../types/api-objects/api-object.type";
import { CreateUserDto, UpdateUserDto } from "../types/dto/user.dto";
import {PrivateUser, PublicUser } from "../types/api-objects/user.type";
import { BaseEndpoint } from "./base.endpoint";
import { TEvent } from "../types/api-objects/event.type";
import { CreateEventDto, UpdateEventDto } from "../types/dto/event.dto";
import { Parcour } from "../types/api-objects/parcour.type";
import { CreateParcourDto, UpdateParcourDto } from "../types/dto/parcour.dto";
import { Target } from "../types/api-objects/target.type";
import { CreateTargetDto, UpdateTargetDto } from "../types/dto/target.dto";

export class TargetEndpoint extends BaseEndpoint {
    async list(): Promise<ApiObject<Target>[]> {
        return (await this.client.get('target')).data;
    }

    async find(id: string): Promise<ApiObject<Target>> {
        return (await this.client.get(`target/${id}`)).data;
    }

    async create(data: CreateTargetDto): Promise<ApiObject<Target>> {
        return (await this.client.post('target', data)).data;
    }

    async update(id: string, data: UpdateTargetDto): Promise<Target> {
        return (await this.client.patch(`target/${id}`, data)).data;
    }

    async delete(id: string): Promise<Target> {
        return (await this.client.delete(`target/${id}`)).data;
    }
}