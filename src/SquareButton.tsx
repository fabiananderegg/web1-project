import './SquareButton.css'
import {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

export const SquareButton = (props: Props) => (
    <button className="Square-button">
        {props.children}
    </button>
)