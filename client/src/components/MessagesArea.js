  import NewMessageForm from "./NewMessageForm";
  import {useState, useEffect} from 'react'

  function MessagesArea ({ conversation, selectedMatch, user, match, convos})  {
         
    // const [convos, setConvos] = useState([])

    // useEffect(() => {
    //     fetch(`api/conversations`)
    //     .then((r) => r.json())
    //     .then((convos) => {
    //         // console.log(convos)
    //         setConvos(convos)
    //     })
        
    
    // },[selectedMatch])
    // if(selectedMatch) {
    //     const thisConvo = convos.find((c) => {
    //         return c.sender_id === user.id && c.recipient_id === selectedMatch.id
            
    //     })
    //     setConversation(thisConvo);
    //     console.log(conversation)
    //     setActiveConversation(selectedMatch)
    //     console.log(conversation)

    // }
 
    
    function startChat(matchObj) {
        if(!conversation){
     
        fetch(`api/conversations`, {
            method: "POST",
            headers: {
                
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({recipient_id: matchObj.id, sender_id: user.id})
        })
        .then((r) => r.json())
        .then((convos) => {
            console.log(convos);
           
        })
        }
        console.log(conversation);

    }
    //   const id = conversation.id
    //   const messages = conversation.messages
    console.log(conversation);
        return (
          <div className="messagesArea">
            
            {/* <ul>{orderedMessages(conversation.messages)}</ul> */}
            <NewMessageForm 
            convos={convos}
            // conversation_id={conversation.id}
             />
              <button onClick={() => startChat(selectedMatch)}>Message</button>
          </div>
        );
      };
      
  
      
      // helpers
      
      const orderedMessages = messages => {
        const sortedMessages = messages.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
        return sortedMessages.map(message => {
          return <li key={message.id}>{message.body}</li>;
        });
      };
   
  


export default MessagesArea;