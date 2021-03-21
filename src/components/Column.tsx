import Card from './Card'
type Task = {
    title: string,
    description: string,
    column: string,
    taskId: number,
    advance?: any,
    regress?: any,
}

type ColumnData = {
    columnName: string,
    tasks: Task[],
    advanceTask: any,
    regressTask: any,
}

const Column = ({columnName, tasks, advanceTask, regressTask}: ColumnData) => {
    return (
        <div>
            <h2 className="title">{columnName}</h2>
            <div className="kanban-column">
                {tasks.map( (task) => 
                    <Card title={task.title} description={task.description} taskId={task.taskId} advance= {task.advance} advanceFunction={advanceTask} regress={task.regress} regressFunction={regressTask}/>
                )}
            </div>
        </div>
    )

}

export default Column;