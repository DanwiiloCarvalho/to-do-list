import { ChangeEvent } from "react"
import styles from "./Input.module.css"

interface InputProps {
    textTask: string;
    onChangeText: (text: string) => void;
}

export function Input({ onChangeText, textTask }: InputProps) {

    function handleText(event: ChangeEvent<HTMLInputElement>) {
        onChangeText(event.target.value)
    }

    /* function handleEmptyField(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Descreva a sua nova tarefa!")
    } */

    return (
        <input 
            className={styles.input_new_task}
            placeholder="Adicione uma nova tarefa" 
            type="text" 
            name="taskText"
            onChange={handleText}
            value={textTask}
            /* onInvalid={handleEmptyField} */
            required
        />
    )
}