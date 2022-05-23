function Message({body, user, message}) {

    return(
        <>
        <div 
        >
            <article  style={ 
            user.id === message.user_id ? {textAlign: 'right', padding: '20px'} : {textAlign: 'left', padding: '20px'}
             }>    
            <p >{body}</p>
            </article>
        </div>
      
        </>
    )
}

export default Message;