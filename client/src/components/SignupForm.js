import { useState } from "react";

function SignUpForm({onLogin}) {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    function handleSignupSubmit(e) {
        e.preventDefault();

        fetch('/api/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                username, 
                password,
                password_confirmation: passwordConfirmation
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            }else{
                r.json().then((error) => setErrors(error.errors))
            }
        });
    }

    return(

        <form onSubmit={handleSignupSubmit}>
        <label>Username: </label>
        <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></input>
        
        <br></br>
        <label>Password: </label>
        <input
        type="password"
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <label>Password Confirmation: </label>
        <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e)=> setPasswordConfirmation(e.target.value)}
        ></input>
        <br></br>
        <button className="button" type='submit'>Sign Up</button>

        {errors ? errors.map((err) => (<p>{err}</p>)) 
      : null}
      
    </form>
    )
}

export default SignUpForm;