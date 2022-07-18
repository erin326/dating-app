import {Card, CardDescription, Image} from 'semantic-ui-react'

function UserHomePage({user, genderInterest}) {

    const userImage = user.user_image;
    console.log(user);
    

    return (
        <div className='center-card'>
            <Card >
                <Card.Content className='card-content'>
                    <Card.Header>{user.username}</Card.Header>
                    <Image className='image' src={userImage} alt='Add a pic!'></Image>
                    <Card.Description>{user.age}</Card.Description>
                    <Card.Meta>{user.gender}
                    <br></br>
                    Interested in: {user.gender_interest}
                    </Card.Meta>
                    <CardDescription>{user.bio}</CardDescription>
                
                </Card.Content>
            </Card>
        </div>
    )
}

export default UserHomePage;