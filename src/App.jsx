import './App.css';
import { useState } from 'react';

function App() {
  const [activeCard, setActiveCard] = useState(false);

  const handleMouseEnter = () => {
    console.log('Mouse Enter');
    setActiveCard(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse Leave');
    setActiveCard(false);
  };

  return (
    <>
      <h1>Card Game</h1>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card"
      >
        <div className={`card__inner ${activeCard ? 'is-flipped' : ''}`}>
          <div className="card__face card__face--front">
            <h2>Developer Card</h2>
          </div>
          <div className="card__face card__face--back">
            <div className="card__content">
              <div className="card__header">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                  alt="pokemon"
                />
                <h2>Charizard</h2>
              </div>
              <div className="card__body">
                <h3>Javascript Wizard</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur voluptas molestias eaque incidunt illo mollitia
                  maxime. Dolorem, dolores sapiente. Dolor, aliquid? Quibusdam
                  earum nam ex unde laboriosam aspernatur! Vero, ipsa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
