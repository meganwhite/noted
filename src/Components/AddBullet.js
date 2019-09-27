import React, {useState} from 'react'
import axios from 'axios'



export default function AddBullet (props) {
    const [newBullet,setNewBullet] = useState({
        note: '',
        resource_id: props.resourceId,
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
        <div class="ui form">
        <div class="ui field">
        <form onSubmit={createBullet}>
            <input
                type="text"
                name="note"
                placeholder="Add a Note..."
                value={newBullet.note}
                onChange={handleChange}
            />
        </form>
        </div>
        </div>

    )

}