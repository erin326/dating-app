import {Card, CardDescription, Image} from 'semantic-ui-react'
import {useState} from 'react';

function BrowseCard({otherUser, slideRight, user, alreadySwiped, setAlreadySwiped}) {
  

    console.log(alreadySwiped);
    console.log(otherUser);
  
    const [distance, setDistance] = useState(0);
    // const [errors, setErrors] = useState([]);
    const [showDistance, setShowDistance] =useState(false)

    function getDistance(lat1, lon1, lat2, lon2) {
        setShowDistance(!showDistance)
        const R = 3958.8 ; // Radius of the earth in miles  
        const dLat = deg2rad(lat2-lat1);  // deg2rad below
        const dLon = deg2rad(lon2-lon1); 
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c; // Distance in miles
        console.log(d);
        const roundedNumber = round(d)
        setDistance(roundedNumber)
        console.log(lat1, lon1, lat2, lon2);
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }

      function round(num) {
        var m = Number((Math.abs(num) * 100).toPrecision(2));
        const result = Math.round(m) / 100 * Math.sign(num);
     
        console.log(result);
        return result
    }
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
    //    setAlreadySwiped([alreadySwiped, ...otherUser.id])

       slideRight();

   }

       function decline() {
            fetch(`api/decline/${otherUser.id}`, {
                method: "POST", 
                headers: {
                    "Content-Type" : 'application/json'
                }, 
                body: JSON.stringify({user_id: user.id, liked_user_id: otherUser.id
                })
            })
            .then((r) => r.json())
            .then((data) => console.log(data))
            slideRight();
        };

    return(
        <div >
              <Card className='card' >
                <Card.Content>
                    <Card.Header>{otherUser.username}</Card.Header>
                    <Image src={otherUser.user_image} alt='my-pic'></Image>
                    <Card.Description>{otherUser.age}</Card.Description>
                    <Card.Meta>{otherUser.gender}
                    <br></br>
                    Interested in: {otherUser.gender_interest}
                    </Card.Meta>
                    <CardDescription>{otherUser.bio}
                    <button onClick={() => getDistance(user.lat, user.lon, otherUser.lat, otherUser.lon)}>See Distance</button>
                    {showDistance ? <p>{distance} miles away</p>  : <br></br>}
                    </CardDescription>
                       
                    <button onClick={decline}>no</button> 
                    <button onClick={approve}>yes</button> 
                </Card.Content>
            </Card>

            {/* {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null} */}
           
        </div>
    )
}

export default BrowseCard;