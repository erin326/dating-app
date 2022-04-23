import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Match from '../pages/Match';


function MatchList({match, user, selectedConvo}) {

    const [showInfo, setShowInfo] = useState(false);
    const [selectedMatch, setSelectedMatch] = useState({});


    
    function getThisMatch(matchObj) {
        setShowInfo(true)
        fetch(`api/match/${matchObj.id}`)
        .then((r) => r.json())
        .then((m) => {
          // console.log(selectedMatch);
  
            setSelectedMatch(m)
            
            console.log(selectedMatch);
     

         
  
        })
       
    

    }
   
  

   console.log('match');
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

      </Card>

          }
     

        </div>
    )
}

export default MatchList; 