import { Parcour } from "./parcour.type";

export type TEvent = {
    event_id: string;
    event_name: string;
    parcour_id: string;
    parcour: Parcour;
    event_createtime: string;
    event_updatetime: string;
}