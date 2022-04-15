import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import MessageForm from '../pages/MessageForm'


import {useState, useEffect} from 'react';


function Match({user, selectedMatch, match, convos}) {
    // console.log(selectedMatch);

 
    // const [messages, setMessages] = useState([]);
    const [conversation, setConversation] = useState({});
    console.log(selectedMatch);

// // console.log(selectedMatch);
    useEffect(() => {
        console.log(selectedMatch);
        if(selectedMatch) {
            const thisConvo = convos.find((c) => {
                return c.sender_id === user.id && c.recipient_id === selectedMatch.id
                
            })
            setConversation(thisConvo);
            console.log(conversation)

        }
   
        // openConvo(selectedMatch, conversation);
        

    }, [selectedMatch])
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
          user={user} selectedMatch={selectedMatch} match={match} conversation={conversation}  />

           
                {/* <button onClick={() => openConvo(selectedMatch)}>get convo</button> */}
        </Card>
        </>
    )
}

export default Match;