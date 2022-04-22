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
            // console.log(convos)
            setConvos(convos)
        })
        
    
    },[])
    


    return(

        <div>
            {convos.length > 0 ? (
                <><section>
                    {convos.map((convo) => (
                        <><button key={convo.id} onClick={() => setSelectedConvo(convo)}>  {user.id !== convo.recipient.id ? convo.recipient.username : convo.sender.username}</button>
                        {/* <section>
                            <h2>
                                {user.id !== convo.recipient.id ? convo.recipient.username : convo.sender.username}
                            </h2>
                        </section> */}
                        </>
                    ))}
                </section>
                <MessageForm user={user} selectedConvo={selectedConvo} />
              </>
             
            ) :null } 
 
        </div>
    )
}

export default ConversationList;