import { formatDate } from "@/lib/util";
import styles from "./timeBlock.module.css"

interface IProps {
    time: string,
    name: string,
    date: string,
}

const TimeBlock = ({time, name, date}: IProps) => {

    const newDate = formatDate(date)

    return (
        <div className={styles.main}>
            <span className={styles.time}>{time}</span>
            <span className={styles.name}>{name}</span>
            <span className={styles.date}>{newDate}</span>
        </div>
    );
};

export default TimeBlock;