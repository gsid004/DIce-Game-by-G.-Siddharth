import "../styles/ModeButtons.css"
const Mode = (props) => {
    return (
        <>
        <div className="ModeButtons">
            <button>
                {props.name}
            </button>
        </div>
        </>
    )
}

export default Mode;