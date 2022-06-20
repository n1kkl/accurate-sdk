import { ApiObject } from "../types/api-objects/api-object.type";
import { BaseEndpoint } from "./base.endpoint";
import { Target } from "../types/api-objects/target.type";
import { CreateTargetDto, UpdateTargetDto } from "../types/dto/target.dto";
export declare class TargetEndpoint extends BaseEndpoint {
    list(): Promise<ApiObject<Target>[]>;
    find(id: string): Promise<ApiObject<Target>>;
    create(data: CreateTargetDto): Promise<ApiObject<Target>>;
    update(id: string, data: UpdateTargetDto): Promise<Target>;
    delete(id: string): Promise<Target>;
}
//# sourceMappingURL=target.endpoint.d.ts.map