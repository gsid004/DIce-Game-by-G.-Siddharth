import "../styles/DiceImage.css";
import dice1 from "../assets/dice-1.png";
const DiceImage = () => {
    return (
        <>
        <div className="DiceImage">
            <img src={dice1} alt="Dice-Image"></img>
        </div>
        </>
    )
}

export default DiceImage