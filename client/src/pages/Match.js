import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import ConversationList from '../components/ConversationList';
// import MessageForm from '../pages/MessageForm'


import {useState, useEffect} from 'react';


function Match({user, selectedMatch, match, convos, setShowInfo, selectedConvo}) {
    // console.log(selectedMatch);

 
//     const [messages, setMessages] = useState([]);
//     const [conversation, setConversation] = useState({});
//     console.log(selectedMatch);

// // // console.log(selectedMatch);
//     useEffect(() => {
//         console.log(selectedMatch);
//         if(selectedMatch) {
//             const thisConvo = convos.find((c) => {
//                 return c.sender_id === user.id && c.recipient_id === selectedMatch.id
                
//             })
//             setConversation(thisConvo);
//             // if(thisConvo) {
//             //     getMatchConvo(selectedMatch)
//             // }
       
//             console.log(conversation)

//         }
   
         
            
      
    
   
//         // openConvo(selectedMatch, conversation);
        

//     }, [selectedMatch])

    // function startChat(matchObj) {
   
     
    //     if(conversation) {
    //     fetch(`api/conversations`, {
    //             method: "POST",
    //             headers: {
                    
    //                 "Content-Type": "application/json",
    //                 "Accept": 'application/json'
    //             },
    //             body: JSON.stringify({recipient_id: matchObj.id, sender_id: user.id})
    //         })
    //     }
    //     // }else {
    //     //         fetch(`api/conversations/${conversation.id}/messages`)
    //     //         .then((r) => r.json())
    //     //         .then((data) => setMessages(data))
        
    //     // }
       
    //     console.log(conversation);

    // }
    
    // const [matchConvo, setMatchConvo] = useState([])
    // const [matchMessages, setMatchMessages] = useState([]);

    // function getMatchConvo(match) {
    //     fetch(`api/other_user_convo/${match.id}`)
    //     .then((r) => r.json())
    //     .then((convo) => {
    //         setMatchConvo(convo)
    //         console.log(convo);
    //         // setMatchMessages(matchConvo.messages)
    //     })

    // }
    // console.log(matchConvo.messages)
    // console.log(conversation);



    // function openConvo(match) {

       

    //         fetch(`api/conversations/${conversation.id}`)
    //         .then((r) => r.json())
    //         .then((c) => {
    //             setMessages(c.messages)
    //             console.log(messages);
    
    //         })   
    //         // console.log(conversation);
    //         // viewMessages(conversation.id)
    //         // console.log(conversation);

    // }
    // console.log(selectedConvo);
 
      useEffect(() => {
        fetch(`api/conversations`, {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            }, 
            body: JSON.stringify({
                sender_id: user.id, 
                recipient_id: selectedMatch.id
            })
        
        })
        .then((r) => r.json())
        .then((c) => console.log(c))
  
      }, [selectedMatch])

    return(
        <>
        <Card className='card'>
                <Card.Content>
                <Card.Meta>{selectedMatch.gender}
                <br></br>
                {selectedMatch.gender_interest}
                </Card.Meta>
                <Card.Description>
                {selectedMatch.bio}
                </Card.Description>
             
                </Card.Content>
                {/* <Link to='/message' >Message</Link> */}
          


           
                {/* <button onClick={() => createConvo(selectedMatch)}>get convo</button> */}
        </Card>

                        {/* <MessageForm
        //  getMatch={getThisMatch} 
          user={user} selectedMatch={selectedMatch} match={match} 
          selectedConvo={selectedConvo}
        //   setMessages={setMessages} messages={messages}

        //   matchConvo={matchConvo}  
          /> */}
        </>
    )
}

export default Match;