import './CheckBoxWithText.css'
import {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

export const CbText = (props: Props) => (
    <div>
        <input className="Check-Box" type="checkbox"/>
        {props.children}
    </div>
)


