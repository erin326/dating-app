import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import UserHomePage from './UserHomePage';
import NavBar from './NavBar';
import AccountSettings from './AccountSettings';
import Browse from './Browse';
import Matches from './Matches';
import MessageForm from '../pages/MessageForm'
import ConversationList from './ConversationList';
import Match from '../pages/Match';

// import Conversation from './Conversation';




// import './App.css';

function App() {

  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);

  const [user, setUser] = useState(null);
  // const [selectedUser, setSelectedUser] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);

  if(!user) return <Login onLogin={setUser} />;

  // function selectUser(userObj) {
  //   setSelectedUser(userObj);
  //   console.log(userObj);
  // }

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route exact path= '/settings' element={<AccountSettings user={user}
          //  onSelectUser={selectUser} 
          // selectedUser={selectedUser}
          // setSelectedUser={setSelectedUser} 
          />} ></Route>
          <Route exact path ='/browse' element={<Browse user={user} />}></Route>
          <Route exact path='/matches' element={<Matches user={user} />} >
          </Route>
          <Route exact path ='match' element= {<Match />}>

          </Route>
          <Route exact path='/message' element={<MessageForm user={user} />}></Route>
          <Route exact path ='/convos' element={<ConversationList user={user}/>}></Route> 
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