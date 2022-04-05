import {Card, CardDescription, CardHeader, Image} from 'semantic-ui-react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
// import MessageForm from '../pages/MessageForm'
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

function Match({match, user}) {

    const [showInfo, setShowInfo] = useState(false);

   
    return(
        <>
        <Card className='match-card'>
            <Card.Header>{match.username}
            <br></br>
            {match.age}
            </Card.Header>
            <Card.Content>
            <Image src={match.user_image} alt='match-image'></Image>
            <Card.Meta>{match.gender}
            <br></br>
            {match.gender_interest}
            </Card.Meta>
            <Card.Description>
            {match.bio}
            <Widget />
            </Card.Description>
            {/* <Link to='/message'>Message</Link> */}
            {/* <MessageForm match={match} user={user} /> */}
            
                

            </Card.Content>
        </Card>

        </>
    )
}

export default Match; 