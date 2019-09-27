import React,{useState} from "react";
import axios from 'axios'
import { Card } from 'semantic-ui-react';
import BulletList from './BulletList.js';
import AddBullet from './AddBullet.js';


const Note = props => {

    const [newBullet,setNewBullet] = useState({
        note: '',
        resource_id: props.id,
    })

    const [newBulletStatus, setNewBulletStatus] = useState('')

    const handleChange = e => {
        setNewBullet({...newBullet,[e.target.name]: e.target.value})
        console.log('newBullet: ', newBullet)
    }

    function createBullet(e) {
        e.preventDefault();
        axios
            .post('https://mfw-noted.herokuapp.com/api/notes',newBullet)
            .then(res => {
                console.log('success')
                document.location.reload(true)
                
            })
            .catch(err => {
                setNewBulletStatus(`${err}`)
                setNewBullet({
                    note: '',
                    resource_id: '',
                })
            })
    }

    return (
        <Card>
            <div className = 'ui fluid centered card'>
                <div className="content">
                    <div className="left aligned header">
                        <a href={props.link}>
                        {props.title}
                        </a>
                    </div>
                </div>
                <div className="content">
                    <h4 className="left aligned ui sub header">{props.topic}</h4>
                    <div className="ui small feed">
                        <div className="event">
                            <div className="left aligned content">
                                <BulletList resourceId={props.id}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left aligned extra content">
                <form onSubmit={createBullet}>
                    <div className="ui large transparent left icon input">
                        <i className="edit outline icon"></i>
                        {/* <AddBullet resourceId={props.id}/> */}
                        <input 
                            type="text" 
                            name="note"
                            placeholder="Add a Note..."
                            value={newBullet.note}
                            onChange={handleChange}
                            />
                    </div>
                </form>
                </div>
            </div>
        </Card>

    )
}

export default Note