import React from 'react'

export default function Modal({visible, toggleDisplay, children}: {visible:boolean, toggleDisplay: any, children:JSX.Element[]}) {
    return (
        <>
            <div className={visible ? "modal" : "modal closed"}>
                <button id="modal-close-button" onClick={toggleDisplay}>X</button>
                {children}
            </div>
            <div className={visible ? "modal-grayout" : "modal-grayout closed"} onClick={toggleDisplay}></div>
        </>
    )
}
