import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
import Match from '../pages/Match';
import {useNavigate} from 'react-router-dom'


function MatchList({match, user, selectedConvo}) {

    const [showInfo, setShowInfo] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState({});

    const navigate = useNavigate();
    
    function getThisMatch(matchObj) {
        setShowInfo(true)
        fetch(`api/match/${matchObj.id}`)
        .then((r) => r.json())
        .then((m) => {
            setSelectedMatch(m)
           
        })
        
        
        // if (selectedMatch) {
        //     console.log(selectedMatch);
        //     fetch(`api/conversations`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type" : 'application/json'
        //         }, 
        //         body: JSON.stringify({
        //             sender_id: user.id, 
        //             recipient_id: selectedMatch.id
        //         })
        //     })
        //     .then((r) => r.json())
        //     .then((c) => console.log(c))

        // }
    }
    console.log(selectedConvo);
    //    if (selectedMatch) {
    //         console.log(selectedMatch);
    //         fetch(`api/conversations`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type" : 'application/json'
    //             }, 
    //             body: JSON.stringify({
    //                 sender_id: user.id, 
    //                 recipient_id: selectedMatch.id
    //             })
    //         })
    //         .then((r) => r.json())
    //         .then((c) => console.log(c))

    //     }
          function startConvo(match) {
           
                fetch(`api/conversations`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : 'application/json'
                    }, 
                    body: JSON.stringify({
                        sender_id: user.id, 
                        recipient_id: match.id
                    })
                })
            
                 navigate('/convos')
                    
                
   
  
      }


    console.log(selectedMatch);
    // function startConvo() {
    //     fetch(`api/conversations`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : 'application/json'
    //         }, 
    //         body: JSON.stringify({
    //             sender_id: user.id, 
    //             recipient_id: selectedMatch.id
    //         })
    //     })
    //     .then((r) => r.json())
    //     .then((c) => console.log(c))
    // }
   
    return(
        <div className='card-container'>

        {showInfo ?  <Match  selectedConvo={selectedConvo} user={user} selectedMatch={selectedMatch}
          /> : 
          <Card className='match-list'>
          <Card.Header><strong>{match.username}</strong>
          <br></br>
          {match.age}
          </Card.Header>
          <Card.Content>
          <Image className='image' src={match.user_image} alt='match-image'></Image>
          </Card.Content>
          <button onClick={() => getThisMatch(match)}>View Profile</button>
          <button onClick={() => startConvo(match)}>Chat</button>

      </Card>
          }
     
        </div>
    )
}

export default MatchList; 