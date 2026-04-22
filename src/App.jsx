import "./App.css";
import CurrentScores from "./components/CurrentScores";
import PlayerScores from "./components/PlayerScores";
import DiceButtons from "./components/DiceButtons";
import Mode from "./components/ModeButtons";
import Misc from "./components/Misc";
import DiceImage from "./components/DiceImage";
import InputField from "./components/InputField";
import { useState } from "react";
import NormalRules from "./components/NormalRulesPopUp";

const App = () => {
  const [randNumGen, setRandNumGen] = useState(1);
  const [currentScores, setCurrentScores] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [winningScore, setWinningScore] = useState(50);
  const [winner, setWinner] = useState(null);
  const [rulesPopUp, setRulesPopUp] = useState(false);

  const rollDice = () => {
    const randNum = Math.ceil(Math.random() * 6);
    const totalScore = currentScores + randNum;
    setCurrentScores(totalScore);
    setRandNumGen(randNum);

    if (randNum === 1) {
      setCurrentScores(0);
      setActivePlayer(1 - activePlayer);
    } else {
      setCurrentScores(currentScores + randNum);
    }
  };

  const holdTurn = () => {
    const updatedScores = [...playerScore];
    updatedScores[activePlayer] += currentScores;
    setPlayerScore(updatedScores);
    setCurrentScores(0);

    if(updatedScores[activePlayer] >= winningScore) {
      setWinner("Player " + (activePlayer + 1))
    } else {
      setActivePlayer(1 - activePlayer);
    }
  };

  const newGame = () => {
    setPlayerScore([0, 0]);
    setCurrentScores(0);
    setActivePlayer(0);
    setRandNumGen(1);
  };

  const finalScore = (value) => {
    setWinningScore(Number(value));
  };

  const rulesFunc = () => {
    setRulesPopUp(!rulesPopUp);
  }

  return (
    <>
      <div className="container">
        <div className="Players">
          <PlayerScores name="Player 1" playerScore={playerScore[0]} />
          <div className="ImageDice">
            <DiceImage randNum={randNumGen} />
          </div>
          <PlayerScores name="Player 2" playerScore={playerScore[1]} />
        </div>
        <div className="CurrentScores">
          <CurrentScores
            activePlayer={activePlayer}
            currentScores={activePlayer === 0 ? currentScores : 0}
          />
          <div className="DiceButtons">
            <DiceButtons rollDiceFunc={rollDice} name="🔁ROLL DICE" />
            <DiceButtons holdTurnFunc={holdTurn} name="⏸️HOLD TURN" />
            <DiceButtons newGameFunc={newGame} name="⏯️NEW GAME" />
          </div>
          <CurrentScores
            activePlayer={activePlayer}
            currentScores={activePlayer === 1 ? currentScores : 0}
          />
        </div>
        <div className="MiscButtons">
          <Mode name="Normal Mode" />
          <Mode name="Hard Mode" />
          <InputField finalScoreFunc={finalScore} />
          <Misc name="Rules" rulesPopUp = {rulesFunc}/>
          <Misc name="Edit Player Name" />
        </div>
      </div>

      {winner && (
        <div className="winnerPopUp">
          <h2>{winner} wins!! 🎉🎉🎊</h2>
          <p>Score: {playerScore[activePlayer]}</p>
          <button onClick={() => {newGame(); setWinner(null);}}>New Game</button>
        </div>
      )}

      {rulesPopUp && <NormalRules />}
    </>
  );
};

export default App;
