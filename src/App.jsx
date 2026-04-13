import "./App.css";
import CurrentScores from "./components/CurrentScores";
import PlayerScores from "./components/PlayerScores";
import DiceButtons from "./components/DiceButtons";
import Mode from "./components/ModeButtons";
import Misc from "./components/Misc";
import DiceImage from "./components/DiceImage";
import InputField from "./components/InputField";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="Players">
          <PlayerScores name="Player 1" />
          <div className="ImageDice">
            <DiceImage/>
          </div>
          <PlayerScores name="Player 2" />
        </div>
        <div className="CurrentScores">
          <CurrentScores />
          <div className="DiceButtons">
            <DiceButtons name="🔁ROLL DICE" />
            <DiceButtons name="⏸️HOLD TURN" />
            <DiceButtons name="⏯️NEW GAME" />
          </div>
          <CurrentScores />
        </div>
        <div className="MiscButtons">
          <Mode name="Normal Mode" />
          <Mode name="Hard Mode" />
          <InputField/>
          <Misc name="Rules" />
          <Misc name="Edit Player Name" />
        </div>
      </div>
    </>
  );
};

export default App;
