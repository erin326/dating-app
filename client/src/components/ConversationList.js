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
            console.log(convos);
            setConvos(convos)
            console.log(convos);
        })
    },[])

    // function setConvo(convo) {
    //     <>
    //     {setSelectedConvo(convo)}
    //   <MessageForm key={convo.id}  user={user} selectedConvo={selectedConvo} />
    //  </>
    // }
    
    return(
        <div>
        <article className='convos'>
            {convos.length > 0 ? (
                <><div>
                    {convos.map((convo) => (
                        
                        <div className='side' key={convo.id}>
                      

                        {/* {user.id !== convo.recipient.id ? */}
                         <button
                         className='sidebar' key={convo.id} onClick={() => setSelectedConvo(convo)}> 
                         {user.id === convo.sender.id ? convo.recipient.username : convo.sender.username}
                       {/* {convo.recipient.username}
                       {convo.sender.username} */}
                         </button> 
                         {/* : null} */}
                           
                     
                        </div>
                    ))}
                </div>
                <div >
           

                </div>
                
               
            
              </>
            ) :null } 
             
 
        </article>
        <MessageForm key={uuidv4()}  user={user} selectedConvo={selectedConvo} />
        </div>

    )
}

export default ConversationList;