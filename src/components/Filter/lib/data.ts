import { ICheckbox } from "@/components/CheckList/ui/CustomChecbox/types";

export const filterCheckList: ICheckbox<number>[] = [
    {
        checked: true,
        text: "Без пересадок",
        value: 0
    },
    {
        checked: true,
        text: "1 пересадка",
        value: 1
    },
    {
        checked: true,
        text: "2 пересадка",
        value: 2
    },
    {
        checked: true,
        text: "3 пересадка",
        value: 3
    }
]

export const currencies = ["RUB", "USD", "EUR"];