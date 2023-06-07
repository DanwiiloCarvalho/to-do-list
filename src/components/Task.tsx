import styles from "./Task.module.css"
import { Trash } from "./Trash"

interface TaskProps {
    text: string;
    isCompleted: boolean;
    onDelete: (content: string) => void;
    onChangeCompleted: (content: string) => void;
}

export function Task({ text, isCompleted, onDelete, onChangeCompleted }: TaskProps) {

    function handleDeleteTask() {
        onDelete(text)
    }

    function handleCheckbox() {
        onChangeCompleted(text)
    }

    return (
        <div className={styles.task}>
            {/* <input type="checkbox" defaultChecked={isCompleted} onChange={handleCheckbox} /> */}
            {/* <label htmlFor="" className="container">
                <input type="checkbox" defaultChecked={isCompleted} onChange={handleCheckbox} />
            </label> */}

            
            <input className="form-check-input rounded-circle"
                    type="checkbox"
                    defaultChecked={isCompleted}
                    onChange={handleCheckbox}
                    id="flexCheckDefault" 
            />
            

            <p className={ isCompleted ? styles.taskCompleted : "" }>
                {text}
            </p>
            <button className={styles.trash} onClick={handleDeleteTask}><Trash /></button>
        </div>
    )
}