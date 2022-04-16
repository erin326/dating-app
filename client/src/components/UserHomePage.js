import {Card, CardDescription, Image} from 'semantic-ui-react'


function UserHomePage({user}) {

    console.log(user.lat, user.lon)

    
    return (
        <>
            <Card>
                <Card.Content>
                    <Card.Header>{user.username}</Card.Header>
                    <Image src={user.user_image} alt='my-pic'></Image>
                    <Card.Description>{user.age}</Card.Description>
                    <Card.Meta>{user.gender}
                    <br></br>
                    Interested in: {user.gender_interest}
                    </Card.Meta>
                    <CardDescription>{user.bio}</CardDescription>
                
                </Card.Content>
            </Card>

           
        </>

    )
}

export default UserHomePage;