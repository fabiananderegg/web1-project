import './AppBody.css'
import {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

export const AppBody = (props: Props) => (
    <div className="App-body">
        {props.children}
    </div>
)