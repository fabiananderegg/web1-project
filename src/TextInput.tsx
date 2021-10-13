import './TextInput.css'
import {ChangeEvent, FocusEvent} from 'react'

interface Props {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	onFocus: (event: FocusEvent<HTMLInputElement>) => void
	value: string
}

export const TextInput = (props: Props) => (
	
	
	<input
		defaultValue="*Hallo"
		type="text"
		className="Text-input"
		onChange={props.onChange}
		onFocus={props.onFocus}
		value={props.value}
	/>
)