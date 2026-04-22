export type RoutesListItemCard = {
    id: number|null, // ? uid
    departure: string,
    destination: string,
    departureDataTime: Date,
    availableSeats: number,
    totalSeats: number,
    status: number,
}