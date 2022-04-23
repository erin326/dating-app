import {useState, useEffect} from 'react';
import MatchList from './MatchList';



function MatchPage({  user, selectedConvo}) {

     console.log('matches');

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch(`api/matches`)
        .then((r) => r.json())
        .then((matches) => {
            console.log(matches);
            setMatches(matches)})
    }, []);

    const displayMatches = matches.map((match) => (
        <MatchList key={match.id} match={match} user={user} selectedConvo={selectedConvo}  />
    ))

    return(
        <>
        {matches.length ? displayMatches : null}
        </>
    )
}

export default MatchPage;
