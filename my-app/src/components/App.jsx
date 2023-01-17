import React from "react";
import Entry from "./Entry";
import emoconopedia from "../emoconopedia";

// function createEntry(emocon){
//     return(
//         <Entry
//         key={emocon.id}
//         emoji={emocon.emoji}
//         name={emocon.name}
//         detail={emocon.meaning}
//         />
//     );
// }

function App() {
  return (
    <div>
      <h1> 
        <span>😀Emoconopedia</span>
     </h1>

<div className="row">

     <dl className="dictionary">
        <Entry  
                
                emoji={emoconopedia[0].emoji}
                name={emoconopedia[0].name}
                meaning={emoconopedia[0].meaning}
        />
        <Entry
                emoji={emoconopedia[1].emoji}
                name={emoconopedia[1].name}
                meaning={emoconopedia[1].meaning}
        />

<Entry
                emoji={emoconopedia[2].emoji}
                name={emoconopedia[2].name}
                meaning={emoconopedia[2].meaning}
        />
        
     </dl>
     </div>
    </div>
  );
}

export default App;