import Message from '../components/Message';
import {useEffect, useState} from 'react';
import { Icon } from 'semantic-ui-react';
import {v4 as uuidv4} from 'uuid';


function MessageForm({user, selectedConvo }) {

    const [messageBody, setMessageBody] = useState('');
    const [messages, setMessages] = useState([]);
    const [date, setDate]= useState('')
    

 
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
    // function sendMessage() {
    //     if(selectedConvo) {
            
    //         const socket = new WebSocket(
    //             "ws://localhost:3000/cable"
    //             // "wss://lets-find-love.herokuapp.com/cable"
    //             )
           
    //         socket.addEventListener("open", (event) => {
    //             const message = {
    //                 command: "subscribe",
    //                 identifier: JSON.stringify({
    //                     channel: "ConversationsChannel",
    //                     conversation_id: selectedConvo.id
    //                 })
    //             }
    //             socket.send(JSON.stringify(message));
    //         });
            
    //         socket.addEventListener("message", (event) => {
    //             const data = JSON.parse(event.data);
    //             if(data.type === "ping") return;
    //             if(!data.message)return;
    //             if(data.message.type === 'all_messages') { 
    //                 setMessages(data.message.messages);
    //                 console.log('all');
    //             }
    //             if(data.message.type === 'new_message') {
    //                 setMessages((currentMessages) => [
    //                     data.message.new_message,
    //                     ...currentMessages
    //                 ])
    //                 console.log(data.message.new_message);
    //                 console.log(
    //                     'new message'
    //                 );
    //             }
    //          });
    //          console.log('message sent');
    //     }

    // }

    const seen = new Set();
    const uniqueData = messages.filter(( sid ) => {
        // console.log(sid);
    if (seen.has(sid)) {
        // console.log(sid);
        return false;
    }
    seen.add(sid);
    // console.log(sid);
    return true;
    });
    useEffect(() => {
        // let cancel = false;
        // sendMessage().then(()=> {
        //     if(cancel) return;
        //     setIsVisible(false)
        // });
        // return () => {
        //     cancel = true;
        // }
        if(selectedConvo) {
              const convoStartDate = new Date(`${selectedConvo.created_at}`).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour:'2-digit', minute: '2-digit'})
              console.log(convoStartDate);
     ;
            setDate(convoStartDate)
           
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
          
                if(data.type === "ping") return;
                if(!data.message)return;
                if(data.message.type === 'all_messages') { 
                    setMessages(data.message.messages);
                    console.log('all');
                }
                if(data.message.type === 'new_message') {
                    console.log(data);

                    setMessages((currentMessages) => [
                        data.message.new_message,
                        ...currentMessages
                    ])
                    console.log(data.message.new_message);
                    console.log(
                        'new message'
                    );
                }
             });
             console.log('message sent');
           
        }
        
    }, [selectedConvo]);

    // useEffect(() => {
    //     let cancel = false;

    // },[])
    // const test =  uniqueData.map((message) =>{
    //     console.log(message);
    // })
 
    const displayMessage = uniqueData.map((message) => (
       
      
        <Message  key={message.id} message={message} body={message.body}  user={user} selectedConvo={selectedConvo} createdAt={message.created_at} />
        
          ))
          const sorted = displayMessage.slice().sort((a, b) => b.key - a.key)
        //   console.log(sorted);


        // const date = new Date(`${selectedConvo.created_at}`).toLocaleString("en-US",{timeZone:"CST"})
        // console.log(date);
        // console.log(selectedConvo.created_at);
     
    return(
        
        <div className='messages'> 
     
        { selectedConvo ? 
        

        
        <div>
               <p style={{textAlign: 'center', color: 'gray'}}>Conversation with {selectedConvo.recipient.username} (started {date})</p>
            <div style={{flexDirection: 'column-reverse', display: 'flex'}}>
            
    
                <form  id='form' onSubmit={handleSend}>
                {/* <label htmlFor='newMessage'>New Message</label> */}
                    <textarea
                     style={ {padding: '10px', margin: '10px'}} 
                  
                    value={messageBody} onChange={(e) => setMessageBody(e.target.value)} placeholder="Type your message here"></textarea>
                    <button
                    //  style={ {padding: '20px',
                    
                    // }} 
                    
                    
                    type='submit'> Send
                        {/* <Icon name ="paper plane outline"></Icon> */}
                        </button>
                </form>
                
                {sorted}
            </div>
            </div>
        :null}
        </div>
    )
}


export default MessageForm;

