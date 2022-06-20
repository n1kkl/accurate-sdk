export type CreateParcourDto = UpdateParcourDto;

export type UpdateParcourDto = {
    parcour_name: string;
    targets: {
        target_name: string;
    }[];
}