import {useState, useEffect} from 'react';
import MatchCard from './MatchList';



function Matches({user}) {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch(`api/matches`)
        .then((r) => r.json())
        .then((matches) => {
            // console.log(matches);
            setMatches(matches)})
    }, []);

    const displayMatches = matches.map((match) => (
        <MatchCard key={match.id} match={match} user={user} />
    ))

    return(
        <>
        {displayMatches}
        </>
    )
}

export default Matches;
