export interface ICheckbox<T> {
    checked: boolean,
    text: string,
    value: T
}

export interface IOnCheckFunc {
    (option: ICheckbox<number>, checked: boolean): void
}