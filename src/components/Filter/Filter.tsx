import { Radio, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import styles from "./fIlter.module.css"
import { currencies, filterCheckList } from "./lib/data";
import { ICheckbox } from "../CheckList/ui/CustomChecbox/types";
import CheckList from "../CheckList/CheckList";
import { useAppDispatch } from "@/hooks/redux";
import { change_filter_by_stops } from "@/store/tickets/actions";

interface IProps {}

const Filter = ({}: IProps) => {
    const [currency, setCurrency] = useState<string>('RUB');
    const [checkboxList, setCheckboxList] = useState<ICheckbox<number>[]>(filterCheckList);
    const dispatch = useAppDispatch();

    const onChangeRadio = (e: RadioChangeEvent) => {
        setCurrency(e.target.value);
    };

    const updateCheckboxList = (newCheckboxList: ICheckbox<number>[]) => {
        setCheckboxList(newCheckboxList);
    };

    useEffect(() => {
        const filteredStops = checkboxList.filter(option => option.checked)
            .map(option => option.value);

        dispatch(change_filter_by_stops(filteredStops))
    }, [checkboxList])

    return (
        <div className={styles.main}>
            <div className={`customize-filter-tabs ${styles.tabsBlock}`}>
                <span className={styles.title}>валюта</span>
                <Radio.Group value={currency} onChange={onChangeRadio} style={{ marginBottom: 16 }} >
                    {
                        currencies.map(currency => (
                            <Radio.Button key={currency} value={currency}>{currency}</Radio.Button>
                        ))
                    }
                </Radio.Group>
            </div>
            <div className={`customize-filter-check-list ${styles.checkList}`}>
                <span className={styles.title}>количество пересадок</span>
                <CheckList checkboxList={checkboxList} 
                    updateCheckboxList={updateCheckboxList}
                />
            </div>
        </div>
    );
};

export default Filter;