import {useState, useEffect} from 'react';
import MatchList from './MatchList';


function MatchPage({ user, selectedConvo}) {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch(`api/matches`)
        .then((r) => r.json())
        .then((matches) => {
            setMatches(matches)})
    }, []);

    const displayMatches = matches.map((match) => (
        <MatchList key={match.id} match={match} user={user} selectedConvo={selectedConvo}  />
    ))

    return(
        <div >
        {matches.length ? displayMatches : null}
        </div>
    )
}

export default MatchPage;
