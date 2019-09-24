import React, {useState} from 'react';
import Note from './Note';

const NoteList = props => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'hi',
            topic:'placeholder',
            notes: ['hello','hi again']
        },
        {
            id: 2,
            title: 'greetings',
            topic:'placeholder',
            notes: ['hello','hi again']
        },

    ]);

    return (
        <div>
            <h2>Notelist renders here</h2>
            {notes.map(note => {
                return (
                    <Note
                        key={note.id}
                        title={note.title}
                        topic={note.topic}
                        notes={note.notes}
                    />

                )
            })}
        </div>
    )
}

export default NoteList;