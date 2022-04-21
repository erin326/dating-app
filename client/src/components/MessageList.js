import {useState, useEffect} from 'react';
// import Message from './Message';
// import MatchMessageCard from './MatchMessageCard';

function MessageList({conversation, user, match, selectedMatch, date}) {

    // const [messages, setMessages] = useState([]);

    // const [activeConversation, setActiveConversation] = useState(null)
    // const [matchConvo, setMatchConvo] = useState([])
    
 

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

    // function getConvo(match, con) {
    //         fetch(`api/conversations/${con.id}`)
    //         .then((r) => r.json())
    //         .then((c) => {
    //             // setActiveConversation(c)
    //             setMessages(c.messages)
    //             // console.log(messages);
    //             // console.log(con);
    
    //         })   
    //         getMatchConvo(selectedMatch)
         
          
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
    // console.log(matchConvo);
    // getMatchConvo(selectedMatch)

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

    // console.log(messages);
    // console.log(matchConvo);
   
    
    // const displayMessages = messages.map((mes) => (
    //     <Message user={user} selectedMatch={selectedMatch} match={match} key={mes.id} mes={mes}  />
    //     )) 

    // const matchMessages = matchConvo.map((mes) =>(
    //     <MatchMessageCard key={mes.id} selectedMatch={selectedMatch} user={user} mes={mes} createdAt={mes.created_at} />

    // ))
    // console.log(matchConvo);

   
//     function getList() {
//         const userArray = messages.map((m) => {
//             return ([{ body: m.body,time:  m.created_at, name:  user.username}])
            
//         })
//         const matchArray = matchConvo.map((m)=> {
//             return ([{body: m.body, time: m.created_at, name: selectedMatch.username}])

//         })
//         const joinedArrays = userArray.concat(matchArray)

//         joinedArrays.sort(function(a, b) {
//             return(( b.time) - (a.time))
//         })

     
//     }
//   console.log(getList());

  

    // array.sort(function(a,b){
    // // Turn your strings into dates, and then subtract them
    // // to get a value that is either negative, positive, or zero.
    // return new Date(b.date) - new Date(a.date);
    // });
 
  

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
            {/* <button onClick={() => getConvo(match, conversation)}>View Messages</button>
             */}
            {/* <article style={{position:'absolute', bottom: 0}} id='user-messages'>{displayMessages}</article>
            <article style={{position:'absolute', bottom: 0}} id='match-messages'>{matchMessages}</article> */}
            {/* <button onClick={() => viewMessages(conversation)}>messages</button>
             */}

        </section>
    
        </>
    )
}

export default MessageList;