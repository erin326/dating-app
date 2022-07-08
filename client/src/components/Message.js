function Message({body, user, message, selectedConvo}) {


    return(
        <>
        <div 
        >
            <article className= {user.id === message.user_id ? 'right-chat-bubble' : 'left-chat-bubble'}>
         
         
                {/* {user.id === message.user_id ?  <><p >{body}</p>{user.username[0]}</> : <><p >{body}</p> {selectedConvo.recipient.username[0]}</>} */}
                <p >{body}</p>
            </article>
        </div>
      
        </>
    )
}

export default Message;