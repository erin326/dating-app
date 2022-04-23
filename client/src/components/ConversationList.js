import {useEffect, useState} from 'react';
import MessageForm from '../pages/MessageForm';
import MatchPage from './MatchPage';


function ConversationList({user}) {
  


    const [convos, setConvos] = useState([]);
    const [selectedConvo, setSelectedConvo] = useState(null)

    
  
  
    useEffect(() => {
        fetch(`api/conversations`)
        .then((r) => r.json())
        .then((convos) => {
            setConvos(convos)
        })
        
    
    },[])
    


    return(

        <article className='sidebar'>
            {convos.length > 0 ? (
                <><div>
                    {convos.map((convo) => (
                        <><button key={convo.id} onClick={() => setSelectedConvo(convo)}>  {user.id !== convo.recipient.id ? convo.recipient.username : convo.sender.username}</button>
                  
                        </>
                    ))}
                </div>
              
              </>
             
            ) :null } 
            {convos ? null :    <MessageForm user={user} selectedConvo={selectedConvo} />}
           
 
        </article>
    )
}

export default ConversationList;