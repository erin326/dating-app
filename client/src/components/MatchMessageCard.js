function MatchMessageCard({selectedMatch, mes, createdAt}) {

    // console.log(createdAt);
    return(
        <>
        <div className='match-messages'>
        <strong>{selectedMatch.username}</strong>
        <p>{mes.body}</p>

        </div>
      
        </>
    )
}
export default MatchMessageCard;