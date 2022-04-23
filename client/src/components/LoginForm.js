import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


function LoginForm({onLogin}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
                navigate('/browse')
                
            }else{
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }

    return (
        <>
        <form className= "text" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            >
            </input>
            <label>Password</label>
            <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button  className="button" type='submit'>Login</button>
            {errors? <p>{errors.map((error) => (
                <li>{error}</li>
            ))}</p> : null
            } 
        </form>
        </>
    )
}

export default LoginForm;