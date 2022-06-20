export type CreateEventDto = UpdateEventDto;

export type UpdateEventDto = {
    event_name: string;
    parcour_id: string;
    scoring_system: string;
}