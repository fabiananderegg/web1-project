import './TextInput.css'
import {ChangeEvent} from 'react'

interface Props {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	value: string
}

export const TextInput = (props: Props) => (
	<input
		type="text"
		className="Text-input"
		onChange={props.onChange}
		value={props.value}
	/>
)