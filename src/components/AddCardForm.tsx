import React, { useState } from 'react'


export default function AddCardForm({createTask, toggleDisplay}: {createTask: any, toggleDisplay: any}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState<string>("")
    return (
        <form id="new-card-form" action="#">
            <div className="form-content">
                <label htmlFor="card-title">Title:</label>
                <input type="text" name="title" placeholder="Task title..." id="card-title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label htmlFor="card-description">Description:</label>
                <textarea name="description" placeholder="Task description..." id="card-description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
            </div>

            <div id="form-buttons">
                <button 
                    onClick={
                        () => {
                            if(title) {
                                createTask(title, description);
                                setTitle("");
                                setDescription("");
                                toggleDisplay();
                            }
                        }
                    }
                >
                    Create New Task
                </button>
            </div>
        </form>
    )
}
