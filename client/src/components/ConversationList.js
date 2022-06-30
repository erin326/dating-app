import {useEffect, useState} from 'react';
import MessageForm from '../pages/MessageForm';
import {v4 as uuidv4} from 'uuid';
 // import MatchPage from './MatchPage';


function ConversationList({user}) {
  
   
    const [convos, setConvos] = useState([]);
    const [selectedConvo, setSelectedConvo] = useState(null)

    console.log(selectedConvo);

    useEffect(() => {
        fetch(`api/conversations`)
        .then((r) => r.json())
        .then((convos) => {
            setConvos(convos)
        })
    },[])

    // function setConvo(convo) {
    //     <>
    //     {setSelectedConvo(convo)}
    //   <MessageForm key={convo.id}  user={user} selectedConvo={selectedConvo} />
    //  </>
    // }
    
    return(

        <article className='sidebar'>
            {convos.length > 0 ? (
                <><div>
                    {convos.map((convo) => (
                        
                        <div key={convo.id}>
                      

                        {/* {user.id !== convo.recipient.id ? */}
                         <button key={convo.id} onClick={() => setSelectedConvo(convo)}> 
                         {user.id === convo.sender.id ? convo.recipient.username : convo.sender.username}
                       {/* {convo.recipient.username}
                       {convo.sender.username} */}
                         </button> 
                         {/* : null} */}
                           
                     
                        </div>
                    ))}
                </div>
                <MessageForm  user={user} selectedConvo={selectedConvo} />
            
              </>
            ) :null } 
 
        </article>
    )
}

export default ConversationList;