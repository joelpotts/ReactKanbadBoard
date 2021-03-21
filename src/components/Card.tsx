
type CardData = {
    title: string,
    description: string,
    taskId: number,
    advance: boolean,
    regress: boolean,
    advanceFunction: any,
    regressFunction: any,
}

const Card = ({title, description, taskId, advance, regress, advanceFunction, regressFunction}: CardData) => {
    return (
        <div className="kanban-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {regress != null && <button onClick={() => regressFunction(taskId)}>&#11013;</button>}
            {advance != null && <button onClick={() => advanceFunction(taskId)}>&#10145;</button>}
        </div>
    )

}

export default Card;