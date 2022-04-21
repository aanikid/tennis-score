import React from "react";
import {useDispatch} from "react-redux";
import {TennisActionType} from "../../redux/types";
import  './styles.css'

interface ButtonsInterface {
    title: string,
    action: TennisActionType
}

export const Buttons: React.FC<ButtonsInterface> = ({action, title}) => {
    const dispatch = useDispatch();
    return (
        <button className="Button" onClick={() => dispatch(action)}>
            {title}
        </button>
    )
}