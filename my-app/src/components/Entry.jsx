import React from "react";
//import Emoji from "./Emoji";

function Entry(props){
    return(
        // <div className="term col-sm-4">
        <div className="term">
      <dt>
        {/* <Emoji span={props.emoji}/> */}
        <span>{props.emoji}</span>
        <span>{props.name}</span>
      </dt>
       <dd>
        {props.meaning}
     </dd>

    </div>
    );   
}
export default Entry;