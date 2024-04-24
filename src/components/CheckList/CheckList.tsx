import { useState } from "react";
import CustomCheckbox from "./ui/CustomChecbox/CustomCheckbox";
import { ICheckbox } from "./ui/CustomChecbox/types";
import styles from "./checkList.module.css";

interface IProps {
    checkboxList: ICheckbox<number>[],
    updateCheckboxList: (newCheckboxList: ICheckbox<number>[]) => void
}

const CheckList = ({ checkboxList, updateCheckboxList }: IProps) => {
    const [checkAllCheckbox, setCheckAllCheckbox] = useState<ICheckbox<number>>({
        checked: true,
        text: "Все",
        value: -1
    });

    const checkAll = () => {setCheckAllCheckbox((prev) => ({ ...prev, checked: true }));};
    const unCheckAll = () => {setCheckAllCheckbox((prev) => ({ ...prev, checked: false }));};

    const onCheck = (option: ICheckbox<number>, checked: boolean) => {
        const checkedOptions = checkboxList.filter((checkbox) => checkbox.checked);
        if (checkedOptions.length === 1 && checkedOptions[0].value === option.value) {
            return; 
        }
        const updatedList = checkboxList.map((checkBox) => {
            if (checkBox.value === option.value) {
                return { ...checkBox, checked };
            }
            return checkBox;
        });

        if (updatedList.some((checkbox) => !checkbox.checked)) unCheckAll();
        else if (updatedList.every((checkbox) => checkbox.checked)) checkAll();

        updateCheckboxList(updatedList);
    };

    const onCheckAll = () => {
        if (checkboxList.some((checkbox) => !checkbox.checked)) {
            const updatedList = checkboxList.map((checkbox) => ({
                ...checkbox,
                checked: true
            }));
            updateCheckboxList(updatedList);
            checkAll();
        } else {
            const updatedList = checkboxList.map((checkbox) => {
                if(checkbox.value === 0) return checkbox;
                else return {
                    ...checkbox, 
                    checked: false
                }
            });
            updateCheckboxList(updatedList);
            unCheckAll();
        }
    };

    const checkOnly = (option: ICheckbox<number>) => {
        unCheckAll()
        const updatedList = checkboxList.map((checkBox) => {
            if (checkBox.value === option.value) {
                return { ...checkBox, checked: true };
            } else {
                return { ...checkBox, checked: false };
            }
        });
        updateCheckboxList(updatedList);
    };

    return (
        <div className={styles.main}>
            <CustomCheckbox option={checkAllCheckbox} onCheck={onCheckAll} />
            {checkboxList.map((checkbox) => (
                <CustomCheckbox
                    key={checkbox.text}
                    option={checkbox}
                    onCheck={onCheck}
                    onOnly={checkOnly}
                />
            ))}
        </div>
    );
};

export default CheckList;
