import "../styles/PlayerScore.css"
const PlayerScores = (props) => {
    return (
        <>
        <div className="PlayerCss">
        <h2>{props.name}</h2>
        <p>0</p>
        </div>
        </>
    )
}

export default PlayerScores; 