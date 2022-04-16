import {useState, useEffect} from 'react';
import Message from './Message';

function MessageList({conversation, user, match, selectedMatch}) {

    const [messages, setMessages] = useState([]);

    const [activeConversation, setActiveConversation] = useState(null)

    function getConvo(match, con) {
            fetch(`api/conversations/${con.id}`)
            .then((r) => r.json())
            .then((c) => {
                // setActiveConversation(c)
                setMessages(c.messages)
                console.log(messages);
                console.log(con);
    
            })   
          
    }
    // function getMessages()  {
        
    //     fetch(`api/conversations/${conversation.id}/messages`)
    //     .then((r) => r.json())
    //     .then((messages) => {
    //         console.log(messages)
    //         // setMessages(messages)
    //         // console.log(conversation);
    //             // console.log(messages);

    //     })
    

    // };

    // const [messages, setMessages] = useState([]);

    // console.log(conversation);
    
    // function viewMessages(obj) {
        
    //     fetch(`api/conversations/${conversation.id}/messages`)
    //     .then((r) => r.json())
    //     .then((messages) => {
    //         console.log(messages)
    //         setMessages(messages)
    //         // console.log(conversation);
    //             // console.log(messages);

    //     })

    // };
    // viewMessages(conversation)
    // console.log( message);
    // console.log(conversation);
    // console.log(match);
    
    // const viewMessages = messages.filter((m) => {
    //     if(m.user_id === match.id) (
    //         console.log(m)
    //     )
    // })

    const displayMessages = messages.map((mes) => (
        <Message user={user} selectedMatch={selectedMatch} match={match} key={mes.id} mes={mes} />
        )) 
    
    
    return(
        <>
               {/* <form onSubmit={sendMessage}> */}
            {/* <textarea>
                <MessageList conversation={conversation}/>
            </textarea> */}
{/*            
            <input value={messageBody} onChange={(e) => setMessageBody(e.target.value)} placeholder="Type your message here"></input>
            <button type='submit'>Send</button>
           
          
        </form> */}
        <section>
            <button onClick={() => getConvo(match, conversation)}>View Messages</button>
            <article>{displayMessages}</article>
            {/* <button onClick={() => viewMessages(conversation)}>messages</button>
             */}

        </section>
    
        </>
    )
}

export default MessageList;