import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Login (props) {
    const [creds,setCreds] = useState({username:'',password:''});
    const [loginStatus,setLoginStatus] = useState('');

    const handleChange = e => {
        setCreds({...creds,[e.target.name]:e.target.value})
    }

    function login(e) {
        e.preventDefault();
        axios
            .post('https://mfw-noted.herokuapp.com/api/users/login',creds)
            .then(res => {
                console.log(res);
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('userid',res.data.user.id);
                localStorage.setItem('username',res.data.user.username);
                localStorage.setItem('avatar',res.data.user.avatar)
                setLoginStatus("success!");
                setCreds({
                    username:'',
                    password:''
                })
                props.history.push("/protected")
            })
            .catch(err => {
                console.log(err);
                setLoginStatus(`${err}`);
                setCreds({
                    username:'',
                    password:''
                })
            })
    }
    
    return (
        <div>
            <form onSubmit={login}>
                <label for='username'>Username
                    <input
                        type='username'
                        name='username'
                        value={creds.username}
                        onChange={handleChange}
                    />
                </label>
                <label for='password'>Password
                    <input
                        type='password'
                        name='password'
                        value={creds.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Login</button>
                <p>Don't have an account?</p>
                <p><Link to='/signup'>Create one here</Link></p>
                {loginStatus && <p>{loginStatus}</p>}
            </form>
        </div>
    )
}

export default Login;