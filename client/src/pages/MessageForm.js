// import MessageList from '../components/MessageList';
import Message from '../components/Message';
import MatchMessageCard from '../components/MatchMessageCard';
import {useEffect, useState} from 'react';



function MessageForm({user, match, selectedMatch, conversation, getMatch, setShowInfo }) {



    // console.log(user)
    // console.log(match);
    // const [conversation, setConversation] = useState({});
    const [messageBody, setMessageBody] = useState('');
    const [message, setMessage] = useState([]);
    const [date, setDate] = useState('');
    
    // const [selectedChat, setSelectedChat] = useState({});
    // const [convos, setConvos] = useState([]);

    
    // console.log(selectedMatch);

    const [messages, setMessages] = useState([]);

    const [activeConversation, setActiveConversation] = useState(null)
    const [matchConvo, setMatchConvo] = useState([])
    
 

    // useEffect(() => {
    //     fetch(`api/other_user_convo/${selectedMatch.id}`)
    //     .then((r) => r.json())
    //     .then((convo) => {
    //         setMatchConvo(convo)
    //         console.log(convo);
    //         // setMatchMessages(matchConvo.messages)
    //     })

    // },[selectedMatch]);
    // console.log(matchConvo.messages)
    console.log(conversation);

    function getConvo(match, con) {
            fetch(`api/conversations/${con.id}`)
            .then((r) => r.json())
            .then((c) => {
                // setActiveConversation(c)
                setMessages(c.messages)
                // console.log(messages);
                // console.log(con);
    
            })   
            getMatchConvo(selectedMatch)
         
          
    }


    function getMatchConvo(match) {
        fetch(`api/other_user_convo/${match.id}`)
        .then((r) => r.json())
        .then((convo) => {
            setMatchConvo(convo.messages)
            // console.log(convo);
            // setMatchMessages(matchConvo.messages)
        })

    }
    
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
        // .then((r) => r.json())
        // .then((convos) => {
        //     console.log(convos);
        //     // setConvos(convos)
        // })
        }
       
        console.log(conversation);

    }
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
        // setShowInfo(true)
        startChat(selectedMatch);
   
        const con = conversation.id
     
        // createConvo();
        if (con) {
            fetch(`api/conversations/${con}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json'
                },
                body: JSON.stringify({body: messageBody, user_id: user.id, conversation_id: con})
            })
            .then((r) => r.json())
            .then((message) =>{
                console.log(message)
                // const thisDate = Date();
                // setDate(thisDate)
                 setMessage(message)
                })

                getConvo(match, conversation);

        }
    


    }
    const displayMessages = messages.map((mes) => (
        <Message user={user} selectedMatch={selectedMatch} match={match} key={mes.id} mes={mes}  />
        )) 

    const matchMessages = matchConvo.map((mes) =>(
        <MatchMessageCard key={mes.id} selectedMatch={selectedMatch} user={user} mes={mes} createdAt={mes.created_at} />

    ))
    console.log(date);
    // console.log(conversation);
    // console.log(message);


    return(
        <>
         {/* <button onClick={() => startChat(selectedMatch)}>Message</button> */}
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
        <article style={{position:'absolute', bottom: 0}} id='user-messages'>{displayMessages}</article>
            <article style={{position:'absolute', bottom: 0}} id='match-messages'>{matchMessages}</article>
        {/* <MessageList user={user} match={match} selectedMatch={selectedMatch} message=
        {message} conversation={conversation} getMatch={getMatch} date={date}  />
      */}
       

        
        

 
        
        </>
    )
}


export default MessageForm;

