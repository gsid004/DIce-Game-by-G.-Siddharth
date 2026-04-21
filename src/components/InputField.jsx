import "../styles/InputField.css";
const InputField = ({finalScoreFunc}) => {
    return (
        <>
        <div className="InputField">
            <input type="text" placeholder="FINAL SCORE" onChange={(e) => finalScoreFunc(e.target.value)}></input>
        </div>
        </>
    )
}

export default InputField