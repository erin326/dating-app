import {useState, useEffect} from 'react';
// import Match from '../pages/Match';
import Filter from './Filter';
import BrowseCard from './BrowseCard';

function Browse({user, alreadySwiped, setAlreadySwiped}) {

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

    const filteredUsers = allUsers.filter((thisUser) => {
        console.log(thisUser);
        // console.log(thisUser.gender_interest.includes('Men'));
       
        if(user.gender_interest === 'Any/All' && user.gender === 'female') {
            // console.log(thisUser);
            return thisUser.gender_interest === 'Any/All' || thisUser.gender_interest === 'Women'
        } else if(user.gender_interest === 'Any/All' && user.gender === 'male') {
            return thisUser.gender_interest === 'Any/All' || thisUser.gender_interest === 'Men'
        } else if(user.gender_interest === 'Men' && user.gender === 'female') {
            return thisUser.gender === 'male' && (thisUser.gender_interest === 'Women' || thisUser.gender_interest === 'Any/All') 
            // return men
        } else if(user.gender_interest === 'Men' && user.gender === 'male' ) {
            return thisUser.gender === 'male' && thisUser.gender_interest === 'Men'
            // return women 
        } else if(user.gender_interest === 'Women' && user.gender === 'male') {
            return thisUser.gender === 'female' && (thisUser.gender_interest === 'Men' || thisUser.genderInterest === 'Any/All')
        }else if(user.gender_interest === 'Women' && user.gender === 'female') {
            return thisUser.gender === 'female' && (thisUser.gender_interest === 'Women' || thisUser.gender_interest === 'Any/All')
        }
    })  
    console.log(filteredUsers);

    

    const displayUsers = filteredUsers.map((thisUser) =>  (
        // if (alreadySwiped.includes(thisUser.id)) {
        //     return null
        // }else {
            // return (
                <BrowseCard key={thisUser.id} user={user} otherUser={thisUser} 
                slideRight={slideRight} alreadySwiped={alreadySwiped} setAlreadySwiped={setAlreadySwiped}
                />
        //     )
        // }
        
    ))
    
    
    return(
        <div className='card-container'>
     {   displayUsers.length > 0 ? (
            <div >
            {displayUsers[index]}
          </div>
        )
        : null}
        {/* <Filter allUsers={allUsers} user={user}/> */}
        </div>
    )
    
}

export default Browse;