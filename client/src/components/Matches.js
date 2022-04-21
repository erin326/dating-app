import {useState, useEffect} from 'react';
import MatchList from './MatchList';
// import MatchCard from './MatchList';



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
        <MatchList key={match.id} match={match} user={user} />
    ))

    return(
        <>
        {matches.length ? displayMatches : null}
        </>
    )
}

export default Matches;
