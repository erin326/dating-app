import {useState, useEffect} from 'react';
import Match from './Match';



function Matches({user}) {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch(`api/matches`)
        .then((r) => r.json())
        .then((matches) => {
            console.log(matches);
            setMatches(matches)})
    }, []);

    const displayMatches = matches.map((match) => (
        <Match key={match.id} match={match} user={user} />
    ))

    return(
        <>
        {displayMatches}
        </>
    )
}

export default Matches;
