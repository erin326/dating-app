import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import UserHomePage from './UserHomePage';
import NavBar from './NavBar';
import AccountSettings from './AccountSettings';
import Browse from './Browse';
import MessageForm from '../pages/MessageForm'
import ConversationList from './ConversationList';
import Match from '../pages/Match';
import MatchPage from './MatchPage';

function App({}) {

  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

    const [userLatitude, setUserLatitude] = useState([]);
    const [userLongitude, setUserLongitude] = useState([]);

    const [genderInterest, setGenderInterest] = useState('Any/All');
    const [alreadySwiped, setAlreadySwiped] = useState([]);

    

    // console.log(user.likes, 'likes');
   
  useEffect(() => {
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
        // console.log(Object.entries(user.likes))
        const likes = user.likes.map((l) => l.liked_user_id)
   
        setAlreadySwiped(likes)
        });
      } else{ 
       r.json().then((error) => setErrors(error.errors))
      }
    })
  }, []);

  if(!user) return <Login onLogin={setUser} />;

  if(!user.lat || !user.lon) {
    console.log(user);
 
     if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
    
        setUserLatitude(position.coords.latitude)
        setUserLongitude(position.coords.longitude)
    
        fetch(`api/users/${user.id}`, {
            method: "PATCH",
            headers: {
                  "Content-Type" : "application/json",
                  "Accept" : "application/json"
                },
            body: JSON.stringify({
                lat: userLatitude,
                lon: userLongitude
                    })
              })
              .then((r) => r.json())
              .then((loc) => console.log(loc))
        }
      )
    }
  }

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route exact path= '/settings' element={<AccountSettings user={user} genderInterest={genderInterest} setGenderInterest={setGenderInterest} setUser={setUser} 
 
          />} ></Route>
          <Route exact path ='/browse' element={<Browse user={user} genderInterest={genderInterest} alreadySwiped={alreadySwiped} setAlreadySwiped={setAlreadySwiped}/>}></Route>
          <Route exact path='/matches' element={<MatchPage 
          user={user}  />} >
          </Route>
          <Route exact path ='/match' element= {<Match />}>

          </Route>
          <Route exact path='/message' element={<MessageForm user={user} />}></Route>
          {/* <Route exact path ='/convos/:id' element=>

          </Route> */}
          <Route exact path ='/convos' element={<ConversationList key={user.id} user={user} />}></Route> 
          <Route exact path='/login' element={<Login  />}></Route>
          <Route exact path='/' element={<UserHomePage user={user} setUser={setUser} genderInterest={genderInterest}/>}>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;


// Component tree 
/*
App 
  |__NavBar
  |__Login
  |    |__LoginForm
  |    |__SignupForm
  |
  |__AccountSettings
  |__UserHomePage
      |__Likes
      |__BrowseUsers
          |__Location
      |__Conversations
          |__Participant
          |__Message 

     


*/