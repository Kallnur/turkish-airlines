import styles from "./checkbox.module.css";
import checkmarkIcon from "@/assets/checkmark.svg"
import { ICheckbox, IOnCheckFunc } from "./types";
import { ChangeEvent, MouseEvent } from "react";

interface IProps {
    option: ICheckbox<number>,
    onCheck: IOnCheckFunc,
    onOnly?: (option: ICheckbox<number>) => void
}

const CustomCheckbox = ({option, onCheck, onOnly}: IProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onCheck(option, e.target.checked) 
    }

    const handleClickOnOnly = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if(onOnly) onOnly(option)
    }

    return (
        <div className={styles.main}>
            <label className={styles.label}>
                <input type="checkbox" 
                    className={styles.input}
                    onChange={handleChange}
                    checked={option.checked}
                />
                <span className={styles.checkmark}>
                    <img src={checkmarkIcon} alt="&#10003;" />
                </span>
                <span className={styles.checkboxText}>{option.text}</span>
                {
                    onOnly 
                    ? <button className={styles.only}
                        onClick={handleClickOnOnly}
                    >
                        только
                    </button>
                    : null
                }
                
            </label>
        </div>
    );
};

export default CustomCheckbox;