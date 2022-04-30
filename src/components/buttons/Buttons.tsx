import React from "react";
import {useDispatch} from "react-redux";
import {TennisActionType} from "../../redux/types";
import  './styles.css'

interface ButtonsInterface {
    title?: string,
    action: TennisActionType,
    style?: string,
}

export const Buttons: React.FC<ButtonsInterface> = ({action, title, style, children}) => {
    const dispatch = useDispatch();
    return (
        <button className={style || "Button"} onClick={() => dispatch(action)}>
            {title || children}
        </button>
    )
}