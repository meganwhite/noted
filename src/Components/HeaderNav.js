import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderNav(props) {

    return (
        <div>
            <div className='nav-bar'>
                <Link to="/login"><button>Log In</button></Link>
                <Link to="/signup"><button>Sign Up</button></Link>
            </div>
        </div>
    )
}
