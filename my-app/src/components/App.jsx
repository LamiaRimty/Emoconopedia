import React from "react";
import Entry from "./Entry";
import emoconopedia from "../emoconopedia";

   
function App() {
  return (
    <div>
      <h1> 
        <span>😀Emoconopedia</span>
     </h1>
     
     <dl className="dictionary">
      {
      emoconopedia.map(
       (emocon)=>
        <Entry
        key={emocon.id}
        emoji={emocon.emojiURL}
        name={emocon.name}
        meaning={emocon.meaning}
        />
      )}
     </dl>
     </div>
    
  );
}

export default App;