import { CreateButton } from "./components/CreateButton";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";

import "./global.css"
import styles from "./App.module.css"
import logo from "./assets/Logo.svg"
import clipboard from "./assets/Clipboard.svg"
import { Task } from "./components/Task";
import { FormEvent, useState } from "react";

interface Task {
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [textTask, setTextTask] = useState<string>('')
  const [taskList, setTaskList] = useState<Task[]>([])

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    const newTask: Task = {
      isCompleted: false,
      text: textTask
    }
    /* setTaskList(prev => [...prev, newTask]) */
    setTaskList([...taskList, newTask])
    setTextTask('')
  }

  function deleteTask(content: string) {
    const taskListWithoutOne: Task[] = taskList.filter(task => task.text !== content)
    setTaskList(taskListWithoutOne)
  }

  function changeCompleted(content: string) {
    const newTaskList: Task[] = taskList.map(task => {
      if (task.text === content) {
        if (task.isCompleted) {
          task.isCompleted = false
        } else {
          task.isCompleted = true
        }
      }
      return task
    })

    setTaskList(newTaskList)
  }

  return (
    <>
      <header className={styles.header}>
        <Logo src={logo} alt="Logo da lista de tarefas" />
      </header>

      <main className={styles.main_area}>
        <div className={styles.container}>
          <form 
            className={styles.form_create_task}
            onSubmit={handleCreateTask}
          >
            <Input 
              textTask={textTask}
              onChangeText={setTextTask}
            />
            <CreateButton />
          </form>

          <div className={styles.show_tasks}>
            <header>
              <strong className={styles.label_created_completed}>
                Tarefas criadas
                <span className={styles.created_tasks}>{taskList.length}</span>
              </strong>
              <strong className={styles.label_created_completed}>
                Concluídas
                {/* <span className={styles.completed_tasks}>0</span> */}
                <span className={styles.completed_tasks}>
                  {taskList.length > 0 ? 
                    taskList.filter(task => task.isCompleted === true).length 
                    + " de " + taskList.length : 0}
                </span>
              </strong>
            </header>

            {/* <div className={styles.tasks_list}>
              {taskList.length < 1 ? 
                <div className={styles.no_tasks}>
                  <img 
                    src={clipboard} 
                    alt="Ícone de um clipboard" 
                  />
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus items a fazer</p>
                </div> : 
                <ul>
                  {taskList.map(task => <li key={task.text}><Task onChangeCompleted={changeCompleted} onDelete={deleteTask} {...task} /></li>)}
                </ul>
              }
            </div> */}

            <div className={ taskList.length > 0 ? styles.tasksListWithTasks : styles.tasks_list}>
              {taskList.length < 1 ? 
                <div className={styles.no_tasks}>
                  <img 
                    src={clipboard} 
                    alt="Ícone de um clipboard" 
                  />
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus items a fazer</p>
                </div> : 
                <ul>
                  {taskList.map(task => <li key={task.text}><Task onChangeCompleted={changeCompleted} onDelete={deleteTask} {...task} /></li>)}
                </ul>
              }
            </div>

          </div>

        </div>
      </main>
    </>
  )
}