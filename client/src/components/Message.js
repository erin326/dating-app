function Message({mes, match, user, selectedMatch}) {
    // console.log(message)


    return(
        <>
        <strong>{user.username}</strong>
        <p>{mes.body}</p>
        {/* <strong>{selectedMatch.username}</strong> */}
        {/* <p>selectedMatch.messages.body</p> */}
      
        </>
    )
}

export default Message;