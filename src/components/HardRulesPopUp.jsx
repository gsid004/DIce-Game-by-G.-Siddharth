import "../styles/HardRulesPopUp.css";
const HardRules = () => {
    return (
        <>
        <div className="HardRulesBox">
            <h2>Rules</h2>
            <p>1. The game has 2 players, playing in rounds.</p>
            <p>2. In each turn, a player rolls a dice as many times as they wish. Each result get added to his ROUND score.</p>
            <p>3. BUT, if the player rolls a 1 or a 6, all from his ROUND score gets lost and their score is deducted by 20. After that, it's the next player's turn.</p>
            <p>4. The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.</p>
            <p>5. The first player to reach 100 points GLOBAL score wins the game.</p>
            <p>6. You can change the predefined score of 50 in the 'FINAL SCORE' input box <b>Good Luck!</b></p>
        </div>
        </>
    )
}

export default HardRules;