import { ApiObject } from "../types/api-objects/api-object.type";
import { BaseEndpoint } from "./base.endpoint";
import { TEvent } from "../types/api-objects/event.type";
import { CreateEventDto, UpdateEventDto } from "../types/dto/event.dto";
import { Scoreboard } from "../types/api-objects/scoreboard.type";
export declare class EventEndpoint extends BaseEndpoint {
    list(): Promise<ApiObject<TEvent>[]>;
    find(id: string): Promise<ApiObject<TEvent>>;
    create(data: CreateEventDto): Promise<ApiObject<TEvent>>;
    update(id: string, data: UpdateEventDto): Promise<TEvent>;
    delete(id: string): Promise<TEvent>;
    scoreboard(id: string): Promise<Scoreboard>;
    hit(eventId: string, targetId: string, arrow: number, score: number): Promise<Scoreboard>;
    join(id: string): Promise<void>;
    leave(id: string): Promise<void>;
}
//# sourceMappingURL=event.endpoint.d.ts.map