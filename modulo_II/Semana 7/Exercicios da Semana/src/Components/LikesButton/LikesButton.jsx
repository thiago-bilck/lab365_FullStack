import { useState } from "react";

function LikesButton() {
    
    const [likes, setLikes] = useState(0)

    function like() {

        setLikes(likes + 1)
    }
    
    return ( 
        <div>
            <button onClick={like}>Likes: {likes}</button>
        </div>
     );
}

export default LikesButton;