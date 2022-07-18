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
        <div >
         <h3 id="welcome-nav">Welcome, {user.username}!</h3>
         <h1 className='title'>
            <Link to='/'>Let's Find Love</Link>
            </h1>
            <section className='nav-bar'>
            <nav>
            <button id='logout-button' onClick={handleLogout}>Logout</button>
             </nav>
                 <nav>
                    <Link className='nav-link' to='/browse' id='browse'>Browse</Link>
                </nav>
                <nav>
                    <Link className='nav-link' to='/matches' id='matches'>
                    Matches</Link>
                </nav>
                <nav>
                    <Link className='nav-link' to ='/convos' >Chats</Link>
                </nav>
                <nav>
                    <Link className='nav-link' to='/settings' id='account-settings'>Settings</Link>
                </nav> 
                </section>
        </div>
    )
}

export default NavBar;