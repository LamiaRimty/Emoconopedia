import React from "react";

function Entry(props){
    return(
        
        <div className="term">
      <dt>
        {/* <Emoji img={props.emojiURL}/> */}
        
        <span className="emoji" >
            {props.emoji} 
            
        </span>
        <span>{props.name}</span>
        
      </dt>
       <dd>
        {props.meaning}
     </dd>

    </div>
    );   
}
export default Entry;