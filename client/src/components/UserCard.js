import {Card, CardDescription, Image} from 'semantic-ui-react'
import {useState, useEffect} from 'react';

function UserCard({otherUser, slideRight, user}) {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch(`api/location`)
        .then((r) => r.json())
        .then((location) => setLocation(location))

    },[])
 
    const [errors, setErrors] = useState([]);
    console.log(otherUser.id -1);
    console.log(otherUser)
    console.log(user)
   function approve() {

       fetch(`api/approve/${otherUser.id}`,{
            method: "POST",
            headers: {
                "Content-Type" : 'application/json',
                
            },
             body: JSON.stringify({user_id: user.id, liked_user_id: otherUser.id})
        }
       )
       .then((r) => r.json())
       .then((data) => console.log(data))
       slideRight();

    //    .then((r) => {
    //     //    if(r.ok) {
    //            r.json()
    //            .then((data)=> console.log(data))
        //    }
        //    else{
        //        r.json().then((error) => setErrors(error.errors))
        //    }
        
    //    })
       
   }


            
   

    return(
        <>
              <Card>
                <Card.Content>
                    <Card.Header>{otherUser.username}</Card.Header>
                    <Image src={otherUser.user_image} alt='my-pic'></Image>
                    <Card.Description>{otherUser.age}</Card.Description>
                    <Card.Meta>{otherUser.gender}
                    <br></br>
                    Interested in: {otherUser.gender_interest}
                    </Card.Meta>
                    <CardDescription>{otherUser.bio}
                    <br></br>
                    {location}
                    </CardDescription>
                    <button onClick={approve}>yes</button> 
                
                </Card.Content>
            </Card>

            {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}
        </>
    )
}

export default UserCard;