import { useEffect, useState } from 'react';
function Message({mes, match, user, selectedMatch}) {
    // console.log(mes)
    // console.log(selectedMatch.username);
    // console.log(user);
    
    // console.log(mes.created_at);
    
    // const [matchConvo, setMatchConvo] = useState([])
    // // const [matchMessages, setMatchMessages] = useState([]);

    // useEffect(() => {
    //     fetch(`api/other_user_convo/${selectedMatch.id}`)
    //     .then((r) => r.json())
    //     .then((convo) => {
    //         setMatchConvo(convo)
          
    //         // setMatchMessages(matchConvo.messages)
    //     })

    // },[selectedMatch]);
    // console.log(matchConvo);
    // console.log(matchConvo.messages);
    // console.log(matchConvo.users);


    // // console.log(setMatchConvo);
    // user.id !== matchConvo.receiver.id
    //     ? mes.username
    //     : chat.initiator.username
    // const matchMessages = matchConvo.messages.map((message) =>(
    //     <li key={message.id}> {message.body}</li>

    // ) )

    // console.log(matchMessages);
    // function findUser(userObj) {
    //     matchConvo.users.filter((user) => {
    //         if (user.username === userObj.username) {
    //             console.log( user.username )
    //         } 
    //     })
    // }
    // findUser(selectedMatch)

    return(
        <>
        <div className='user-messages'>
        <strong>{user.username}</strong>
        <p>{mes.body}</p>
    
        </div>
    
        {/* <strong>{selectedMatch.username}</strong> */}
        {/* {matchMessages} */}
        {/* <strong>{selectedMatch.username}</strong> */}
        {/* <p>selectedMatch.messages.body</p> */}
      
        </>
    )
}

export default Message;