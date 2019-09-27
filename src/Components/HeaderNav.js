import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderNav(props) {

    function logout() {
        localStorage.removeItem('token');
        props.history.push('/')
        console.log('logged out');
    }
    
    const username = localStorage.getItem('username');

    return (
        <div>
            <div className='nav-bar'>
                <div className='header-img'>

                    <div className='img-container'>
                        <img src="https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE4XFxcLzAzXFxcLzA5MTIxNDAzXFxcL2hvbWVyLXNpbXBzb24uanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmpvZS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2pvZVxcXC9uby1pbWFnZS5wbmc_aWQ9MjY0YTJkYmUzNzBmMmM2NzVmY2RcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiZTM1MzgwZTM4OWRjNGQyNjBhN2I0NDE3ZjdlMmM1ZWE5NDE0MjM4MyJ9/homer-simpson.jpg"/>
                        <p>Welcome, {username}</p>
                    </div>
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
