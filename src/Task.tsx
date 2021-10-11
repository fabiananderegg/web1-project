import './Task.css'

import {ReactNode} from 'react'
import { SquareButton } from './SquareButton'
import { UnicodeButton } from './UnicodeButton'


interface Props {
    children: ReactNode
}

export const Task = (props: Props) => (
    <div className="task">
        <input className="Cb-first-task" type="checkbox" />
        <UnicodeButton />
        <UnicodeButton />
        <UnicodeButton />
        <div className="task-text"> {props.children} </div>
        <SquareButton> Löschen </SquareButton>
    </div>
)