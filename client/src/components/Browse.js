import {useState, useEffect} from 'react';
import Match from '../pages/Match';
import BrowseCard from './BrowseCard';

function Browse({user, genderInterest}) {

    const [allUsers, setAllUsers] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch('/api/browse')
        .then((r) => r.json())
        .then((users) => {
            console.log(users)
            setAllUsers(users)
        })
        
    }, []);
    


    const slideRight = () => {
        setIndex((index + 1) % displayUsers.length); // increases index by 1
        
  
      };

 

    const displayUsers = allUsers.map((thisUser) => (
            <BrowseCard key={thisUser.id} user={user} otherUser={thisUser} 
            slideRight={slideRight}
            />
            
            )
    
        )
  




    

   

    return(
        displayUsers.length > 0 ? (
            <div>
            {displayUsers[index]}
      
          </div>
    

        )
        : null
       
    )
}

export default Browse;