export interface HotelSearch {
    currency: string,
    rooms: number,
    sort_criteria: string,
    sort_order: string,
    checkin: string,
    checkout: string,
    'guests[]': string,
    destination: string,
    page: number,
    per_page: number,
}
