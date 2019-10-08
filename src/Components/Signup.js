import React, {useState} from 'react';
import axios from 'axios';

export default function Signup (props) {
    const [newCreds,setNewCreds] = useState({
        username: '',
        password: '',
        avatar: ''
    })

    const [signupStatus,setSignupStatus] = useState('');

    const handleChange = e => {
        setNewCreds({...newCreds,[e.target.name]: e.target.value})
    }

    function signup(e) {
        e.preventDefault();
        axios
            .post('https://mfw-noted.herokuapp.com/api/users/register',newCreds)
            .then(res => {
                props.history.push("/")
            })
            .catch(err => {
                console.log(err);
                setSignupStatus(`${err}`);
                setNewCreds({
                    username:'',
                    password:''
                })
            })
    }

    return (
        <div className="signup">
            <div className="ui card">
            <h2>Sign up to create an account</h2>
            <form className="ui form" onSubmit = {signup}>
            <div className="field">
                    <label for='username'>Username
                    <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={newCreds.username}
                    onChange={handleChange}/>
                    </label>
                </div>
                <div className="field">
                    <label for='password'>Password
                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={newCreds.password}
                    onChange={handleChange}/>
                    </label>
                </div>
                <div className="field">
                    <label for='avatar'>Avatar
                    <input
                        type='text'
                        name='avatar'
                        placeholder='paste image url here'
                        value={newCreds.avatar}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <button className="ui button" type="submit">Sign Up</button>
                {{signupStatus} && <p>{signupStatus}</p>}
            </form>
            </div>
        </div>
    )

}