import { ApiObject } from "../types/api-objects/api-object.type";
import { CreateUserDto, UpdateUserDto } from "../types/dto/user.dto";
import {PrivateUser, PublicUser } from "../types/api-objects/user.type";
import { BaseEndpoint } from "./base.endpoint";
import { TEvent } from "../types/api-objects/event.type";
import { CreateEventDto, UpdateEventDto } from "../types/dto/event.dto";
import { Axios } from "axios";
import { Socket } from "socket.io-client";
import { Scoreboard } from "../types/api-objects/scoreboard.type";

export class EventEndpoint extends BaseEndpoint {
    async list(): Promise<ApiObject<TEvent>[]> {
        return (await this.client.get('event')).data;
    }

    async find(id: string): Promise<ApiObject<TEvent>> {
        return (await this.client.get(`event/${id}`)).data;
    }

    async create(data: CreateEventDto): Promise<ApiObject<TEvent>> {
        return (await this.client.post('event', data)).data;
    }

    async update(id: string, data: UpdateEventDto): Promise<TEvent> {
        return (await this.client.patch(`event/${id}`, data)).data;
    }

    async delete(id: string): Promise<TEvent> {
        return (await this.client.delete(`event/${id}`)).data;
    }

    async scoreboard(id: string): Promise<Scoreboard> {
        return (await this.client.get(`event/${id}/scoreboard`)).data;
    }

    async hit(eventId: string, targetId: string, arrow: number, score: number): Promise<Scoreboard> {
        return (await this.client.post(`event/${eventId}/hit`, {
            target_id: targetId,
            arrow: arrow,
            score: score
        })).data;
    }

    async join(id: string): Promise<void> {
        this.socket.emit('event.room.join', {
            event_id: id
        });
    }

    async leave(id: string): Promise<void> {
        this.socket.emit('event.room.leave', {
            event_id: id
        });
    }
}