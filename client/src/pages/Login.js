import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';


function Login({onLogin}) {

    const [showLoginForm, setShowLoginForm] = useState(true);

 return (
    <div className="login-page">
        <h1>Love Finder</h1>
        <h3>Login or Sign Up to get started!</h3>

    {showLoginForm ? (
        <>
        <LoginForm  onLogin={onLogin}/>
        <h3>Don't have an account? 
            <button
            onClick={() => setShowLoginForm(false)}> Sign Up
            </button>
        </h3>
        </>

    ) : (
        <>
        <SignupForm  onLogin={onLogin}/>
        <br></br>
        <p>
            Already have an account? 
            <button onClick={() => setShowLoginForm(true)}>
                Log In
            </button>
        </p>
        </>
    )}
    </div>

 )
}

export default Login;