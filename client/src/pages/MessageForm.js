import MessageList from '../components/MessageList';

import {useEffect, useState} from 'react';


function MessageForm({user, match, selectedMatch, conversation, getMatch }) {


    // console.log(user)
    // console.log(match);
    // const [conversation, setConversation] = useState({});
    const [messageBody, setMessageBody] = useState('');
    const [message, setMessage] = useState([]);
    
    // const [selectedChat, setSelectedChat] = useState({});
    // const [convos, setConvos] = useState([]);

    

    
    useEffect(() => {
        if(!selectedMatch) {
        fetch(`api/conversations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({recipient_id: selectedMatch.id, user_id: user.id})
        })
        .then((r) => r.json())
        .then((convos) => {
            console.log(convos);
            // setConvos(convos)
        })
    }

    },[selectedMatch]);
    // console.log(convos);
    // console.log(match);

    

    // console.log(convos);
    
    // function getConvo() {
    //     fetch(`api/conversations`)
    //     .then((r) => r.json())
    //     .then((convos) => setConvos(convos))

    //     convos.filter((c) => {
    //         if(c.user_id === user.id && c.recipient_id === match.id) {
    //             setSelectedChat(c)
    //             console.log(selectedChat);
    //         }
    //     })
    //     setConversation(selectedChat)
    //     console.log(conversation);
    

    // }

    
    // function getThisMatch(matchObj) {
    //     console.log(match)
    //     fetch(`api/match/${matchObj.id}`)
    //     .then((r) => r.json())
    //     .then((match) => console.log(match))
    //   }
    // getConvo();
    // console.log(convos);

    // console.log(conversation)
    // console.log(conversation.id);


    function sendMessage(e) {
        e.preventDefault();
     
        // createConvo();
        if (conversation) {
            fetch(`api/conversations/${conversation.id}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({body: messageBody, user_id: user.id, conversation_id: conversation.id})
            })
            .then((r) => r.json())
            .then((message) =>{
                console.log(message)
    
                 setMessage(message)})

        }
    


    }
     
    // console.log(conversation);
    // console.log(message);


    return(
        <>
         {/* <button onClick={() => getThisMatch}>Message</button> */}
         {/* <textarea>
                <MessageList conversation={conversation}/>
            </textarea> */}
            {/* <button onClick={getConvo}>see Convo</button> */}
        <form onSubmit={sendMessage}>
            {/* <textarea>
                <MessageList conversation={conversation}/>
            </textarea> */}
           
            <input value={messageBody} onChange={(e) => setMessageBody(e.target.value)} placeholder="Type your message here"></input>
            <button type='submit'>Send</button>
           
          
        </form>
        <MessageList user={user} match={match} selectedMatch={selectedMatch} message=
        {message} conversation={conversation} getMatch={getMatch}  />
     
       

        
        

 
        
        </>
    )
}


export default MessageForm;

