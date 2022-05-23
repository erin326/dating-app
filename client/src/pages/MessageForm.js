import Message from '../components/Message';
import {useEffect, useState} from 'react';


function MessageForm({user, selectedConvo }) {

    const [messageBody, setMessageBody] = useState('');
    const [messages, setMessages] = useState([]);

 
    function handleSend(e) {
        e.preventDefault();
        fetch(`api/conversations/${selectedConvo.id}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                body: messageBody, 
                user_id: user.id,
                conversation_id: selectedConvo.id
            }) 
        }); 
        setMessageBody('');
    }

    useEffect(() => {
        if(selectedConvo) {
            const socket = new WebSocket(
                // "ws://localhost:3000/cable"
                "wss://lets-find-love.herokuapp.com/cable"
                )
           
            socket.addEventListener("open", (event) => {
                const message = {
                    command: "subscribe",
                    identifier: JSON.stringify({
                        channel: "ConversationsChannel",
                        conversation_id: selectedConvo.id
                    })
                }
                socket.send(JSON.stringify(message));
            });
            
            socket.addEventListener("message", (event) => {
                const data = JSON.parse(event.data);
                // if(data.type === "ping") return;
                if(!data.message)return;
                if(data.message.type === 'all_messages') { 
                    setMessages(data.message.messages);
                }
                if(data.message.type === 'new_message') {
                    setMessages((currentMessages) => [
                        data.message.new_message,
                        ...currentMessages
                    ])
                    console.log(data.message.new_message);
                }
             });
        }
    }, [selectedConvo]);
 
    const displayMessage = messages.map((message) => (
        <Message  key={message.id} message={message} body={message.body}  user={user} selectedConvo={selectedConvo} createdAt={message.created_at} />
          ))
          const sorted = displayMessage.slice().sort((a, b) => b.props.createdAt - a.props.createdAt)
     
    return(
        
        <> 
        { selectedConvo ? 

            <div style={{flexDirection: 'column-reverse', display: 'flex'}}>
    
                <form style={{flexDirection: 'column-reverse'}} className='form' onSubmit={handleSend}>
                <label htmlFor='newMessage'>New Message</label>
                    <input value={messageBody} onChange={(e) => setMessageBody(e.target.value)} placeholder="Type your message here"></input>
                    <button type='submit'>Send</button>
                </form>
                {sorted}
            </div>
        :null}
        </>
    )
}


export default MessageForm;

