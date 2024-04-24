import { Reducer } from "redux";
import { CHANGE_FILTER_BY_STOPS, PUT_FILTERED_TICKETS, PUT_TICKETS, TicketActionTypes } from "./actions";
import { ITicket } from "@/components/Ticket/types";

interface IInitialState{
    tickets: ITicket[],
    filterByStops: number[],
    filteredTickets: ITicket[]
}

const initialState = {
    tickets: [],
    filterByStops: [],
    filteredTickets: []
}

const tickets: Reducer<IInitialState, TicketActionTypes> = (state = initialState, action) => {
    switch(action.type){
        case PUT_TICKETS: {
            return {
                ...state,
                tickets: action.payload
            }
        }

        case CHANGE_FILTER_BY_STOPS: {
            return {
                ...state,
                filterByStops: action.payload
            }
        }

        case PUT_FILTERED_TICKETS: {
            return {
                ...state,
                filteredTickets: action.payload
            }
        }

        default: return state
    }
}

export default tickets