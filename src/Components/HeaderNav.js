import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

export default function HeaderNav(props) {

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        localStorage.removeItem('user_id');
        localStorage.removeItem('avatar');
        props.history.push('/')
        console.log('logged out');
    }
    
    const username = localStorage.getItem('username');

    function setAvatar() {
        let propic = "";
        const avatar = localStorage.getItem('avatar');
        const defaultAvatar = "https://cdn.omlet.co.uk/images/originals/alexandrine-parakeet-head-2.jpg"
        if (avatar === "") {
            propic = defaultAvatar;
        }
        else {
            propic = avatar;
        }
        console.log(propic)
        return propic;
    }


    return (
        <div>
            <div className='nav-bar'>
                <div className='header-img'>

                    {localStorage.token && <div className='img-container'>
                        <img src={setAvatar()}/>
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
