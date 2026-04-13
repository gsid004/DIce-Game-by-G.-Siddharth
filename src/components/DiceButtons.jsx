import "../styles/DiceButtons.css";
const DiceButtons = (props) => {
    return (
        <>
        <div className="DiceActionButtons">
            <button>{props.name}</button>
        </div>
        </>
    )
}

export default DiceButtons;