import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

export default function HeaderNav(props) {

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('username')
        props.history.push('/')
        console.log('logged out');
    }
    
    const username = localStorage.getItem('username');
    const user_id = localStorage.getItem('user_id');

    const [user,setUser] =useState({
        username:"",
        password:"",
        avatar:"",
    })

    useEffect(() => {
        axiosWithAuth()
            .get(`https://mfw-noted.herokuapp.com/api/users/${user_id}`)
            .then(res=> {
                console.log(res)
                setUser(res.data[0])
            })
            .catch(err => console.log(err.response))
    },[])
    
    let avatar = ""
    switch(user.avatar) {
        case null:
            avatar = "https://cdn.omlet.co.uk/images/originals/alexandrine-parakeet-head-2.jpg";
            break;
        default:
            avatar=user.avatar
    }

    return (
        <div>
            <div className='nav-bar'>
                <div className='header-img'>

                    {localStorage.token && <div className='img-container'>
                        <img src={avatar}/>
                        <p>Welcome, {username}</p>
                    </div>}
                </div>
                <h1>Noted. <span class="blinking-cursor">|</span></h1>
                <div className='header-buttons'>
                    {!localStorage.token && <Link to="/login"><button>Log In</button></Link>}
                    {!localStorage.token && <Link to="/signup"><button>Sign Up</button></Link>}
                    {localStorage.token && <Link to="/protected"><button>Home</button></Link>}  
                    {localStorage.token && <Link to="/login"> <button onClick={logout}>Logout</button></Link>}
                </div>
            </div>
        </div>
    )
}
