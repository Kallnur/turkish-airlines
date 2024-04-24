import { useEffect } from "react";
import { filterTicketsByStops, putIdsOnTickets } from "@/lib/util";
import Ticket from "../Ticket/Ticket";
import { fetchData as FetchTickets } from "@/api/fetch";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { put_filtered_tickets, put_tickets } from "@/store/tickets/actions";

interface IProps {}

const TicketList = ({}: IProps) => {

    const {tickets, filterByStops, filteredTickets} = useAppSelector(state => state.tickets)
    const dispatch = useAppDispatch();

    const getTickets = async () => {
        const tickets = await FetchTickets();
        if(tickets){
            const newTickets = putIdsOnTickets(tickets)
            dispatch(put_tickets(newTickets))
            dispatch(put_filtered_tickets(newTickets));
        }
    }

    const filterTickets = () => {
        const filteredTickets = filterTicketsByStops(tickets, filterByStops);
        dispatch(put_filtered_tickets(filteredTickets));
    }

    useEffect(() => {
        getTickets()
    }, [])

    useEffect(() => {
        filterTickets()
    }, [filterByStops])

    return (
        <div>
            {
                filteredTickets.length ? filteredTickets.map(ticket => (
                    <Ticket key={ticket.id} ticket={ticket}/>
                ))
                : null
            }
        </div>
    );
};

export default TicketList;