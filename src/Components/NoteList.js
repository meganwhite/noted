import React, {useState,useEffect} from 'react';
import Note from './Note';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import NoteForm from './NoteForm.js';


const NoteList = props => {
    const [notes, setNotes] = useState([

    ]);

    const userId = localStorage.getItem('userid')

    useEffect(() => {
        axiosWithAuth()
            .get(`https://mfw-noted.herokuapp.com/api/resources/users/${userId}`)
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
                        link={note.link}
                        user_id={note.user_id}>
                    </Note>
                    
                )
            })}
            </div>
        </div>
    )
}

export default NoteList;