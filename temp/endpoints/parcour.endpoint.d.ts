import { ApiObject } from "../types/api-objects/api-object.type";
import { BaseEndpoint } from "./base.endpoint";
import { Parcour } from "../types/api-objects/parcour.type";
import { CreateParcourDto, UpdateParcourDto } from "../types/dto/parcour.dto";
export declare class ParcourEndpoint extends BaseEndpoint {
    list(): Promise<ApiObject<Parcour>[]>;
    find(id: string): Promise<ApiObject<Parcour>>;
    create(data: CreateParcourDto): Promise<ApiObject<Parcour>>;
    update(id: string, data: UpdateParcourDto): Promise<Parcour>;
    delete(id: string): Promise<Parcour>;
}
//# sourceMappingURL=parcour.endpoint.d.ts.map