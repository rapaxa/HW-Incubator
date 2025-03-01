import {ChangeEvent} from "react";

type InputPropsType = {
    currentText: string;  // Значение текстового поля
    setCurrentText: (text: string) => void;  // Функция обновления состояния
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setCurrentText(event.target.value);
    };

    return (
        <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}
        />
    );
};