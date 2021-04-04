import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "smiling",
  "😍": "loved it so much",
  "😒": "not impressed",
  "🤣": "lol",
  "✌": "vibing!",
  "👀": "watching u!",
  "😣": "annoyance"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiinputHnadler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Its not in our database rn, will add it!";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input
        placeholder="put an emoji here and we will tell u the meaning"
        onChange={emojiinputHnadler}
      ></input>
      <h2>{meaning}</h2>
    </div>
  );
}
/**things to notice
 * class -->classNmae
 * style --> takes an object instead of ""
 *
 * VISER= View--> interact--> state in event handler--> render
 *
 *
 */
