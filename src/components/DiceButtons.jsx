import "../styles/DiceButtons.css";
const DiceButtons = ({name, rollDiceFunc, holdTurnFunc, newGameFunc}) => {
    return (
        <>
        <div className="DiceActionButtons">
            <button onClick={rollDiceFunc || holdTurnFunc || newGameFunc}>{name}</button>
        </div>
        </>
    )
}

export default DiceButtons;