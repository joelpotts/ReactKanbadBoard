import { useState } from "react";

import Column from './Column'
import AddCardForm from './AddCardForm'
import Modal from './Modal'

type ColumnData = {
    columnTitle: string,
    columnId: string
}

type Task = {
    title: string,
    description: string,
    column: string,
    taskId: number,
    advance: boolean,
    regress: boolean,
}

const Swimlane = ({columns}: {columns: ColumnData[]}) => {
    const [tasks, setTasks] = useState<Task[]>(
        [
            {
                "title": "Work on Kanban Board",
                "description": "Create a react kanban board.",
                "column": "todo",
                "taskId": 0,
                "advance": true,
                "regress": false,
            },
        ]
    );

    const [taskCount, setTaskCount] = useState<number>(1);

    const [displayNewCard, setDisplayNewCard] = useState<boolean>(false);

    const toggleNewCardModal = () => {
        setDisplayNewCard(!displayNewCard);
        console.log("New visibility is: ", displayNewCard);
    }

    const createTask = (title: string, description: string) => {
        console.log("Current task count: ", taskCount);
        let newTask: Task = {
            "title": title,
            "description": description,
            "column": "todo",
            "taskId": taskCount,
            "advance": true,
            "regress": false,
        };
        setTasks([...tasks, newTask]);
        console.log("Current Task List: ", tasks);
        setTaskCount(taskCount + 1);
        console.log("Current Task List: ", tasks);
    }

    const advanceTask = (taskId: number) => {
        console.log("Current Task List: ", tasks);
        let taskIndex: number = tasks.findIndex( (task: Task) => task.taskId === taskId)!;
        let nextCol: number = columns.findIndex( (column) => column.columnId === tasks[taskIndex].column) + 1;


        if(nextCol < columns.length) {
            console.log("Current Task List: ", tasks);
            let newColumnId: string = columns[nextCol].columnId;
            let newTaskList: Task[] = [...tasks];
            newTaskList[taskIndex].column = newColumnId;
            newTaskList[taskIndex].regress = true;

            if(nextCol+1 >= columns.length) {
                newTaskList[taskIndex].advance = false;
            }
            
            setTasks(newTaskList); 
        }
    }

    const regressTask = (taskId: number) => {
        let taskIndex: number = tasks.findIndex( (task: Task) => task.taskId === taskId)!;
        let prevCol: number = columns.findIndex( (column) => column.columnId === tasks[taskIndex].column) - 1;


        if(prevCol >= 0) {
            let newColumnId: string = columns[prevCol].columnId;
            let newTaskList: Task[] = [...tasks];
            newTaskList[taskIndex].column = newColumnId;
            newTaskList[taskIndex].advance = true;

            if(prevCol-1 < 0) {
                newTaskList[taskIndex].regress = false;
            }

            setTasks(newTaskList); 
        }
    }

    return (
        <>
            <button id="create-card-button" onClick={toggleNewCardModal}>Create New Task</button>
            <div className="kanban-swimlane">
                {columns.map( (column) =>
                    <Column columnName={column.columnTitle} tasks={tasks.filter( task => task.column === column.columnId)} advanceTask={advanceTask} regressTask={regressTask}/>
                )}
            </div>
            <Modal visible={displayNewCard} toggleDisplay={toggleNewCardModal}>
                <h2 className="title">Create New Task</h2>
                <AddCardForm createTask={createTask} toggleDisplay={toggleNewCardModal}/>
            </Modal>
        </>
    )
}

export default Swimlane;