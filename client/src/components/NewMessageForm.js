import {useState} from 'react';

function NewMessageForm ({   user, selectedMatch, match, conversation, conversation_id}) {

    const [body, setBody] = useState('');
    const [convoId, setConvoId] = useState(conversation_id)
  
    // function componentWillReceiveProps (nextProps) {
    
    //   setConvoId(nextProps.conversation_id)
    // };
    console.log(conversation);
    console.log(conversation_id);
  
    function handleChange (e){
      setBody(e.target.value);
    };
  
 
    function sendMessage(e) {
        e.preventDefault();
     
        // createConvo();
        // if (conversation) {
            fetch(`api/conversations/${conversation.id}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json'
                },
                body: JSON.stringify({body: body, user_id: user.id, conversation_id: conversation.id})
            })
            // .then((r) => r.json())
            // .then((message) =>{
            //     console.log(message)
    
            //      setMessage(message)})

        // }
    


    }

      return (
        <div className="newMessageForm">
          <form onSubmit={sendMessage}>
            <label>New Message:</label>
            <br />
            <input
              type="text"
              value={body}
              onChange={handleChange}
            />
            <input type="submit" />
          </form>
        </div>
      );
  
  }
  
  export default NewMessageForm;