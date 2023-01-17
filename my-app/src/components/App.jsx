import React from "react";
// import emoconopedia from "../emoconopedia";
import Entry from "./Entry";

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
                emoji="😜"
                name="Winking Face with Tongue"
                meaning="A yellow face sticking out its tongue and making a zany wink, usually shown with its right eye closed and left wide open. Often conveys a sense of fun, excitement, wackiness, buffoonery, or joking.Used in sharing funny jokes between friends."
        />
        <Entry
                emoji="🫠"
                name="Melting Face"
                meaning="A yellow smiley face melting into a puddle.The eyes and mouth slip down the face, yet still maintain a distorted smile. This quality lends this emoji to sarcasm.Can be used literally to talk about extreme heat. Can also be used metaphorically to talk about embarrassment, shame, a slowly sinking sense of dread, or feeling overwhelmed in some way."

        />
        <Entry/>
     </dl>
     </div>
    </div>
  );
}

export default App;