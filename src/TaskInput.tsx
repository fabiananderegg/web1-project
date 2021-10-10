import './TaskInput.css'
import React, { ChangeEvent, useState } from 'react';
import { SquareButton } from './SquareButton'
import { TextInput } from './TextInput'
import { CbText } from './CheckBoxWithText'


export function TaskInput() {
    const [inputText, setInputText] = useState('Neue Aufgabe hinzufügen...')

    const updateTextInput = (event: ChangeEvent<HTMLInputElement>) => {
        if(inputText === 'Neue Aufgabe hinzufügen...') {
            clearDefaultText()
        } else {
            setInputText(event.target.value)
        }
    }

    const clearDefaultText = () => {
        setInputText('')
    }

    return (
        <div className="Task-input">
            <div className="Task-input-text">
                <TextInput onChange={updateTextInput} value={inputText}></TextInput>
                <SquareButton> Hinzufügen </SquareButton>
            </div>
            <CbText>Alle Anzeigen</CbText>
        </div>
    )
}
