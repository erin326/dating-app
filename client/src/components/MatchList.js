import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import MessageForm from '../pages/MessageForm'
import Match from '../pages/Match';
// import MessageList from '../components/MessageList';

// import { Widget } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';

function MatchList({match, user}) {

    const [showInfo, setShowInfo] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState({});
    const [convos, setConvos] = useState([]);
    
  
  
    useEffect(() => {
        fetch(`api/conversations`)
        .then((r) => r.json())
        .then((convos) => setConvos(convos))
        
    
    },[])

    
    function getThisMatch(matchObj) {
        setShowInfo(true)
        fetch(`api/match/${matchObj.id}`)
        .then((r) => r.json())
        .then((m) => {
          // console.log(selectedMatch);
  
            setSelectedMatch(m)
            console.log(selectedMatch);
            // const thisConvo = convos.find((c) => {
            //     if(c.user_id === user.id && c.recipient_id === matchObj.id) {

            //         return(c);

        
            //     }

            // })
            // setConversation(thisConvo)
            // console.log(m);
            
  
        })
   
       
   

    }

    

    // function getConvo(matchObj) {

    //     const thisConvo = convos.find((c) => {
    //             if(c.user_id === user.id && c.recipient_id === matchObj.id) {

    //                 return(c);

        
    //             }

    //         })
    //         setConversation(thisConvo)

        
    //         fetch(`api/conversations/${conversation.id}`)
    //         .then((r) => r.json())
    //         .then((c) => {
    //             setMessages(c.messages)
    //             // setMessages(messages)
    //             // console.log(conversation);
    //                 console.log(messages);
    
    //         })

               
            // console.log(conversation);
            // viewMessages(conversation.id)
            // console.log(conversation);

    // }


   
    return(
        <>
        <Card className='match-list'>
            <Card.Header>{match.username}
            <br></br>
            {match.age}
            </Card.Header>
            <Card.Content>
            <Image src={match.user_image} alt='match-image'></Image>
            {/* <Card.Meta>{match.gender}
            <br></br>
            {match.gender_interest}
            </Card.Meta>
            <Card.Description>
            {match.bio}
            </Card.Description> */}
            {/* <Link to='/message'>Message</Link> */}
            {/* <button 
            onClick={() => setShowInfo(!showInfo)}
            >Message</button> */}
            </Card.Content>
            <button onClick={() => getThisMatch(match)}>View Profile</button>
{/*       
            <button onClick={() => getConvo(selectedMatch)}>get convo</button> */}
        </Card>
       
        {/* <MessageForm
        //  getMatch={getThisMatch}
          user={user} match={match}   /> */}

        {showInfo ?  <Match user={user} selectedMatch={selectedMatch} convos={convos}  /> : null}
        {/* <MessageList /> */}
        {/* <Link to='/message'>Message</Link> */}

        </>
    )
}

export default MatchList; 