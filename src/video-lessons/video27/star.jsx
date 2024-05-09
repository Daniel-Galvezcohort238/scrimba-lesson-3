

export default function Star(props) {
    let starIcon = props.isFilled ? "star-filled.png" : "star-empty.jpg"
    const buttonLabel = props.isFilled ? 'Unmark as favorite' : 'Mark as favorite'

    return (
        <>
            <button 
                onClick={props.handleClick}
                aria-label={buttonLabel}
                className="card-favorite-btn"
            >
                <img 
                    src={`../images/${starIcon}`} 
                    alt="star icon"
                    className="card--favorite"
                    // onClick={toggleFavorite}
                />

            </button>
        </>
    )
}