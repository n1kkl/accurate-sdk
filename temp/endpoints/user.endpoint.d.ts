import { ApiObject } from "../types/api-objects/api-object.type";
import { CreateUserDto, UpdateUserDto } from "../types/dto/user.dto";
import { PrivateUser, PublicUser } from "../types/api-objects/user.type";
import { BaseEndpoint } from "./base.endpoint";
export declare class UserEndpoint extends BaseEndpoint {
    list(): Promise<ApiObject<PublicUser>[]>;
    me(): Promise<ApiObject<PrivateUser>>;
    find(id: string): Promise<ApiObject<PublicUser>>;
    create(data: CreateUserDto): Promise<ApiObject<PrivateUser>>;
    update(id: string, data: UpdateUserDto): Promise<PrivateUser>;
    delete(id: string): Promise<PrivateUser>;
}
//# sourceMappingURL=user.endpoint.d.ts.map