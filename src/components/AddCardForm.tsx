import React, { useState } from 'react'


export default function AddCardForm({createTask}: {createTask: any}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState<string>("")
    return (
        <div>
            <h2>Create New Card</h2>
            <form id="new-card-form">
                <input type="text" name="title" id="card-title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <textarea name="description" id="card-description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <input 
                    type="button"
                    value="Create New Card"
                    onClick={
                        () => {
                            createTask(title, description);
                            setTitle("");
                            setDescription("");
                        }
                    }
                />
            </form>
        </div>
    )
}
