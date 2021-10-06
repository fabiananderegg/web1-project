import './AppBar.css'
import {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

export const AppBar = (props: Props) => (
    <header className="App-bar" >
        <div className="App-bar-text">
            {props.children}
        </div>
    </header>
)