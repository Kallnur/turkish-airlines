import styles from "./ticket.module.css"
import { ITicket } from "./types";
import TimeBlock from "./ui/TimeBlock/TimeBlock";
import logo from "@/assets/ticket-logo.png"
import airplaneIcon from "@/assets/airplane.svg"

interface IProps {
    ticket: ITicket
}

const Ticket = ({ticket}: IProps) => {
    return (
        <div className={styles.main}>
            <div className={styles.titleBlock}>
                <img className={styles.imgLogo} src={logo} alt="turkish airlines" />
                <button className={styles.buy}>
                    <span>Купить</span>
                    <span>за {ticket.price}₽</span>
                </button>
            </div>
            <div className={styles.infoBlock}>
                <TimeBlock time={ticket.departure_time}
                    name={`${ticket.origin}, ${ticket.origin_name}`}  
                    date={ticket.departure_date}  
                />
                <div className={styles.intermediateBlock}>
                    {   
                        ticket.stops 
                        ? <span>{ticket.stops} {ticket.stops > 1 ? "пересадки" : "пересадка"}</span> 
                        : <span>без пересадок</span>
                    }
                    <div className={styles.lineTo}>
                        <div></div>
                        <img src={airplaneIcon} alt="" />
                    </div>
                </div>
                <TimeBlock time={ticket.arrival_time}
                    name={`${ticket.destination}, ${ticket.destination_name}`}  
                    date={ticket.arrival_date}  
                />
            </div>
        </div>
    );
};

export default Ticket;