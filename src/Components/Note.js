import React from "react";


const Note = props => {

    return (
        <div className = 'notecard'>
            <h3>{props.title}</h3>
            <h4>{props.topic}</h4>
            {props.notes.map(note => {
                return (
                    <p>{note}</p>
                )
            })}
        </div>
    )
}

export default Note