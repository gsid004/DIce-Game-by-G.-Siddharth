import "../styles/CurrentScores.css"
const CurrentScores = ({activePlayer, currentScores}) => {
    return (
        <>
        <div className="CurrentScoresBox">
        <h2>CURRENT</h2>
        <p>{currentScores ? currentScores : 0}</p>
        </div>
        </>
    )
}

export default CurrentScores;