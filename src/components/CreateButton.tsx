import styles from "./CreateButton.module.css"
import { PlusCircle } from "@phosphor-icons/react"

export function CreateButton() {
    return (
        <button 
            type="submit"
            className={styles.submit}
        >
            <span>Criar</span>
            <PlusCircle />
        </button>
    )
}