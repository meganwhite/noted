import React, {useState} from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'

export default function NoteForm (props) {
    const [newNote,setNewNote] = useState({
        title: '',
        topic: '',
        user_id: localStorage.getItem('userid'),
    })

    const [newNoteStatus, setNewNoteStatus] = useState('')

    const handleChange = e => {
        setNewNote({...newNote,[e.target.name]: e.target.value})
        console.log('newNote: ', newNote)
    }

    function createNote(e) {
        e.preventDefault();
        axios
            .post('https://mfw-noted.herokuapp.com/api/resources',newNote)
            .then(res => {
                console.log('success')
                document.location.reload(true)
                
            })
            .catch(err => {
                setNewNoteStatus(`${err}`)
                setNewNote({
                    title: '',
                    topic: '',
                    user_id: '',
                })
            })
    }

    return (
        <Card>
                <div className='content'>
                    <div className='header'>
                        <h2>Add a New Resource</h2>
                    </div>
                </div>
                    <form onSubmit={createNote}>
                        <div className='content'>
                            <div className='ui input'>
                                <input 
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                    value={newNote.title}
                                    onChange={handleChange}
                                />
                            </div>  
                            <div className='ui input'>
                                <input 
                                    type='text'
                                    name='topic'
                                    placeholder='Topic'
                                    value={newNote.topic}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='ui input'>
                                <input 
                                    type='text'
                                    name='link'
                                    placeholder='Link'
                                    value={newNote.link}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='extra content'>
                            <button>
                                <div className='ui bottom attached button'>
                                    <i class="add icon"></i>
                                    Create note
                                    {{newNoteStatus} && <p>{newNoteStatus}</p>}
                                </div>
                            </button>
                        </div>
                    </form>
        </Card>

    )
}