// import MessageList from '../components/MessageList';
import Message from '../components/Message';
import MatchMessageCard from '../components/MatchMessageCard';
import {useEffect, useState} from 'react';



function MessageForm({user, match, selectedMatch, conversation, getMatch, setShowInfo, selectedConvo }) {


    // console.log(selectedConvo);

    // console.log(user)
    // console.log(match);
    // const [conversation, setConversation] = useState({});
    const [messageBody, setMessageBody] = useState('');
    // const [message, setMessage] = useState([]);

    const [messages, setMessages] = useState([]);

    const [activeConversation, setActiveConversation] = useState(null)
    const [oldMessages, setOldMessages] = useState([])
    

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
            const socket = new WebSocket( "ws://localhost:3000/cable"
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
                    console.log(messages)

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
 
    // messages.map(({id, body, user_id}) => {
    //     console.log(id, body, user_id);
    //     // <p key={id} style={
    //     //     user.id === user_id ?
    //     //     {textAlign: 'right', padding: '20px'}
    //     //     : {textAlign: 'left', padding: '20px'}
    //     // }>
    //     //     {body}

    //     // </p>
    // })

    // useEffect(() => {
    //     if(conversation) {
    //         fetch(`api/conversations/${conversation.id}/messages`)
    //         .then((r) => r.json())
    //         .then((data) => console.log(data))
    //     }
    //     startChat(selectedMatch);
  

    // },[selectedMatch]);
    // console.log(matchConvo.messages)
    // console.log(conversation);

    // function getConvo(match, con) {
    //         fetch(`api/conversations/${con.id}`)
    //         .then((r) => r.json())
    //         .then((c) => {
    //             // setActiveConversation(c)
    //             setMessages(c.messages)
    //             console.log(messages);
    //             // console.log(con);
    
    //         })  
    //         // .then(getMatchConvo(selectedMatch)) 
    //         if(messages) {
    //             getMatchConvo(selectedMatch)

    //         }
         
          
    // }


    // function getMatchConvo(match) {

    //     fetch(`api/other_user_convo/${match.id}`)
    //     .then((r) => r.json())
    //     .then((convo) => {
    //         setMatchConvo(convo.messages)
    //         // console.log(convo);
    //         // setMatchMessages(matchConvo.messages)
    //     })

    // }
    
    // useEffect(() => {
  
        

        // if () {
        //     fetch(`api/conversations/${conversation.id}`)
        //     .then((r) => r.json())
        //     .then((data) => setMessages(data.messages))
        // }
       
        // console.log(messages);

    
    // }, [selectedMatch])
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


    // function sendMessage(e) {
    //     e.preventDefault();
    //     // setShowInfo(true)
    //     // startChat(selectedMatch)
    
    //         // const con = conversation.id
        
    //         if (conversation) {
    //             fetch(`api/conversations/${conversation.id}/messages`, {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Accept": 'application/json'
    //                 },
    //                 body: JSON.stringify({body: messageBody, user_id: user.id, conversation_id: conversation.id})
    //             })
    //             .then((r) => r.json())
    //             .then((message) =>{
    //                 console.log(message)
    //                 // const thisDate = Date();
    //                 // setDate(thisDate)
    //                 setMessage(message)
    //                 })

    //                 // getConvo(match, conversation);

    //         }
    //         if(conversation) {
    //             getConvo(match, conversation);
    //         }
        
          

    // }
    //  console.log(messages)
    // console.log(matchConvo)


    // const displayMessages = messages.map((mes) => (
    //     <Message user={user} selectedMatch={selectedMatch} match={match} key={mes.id} mes={mes}  />
    //     )) 

    // const matchMessages = matchConvo.map((mes) =>(
    //     <MatchMessageCard key={mes.id} selectedMatch={selectedMatch} user={user} mes={mes} createdAt={mes.created_at} />

    // ))
    // console.log(conversation);
    // console.log(message);
    // const lastElement = message[message.length -1];

    const displayMessage = messages.map((message) => (
        <Message key={message.id} message={message} body={message.body}  user={user} selectedConvo={selectedConvo} />
          ))
        //   const sorted = displayMessage.slice().sort((a, b) => b.date - a.date)

    return(

        <div style={
            messages ? {flexDirection: 'column-reverse', display: 'flex', width: '100%'} : { display: 'flex', width: '100%'} }>
         {/* <button onClick={() => startChat(selectedMatch)}>Message</button> */}
         {/* <textarea>
                <MessageList conversation={conversation}/>
            </textarea> */}
            {/* <button onClick={getConvo}>see Convo</button> */}
        
        <form 
        onSubmit={handleSend}
        >
            
           
            {/* <textarea>
                <MessageList conversation={conversation}/>
            </textarea> */}
           <label htmlFor='newMessage'>New Message</label>
            <input value={messageBody} onChange={(e) => setMessageBody(e.target.value)} placeholder="Type your message here"></input>
            <button type='submit'>Send</button>
           
          
        </form>
        {displayMessage}
       
   
        {/* {messages ? messages.map((mes) => (
        <Message user={user} selectedMatch={selectedMatch} match={match} key={mes.id} mes={mes} message={message} lastElement={lastElement} />
        )) :null} */}
        
        {/* // <article style={{position:'absolute', bottom: 0}} id='user-messages'>{displayMessages}</article> */}
        {/* {matchConvo ?  <article style={{position:'absolute', bottom: 0}} id='match-messages'>{matchMessages}</article> : null} */}
        {/* {matchConvo ? matchConvo.map((mes) =>(
        <MatchMessageCard key={mes.id} selectedMatch={selectedMatch} user={user} mes={mes} createdAt={mes.created_at} /> )) : null}
         */}
            {/* <article style={{position:'absolute', bottom: 0}} id='match-messages'>{matchMessages}</article> */}
        {/* <MessageList user={user} match={match} selectedMatch={selectedMatch} message=
        {message} conversation={conversation} getMatch={getMatch} date={date}  />
      */}
       
       {/* {messages.map(({id, body, user_id}) => (
            <p key={id} style={
                user.id === user_id ?
                {textAlign: 'right', padding: '20px'}
                : {textAlign: 'left', padding: '20px'}
            }>
                {body}

            </p>
        ))} */}
        
        

 
        
        </div>
    )
}



export default MessageForm;

