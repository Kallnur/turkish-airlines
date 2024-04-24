import { ITicket, ITicketWithoutId } from "@/components/Ticket/types";

export const putIdsOnTickets = (tickets: ITicketWithoutId[]): ITicket[] => {
  return tickets.map(ticket => ({
    ...ticket,
    id: Math.random() * 100,
  }));
}

export const formatDate = (dateString: string) => {
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'мая',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек'
  ];
  
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  
  const [day, month, year] = dateString.split('.');
  const date = new Date(`20${year}-${month}-${day}`);
  const dayOfWeek = days[date.getDay()];
  const monthName = months[parseInt(month) - 1];
  
  return `${date.getDate()} ${monthName} ${date.getFullYear()}, ${dayOfWeek}`;
}

export const filterTicketsByStops = (tickets: ITicket[], stops: number[]) => {
  return tickets.filter(ticket => stops.includes(ticket.stops));
};