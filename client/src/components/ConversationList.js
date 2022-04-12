import {useState, useEffect} from 'react';

function ConversationList({user}) {

    const [chats, setChats] = useState([]);
    // const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        fetch('api/conversations')
        .then((r) => r.json())
        .then((chats) => setChats(chats))

    },[])

    return(

        <div>
            <section>
                {chats.map((chat) => {
                    <article>{chat}</article>
                })}
            </section>

        </div>
    )
}

export default ConversationList;