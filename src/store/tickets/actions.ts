import { ITicket } from "@/components/Ticket/types";

export const PUT_TICKETS = "PUT_TICKETS";
export const CHANGE_FILTER_BY_STOPS = "CHANGE_FILTER_BY_STOPS"
export const PUT_FILTERED_TICKETS = "PUT_FILTERED_TICKETS";

interface IPut_tickets {
    type: typeof PUT_TICKETS;
    payload: ITicket[]; 
}

interface IChange_filter_by_stops {
    type: typeof CHANGE_FILTER_BY_STOPS;
    payload: number[]; 
}

interface IPut_filtered_tickets {
    type: typeof PUT_FILTERED_TICKETS;
    payload: ITicket[]; 
}

export const put_tickets = (payload: ITicket[]): IPut_tickets => ({
    type: PUT_TICKETS,
    payload
})

export const change_filter_by_stops = (payload: number[]): IChange_filter_by_stops => ({
    type: CHANGE_FILTER_BY_STOPS,
    payload
})

export const put_filtered_tickets = (payload: ITicket[]): IPut_filtered_tickets => ({
    type: PUT_FILTERED_TICKETS,
    payload
})

export type TicketActionTypes = IPut_tickets | IChange_filter_by_stops | IPut_filtered_tickets;