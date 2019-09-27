import React, {useState,useEffect} from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

const BulletList = props => {
    const [bullets, setBullets] = useState([]);



    useEffect(() => {
        axiosWithAuth()
            .get(`https://mfw-noted.herokuapp.com/api/notes/${props.resourceId}`)
            .then(res => {
                console.log(res)
                setBullets(res.data)
            })
            .catch(err => console.log(err.response))
    },[])

    return (
        <div className='bulletlist'>
            {bullets.map(bullet => {
                return (
                    <p>{bullet.note}</p>
                )
            })}
        </div>
    )


}

export default BulletList;