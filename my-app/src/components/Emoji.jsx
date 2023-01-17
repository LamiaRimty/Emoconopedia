import React from "react";

function Emoji(props){
    return(
        <span 
        className="emoji" role="img" aria-label="Winking Face with Tongue"
        src={props.emoji}
        />
    );
}
export default Emoji;