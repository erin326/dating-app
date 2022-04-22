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


// import Conversation from './Conversation';




// import './App.css';

function App({}) {

  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);
  

  const [user, setUser] = useState(null);
  // const [selectedUser, setSelectedUser] = useState({});
  const [errors, setErrors] = useState([]);

   const [location, setLocation] = useState([]);
    const [userLatitude, setUserLatitude] = useState([]);
    const [userLongitude, setUserLongitude] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false)
    const [conversation, setConversation] = useState({});
    const [genderInterest, setGenderInterest] = useState('Any');

    const [selectedMatch, setSelectedMatch] = useState({});
    console.log(user);

  useEffect(() => {
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
        // setLoggedIn(true)
        console.log(user);
        });
      }
    })
  }, []);
  

  // loggedIn ? setLoggedIn(!loggedIn) : loggedIn

  if(!user) return <Login onLogin={setUser} />;


  // loggedIn ? setLoggedIn(!loggedIn) : setLoggedIn(loggedIn)
  // function selectUser(userObj) {
  //   setSelectedUser(userObj);
  //   console.log(userObj);
  // }

  if(!user.lat || !user.lon) {
    console.log(user);
 
     if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
    
        // if(user.lat !== 41.982398 || user.lon !== -87.660815) 
        // {
              console.log(position.coords.latitude,  
                  position.coords.longitude);
                  setUserLatitude(position.coords.latitude)
                  setUserLongitude(position.coords.longitude)

          
              fetch(`api/users/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                },
                body: JSON.stringify({
                    // location: location
                    lat: userLatitude,
                    lon: userLongitude
                  
                    })
              })
              .then((r) => r.json())
              .then((loc) => console.log(loc))
        }
      )

  
      console.log(userLatitude, userLongitude, 'state');
  
  
  
    }

   

  }

  
  
  

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route exact path= '/settings' element={<AccountSettings user={user} genderInterest={genderInterest} setGenderInterest={setGenderInterest} 
          //  onSelectUser={selectUser} 
          // selectedUser={selectedUser}
          // setSelectedUser={setSelectedUser} 
          />} ></Route>
          <Route exact path ='/browse' element={<Browse user={user} genderInterest={genderInterest} />}></Route>
          <Route exact path='/matches' element={<MatchPage selectedMatch={selectedMatch} setSelectedMatch={selectedMatch} user={user}  />} >
          </Route>
          <Route exact path ='/match' element= {<Match />}>

          </Route>
          <Route exact path='/message' element={<MessageForm user={user} />}></Route>
          <Route exact path ='/convos' element={<ConversationList key={user.username}  user={user} />}></Route> 
          <Route exact path='/' element={<UserHomePage user={user} setUser={setUser}/>}>
          </Route>
        </Routes>
      </main>
      {/* <Conversation /> */}

    
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