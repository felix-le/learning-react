import React from "react";
import JokeItem from "./JokeItem";
import JockesData from "./JokesData";

function Joke() {
  return (
    <div>
      {JockesData.length > 0 ? (
        JockesData.map((item,i) => (
          <JokeItem key={i} question={item.question}
            punchLine={item.punchLine}
          />
        ))
      ) : ("Nothing to show")}
    </div>
  );
}

export default Joke;
