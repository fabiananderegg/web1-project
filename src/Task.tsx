import './Task.css'

import {ReactNode} from 'react'
import { SquareButton } from './SquareButton'
import { UnicodeButton } from './UnicodeButton'


interface Props {
    children: ReactNode
}

let state1 : boolean
let state2 : boolean
let state3 : boolean
state1=false
state2=false
state3=false
export const Task = (props: Props) => (
    <div className="task">
       
      
        <input className="Cb-first-task" type="checkbox" />
        <UnicodeButton selected={state1}  />
        <UnicodeButton selected={state2}  />
        <UnicodeButton selected={state3}  />
        <div className="task-text"> {props.children} </div>
        <SquareButton> Löschen </SquareButton>
    </div>
)

