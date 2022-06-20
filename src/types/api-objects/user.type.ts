export type PublicUser = {
    user_id: string;
    user_name: string;
    user_createtime: string;
    user_updatetime: string;
}

export type PrivateUser = PublicUser & {
    user_email: string;
}