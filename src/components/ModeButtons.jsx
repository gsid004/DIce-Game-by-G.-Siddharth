import "../styles/ModeButtons.css"
const Mode = (props) => {
    return (
        <>
        <div className="ModeButtons">
            <button onClick={props.toggleHardMode}>
                {props.name}
            </button>
        </div>
        </>
    )
}

export default Mode;