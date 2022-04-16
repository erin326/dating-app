import {Link} from 'react-router-dom';


function NavBar({user, setUser}) {

    function handleLogout(){
        fetch('/api/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }
    
    return (
        <>
         <h3 id="welcome-nav">Welcome, {user.username}!</h3>

        <h1 className='title'>
            <Link to='/'>Love</Link>
        </h1>
        <nav>
            <button id='logout-button' onClick={handleLogout}>Logout</button>
        </nav>
        <nav>
            <Link to='/settings' id='account-settings'>Settings</Link>
        </nav> 
        <nav>
            <Link to='/browse' id='browse'>Browse</Link>
        </nav>
        <nav>
            <Link to='/matches' id='matches'>
            Matches</Link>
        </nav>
        <nav>
            <Link to ='/convos' >Chats</Link>
        </nav>

         
        </>
    )

}

export default NavBar;