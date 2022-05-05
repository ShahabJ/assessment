import { Facility } from "./Facility";

export interface Proposal {
    id: number,
    proposalName: string,
    customerGrpName: string,
    date: Date,
    description: string,
    status: string,
    facilities: Array<Facility>
}


