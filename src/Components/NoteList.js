import React, {useState,useEffect} from 'react';
import Note from './Note';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import NoteForm from './NoteForm.js';


const NoteList = props => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'hi',
            topic:'placeholder',
            user_id: 1
        },
        {
            id: 2,
            title: 'greetings',
            topic:'placeholder',
            user_id: 1
        },

    ]);

    const userId = localStorage.getItem('user_id')

    useEffect(() => {
        axiosWithAuth()
            .get(`https://mfw-noted.herokuapp.com/api/resources/${userId}`)
            .then(res => {
                console.log(res)
                setNotes(res.data)
            })
            .catch(err => console.log(err.response))
    },[])

    return (
        <div className='notelist'>
            <div className='form-container'>
                <NoteForm/>  
            </div>
            <div className='note-container'>
            {notes.map(note => {
                return (
                    <Note
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        topic={note.topic}
                        user_id={note.user_id}>
                    </Note>
                    
                )
            })}
            </div>
        </div>
    )
}

export default NoteList;