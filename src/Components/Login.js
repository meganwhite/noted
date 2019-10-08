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
        <div className="loginform">
            <div className="ui card">
            <form className="ui form" onSubmit={login}>
                <div className ="field">
                    <label for='username'>Username
                    <input
                        type='text'
                        name='username'
                        value={creds.username}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className ="field">
                    <label for='password'>Password
                    <input
                        type='password'
                        name='password'
                        value={creds.password}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <button className="ui button" type="submit">Log In</button>
                <p className="donthave">Don't have an account?</p>
                <p className="createone"><Link to='/signup'>Create one here</Link></p>
                {loginStatus && <p>{loginStatus}</p>}
            </form>
            </div>
        </div>
    )
}

export default Login;