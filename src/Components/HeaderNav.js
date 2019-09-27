import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderNav(props) {

    function logout() {
        localStorage.removeItem('token');
        props.history.push('/')
        console.log('logged out');
    }

    return (
        <div>
            <div className='nav-bar'>
                <div className='header-img'>

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
