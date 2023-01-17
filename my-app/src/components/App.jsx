import React from "react";
import Entry from "./Entry";
import emoconopedia from "../emoconopedia";

function createEntry(emocon){
    return(
        <Entry
        key={emocon.id}
        emoji={emocon.emoji}
        name={emocon.name}
        meaning={emocon.meaning}
        />
    );
}

function App() {
  return (
    <div>
      <h1> 
        <span>😀Emoconopedia</span>
     </h1>

{/* <div className="row"> */}
     <dl className="dictionary">
      {emoconopedia.map(createEntry)}
     </dl>
     </div>
    // </div>
  );
}

export default App;