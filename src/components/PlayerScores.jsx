import "../styles/PlayerScore.css";
const PlayerScores = ({ name, playerScore }) => {

  return (
    <>
      <div className="PlayerCss">
        <h2>{name}</h2>
          <p>{playerScore}</p>
      </div>
    </>
  );
};

export default PlayerScores;
