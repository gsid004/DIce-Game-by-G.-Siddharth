import "../styles/DiceImage.css";
const DiceImage = ({randNum}) => {
    console.log(randNum)
    
    return (
        <>
        <div className="DiceImage">
            <img src={`/src/assets/dice-${randNum}.png`} alt="Dice-Image"/>
        </div>
        </>
    )
}

export default DiceImage