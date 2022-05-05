export interface Facility {
    id: number,
    facilityName: string,
    bookingCountry: string,
    currency: string;
    startDate: Date,
    maturityDate: Date,
    limit: number
}