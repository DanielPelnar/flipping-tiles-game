import React from "react";
import { useState, useEffect } from "react";
import shuffle from "./utilities/shuffle";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState(shuffle);
  // each turn is defined as having two clicks on two different cards:
  const [firstPick, setFirstPick] = useState(null);   // represents object defined in Card.js
  const [secondPick, setSecondPick] = useState(null); // represents object defined in Card.js
  const [wins, setWins] = useState(0); 
  const [disabled, setDisabled] = useState(false); 

  // Handler for card selection:
  function handleClick(card) {
    if (!disabled) {
      if (firstPick) {
        setSecondPick(card);
      } else {
        setFirstPick(card);
      }
    }
  }

  // Handler for new turn (resets both picks and set disabled to false):
  function newTurn() {
    setFirstPick(null);
    setSecondPick(null);
    setDisabled(false);
  }


  // Sideffect used for selection and match handling:
  useEffect(() => {
    let timer;
    // Run bellow only if both cards have been picked:
    if (firstPick && secondPick) {
      // If picks are the same, mark them as "matched":
      if (firstPick.image === secondPick.image) { 
        // Done by iterating over all cards and adding key-value pair matched: true 
        // for the 2 matching cards
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === firstPick.image) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        // New turn:
        newTurn();
      } else {
        // If picks not the same, we need to prevent the user from selecting more:
        setDisabled(true);
        // And after 1 second, let the user have another turn:
        timer = setTimeout(() => {
          newTurn();
        }, 1000);
      }
    }

    // clean up:
    return () => {
      clearTimeout(timer);
    };

  }, [firstPick, secondPick]); 

  // Sideffect for end game (when all cards have been matched):
  useEffect(() => {
    // Create a new array of only card objects that have not been matched:
    const notMatchedCards = cards.filter((card) => {
      return !card.matched;
    });
    // Game ends if everything was matched:
    if (notMatchedCards.length < 1) {
      setWins((prevWin) => prevWin + 1);
      // create a new game: 
      newTurn();
      setCards(shuffle);
    }
  }, [cards]); 

  // Handler for new game:
  function handleNewGame() {
    setWins(0);
    newTurn();
    setCards(shuffle);
  }

  return (
    <>
      <Header onClick={handleNewGame} wins={wins} />
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          return (
            <Card 
              key={id}
              image={image}
              selected={ card === firstPick || card === secondPick || matched }
              onClick={() => { return handleClick(card); }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
