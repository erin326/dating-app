import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import MessageForm from '../pages/MessageForm'


import {useState, useEffect} from 'react';


function Match({user, selectedMatch, convos}) {
    // console.log(selectedMatch);

 
    // const [messages, setMessages] = useState([]);
    const [conversation, setConversation] = useState({});

// console.log(selectedMatch);
    useEffect(() => {
        console.log(selectedMatch);
        const thisConvo = convos.find((c) => {
            return c.user_id === user.id && c.recipient_id === selectedMatch.id
            
        })
        setConversation(thisConvo);
        console.log(conversation)
        // openConvo(selectedMatch, conversation);
        

    }, [selectedMatch, conversation])



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
 

    return(
        <>
        <Card>
                <Card.Content>
                <Card.Meta>{selectedMatch.gender}
                <br></br>
                {selectedMatch.gender_interest}
                </Card.Meta>
                <Card.Description>
                {selectedMatch.bio}
                </Card.Description>
                </Card.Content>
                <MessageForm
        //  getMatch={getThisMatch}
          user={user} match={selectedMatch} conversation={conversation}  />

           
                {/* <button onClick={() => openConvo(selectedMatch)}>get convo</button> */}
        </Card>
        </>
    )
}

export default Match;