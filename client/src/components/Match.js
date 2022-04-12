import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MessageForm from '../pages/MessageForm'
// import MessageList from '../components/MessageList';

// import { Widget } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';

function Match({match, user}) {

    const [showInfo, setShowInfo] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState([]);

    const [selectedChat, setSelectedChat] = useState({});
    const [convos, setConvos] = useState([]);
    const [conversation, setConversation] = useState({});
    // const [messages, setMessages] = useState([]);
  
    useEffect(() => {
        fetch(`api/conversations`)
        .then((r) => r.json())
        .then((convos) => setConvos(convos))
    
    },[match])

    
    function getThisMatch(matchObj) {
        fetch(`api/match/${matchObj.id}`)
        .then((r) => r.json())
        .then((m) => {
          // console.log(selectedMatch);
  
            setSelectedMatch(m)
            getConvo(selectedMatch);
  
      })
      }

    function getConvo(match) {

        // console.log(convos);
        convos.find((c) => {
                if(c.user_id === user.id && c.recipient_id === match.id) {

                    setConversation(c)
                    // viewMessages(conversation);

                    // console.log(selectedChat);
                    // console.log(conversation);
                }
                // console.log(conversation);

            })
            console.log(conversation.id);

           if(conversation !== {}){
            fetch(`api/conversations/${conversation.id}`)
            .then((r) => r.json())
            .then((c) => {
                console.log(c.messages)
                // setMessages(messages)
                // console.log(conversation);
                    // console.log(messages);
    
            })

           }      
            // console.log(conversation);
            // viewMessages(conversation.id)
            // console.log(conversation);

    }

    // useEffect(() => {
        
    //     fetch(`api/conversations/${conversation.id}/messages`)
    //     .then((r) => r.json())
    //     .then((messages) => {
    //         console.log(messages)
    //         setMessages(messages)
    //         // console.log(conversation);
    //             // console.log(messages);

    //     })
    

    // },[conversation]);

   
    return(
        <>
        <Card className='match-card'>
            <Card.Header>{match.username}
            <br></br>
            {match.age}
            </Card.Header>
            <Card.Content>
            <Image src={match.user_image} alt='match-image'></Image>
            <Card.Meta>{match.gender}
            <br></br>
            {match.gender_interest}
            </Card.Meta>
            <Card.Description>
            {match.bio}
            {/* <Widget /> */}
            </Card.Description>
            {/* <Link to='/message'>Message</Link> */}
            {/* <button 
            onClick={() => setShowInfo(!showInfo)}
            >Message</button> */}
            </Card.Content>
            <button onClick={() => getThisMatch(match)}>Message</button>
            {/* <button onClick={() => getConvo(match)}>get convo</button> */}
        </Card>
        <MessageForm getMatch={getThisMatch} user={user} match={selectedMatch} conversation={conversation}  />
{/* 
        {showInfo ? <MessageForm user={user} match={match} /> : null} */}
        {/* <MessageList /> */}
        {/* <Link to='/message'>Message</Link> */}

        </>
    )
}

export default Match; 