import './UnicodeButton.css'
import React, { useState } from 'react';

interface Props {
    selected: boolean
    // onChange: (event: ChangeEvent<HTMLButtonElement>) => void

}

export function UnicodeButton(props: Props) {

    const [value, setClick] = useState(props.selected)

    //const ClickLogger = () => {
        const logClick = () => {
            setClick(!value)
        }

    //}




    return (
        <button
            onClick={logClick}
            className={value ? "uButtonSelected" : "uButton"}
        >
            <span>{'\u{1F5F2}'}</span>
        </button>
    );

}
