function Message({mes, match, user}) {
    // console.log(message)

    return(
        <>
        <strong>{user.username}</strong>
        <p>{mes.body}</p>
        </>
    )
}

export default Message;