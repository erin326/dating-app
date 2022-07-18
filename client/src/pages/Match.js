import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import { useEffect} from 'react';


function Match({user, selectedMatch}) {
  
    //   useEffect(() => {
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
  
    //   }, [selectedMatch])

    return(
        <div >
        <Card className='card'>
        
          <Card.Header><strong>{selectedMatch.username}</strong>
          <br></br>
          {selectedMatch.age}
          </Card.Header>
          <Image className='image' src={selectedMatch.user_image} alt='match-image'></Image>
                <Card.Content>
                <Card.Meta>{selectedMatch.gender}
                <br></br>
                {selectedMatch.gender_interest}
                </Card.Meta>
                <Card.Description>
                {selectedMatch.bio}
                </Card.Description>
                </Card.Content>
        </Card>
        </div>
    )
}

export default Match;