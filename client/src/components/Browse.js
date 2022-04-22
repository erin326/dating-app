import {useState, useEffect} from 'react';
import Match from '../pages/Match';
import BrowseCard from './BrowseCard';

function Browse({user, genderInterest}) {

    const [allUsers, setAllUsers] = useState([]);
    const [index, setIndex] = useState(0);
    const [likedUser, setLikedUser] = useState([]);
    const[selectedUser, setSelectedUser] = useState({});

     


    const slideRight = () => {
        setIndex((index + 1) % displayUsers.length); // increases index by 1
  
      };

    const filteredUsers = allUsers.filter((user) => {
        if(genderInterest === 'Any') {
            return true;

        }else {
            return user.gender_interest === genderInterest
        }
    })

    const displayUsers = filteredUsers.map((thisUser) => (
            <BrowseCard key={thisUser.id} user={user} otherUser={thisUser} 
            slideRight={slideRight}
            />
            
            )
    
        )
  
    // const slideLeft = () => {
    //     const nextIndex = index - 1;
    //     if (nextIndex < 0) {
    //       setIndex(displayUsers.length - 1); // returns last index of images array if index is less than 0
    //     } else {
    //       setIndex(nextIndex);
    //     }
    //   };

    useEffect(() => {
        fetch('/api/browse')
        .then((r) => r.json())
        .then((users) => {
            console.log(users)
            setAllUsers(users)
        })
        
    }, []);

    

   

    return(
        displayUsers.length > 0 && (
            <div>
            {/* <button onClick={slideLeft}>no</button> */}
            {displayUsers[index]}
      
            {/* <button onClick={slideRight}>yes</button> */}
          </div>
    

        )
       
    )
}

export default Browse;