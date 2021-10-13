import './TaskInput.css'
import React, { ChangeEvent, useState, FocusEvent } from 'react';
import { SquareButton } from './SquareButton'
import { TextInput } from './TextInput'
import { CbText } from './CheckBoxWithText'

export function TaskInput() {

    const clearDefaultText = () => {
        setInputText('')
    }

    const [inputText, setInputText] = useState('Neue Aufgabe hinzufügen...')

    const handleFocusEvent = (event: FocusEvent<HTMLInputElement>) => {
        if (inputText === 'Neue Aufgabe hinzufügen...') {
            clearDefaultText()
        }
    }

    const updateTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }



    return (
        <div className="Task-input">
            <div className="Task-input-text">
                <TextInput onChange={updateTextInput} onFocus={handleFocusEvent} value={inputText}></TextInput>
                <SquareButton> Hinzufügen </SquareButton>
            </div>
            <CbText>Alle Anzeigen</CbText>
        </div>
    )
}
