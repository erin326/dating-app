import {useState, useEffect} from 'react';
import UserCard from './UserCard';

function Browse({user}) {

    const [allUsers, setAllUsers] = useState([]);
    const [index, setIndex] = useState(0);
    const [likedUser, setLikedUser] = useState([]);
    const[selectedUser, setSelectedUser] = useState({});

     


    const slideRight = () => {
        setIndex((index + 1) % displayUsers.length); // increases index by 1
  
      };

    const displayUsers = allUsers.map((thisUser) => (
            <UserCard key={user.id} user={user} otherUser={thisUser} 
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
        .then((users) => setAllUsers(users))
        
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