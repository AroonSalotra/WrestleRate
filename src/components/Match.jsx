import { useRef, useState } from "react"

const Match = ({ match, eventId }) => {

    const [rating, setRating] = useState(0)

    const refs = useRef([])

    const ratingScale = [1, 2, 3, 4, 5]

    const handleClick = (clickedRating) => {
        setRating(clickedRating);

        // Remove all
        refs.current.forEach((ref) => {
            if (ref) ref.classList.remove('active');
        });

        // Add active to left of clicked
        for (let i = 0; i < clickedRating; i++) {
            if (refs.current[i]) refs.current[i].classList.add('active');
        }

        console.log(eventId)
    };

    return (
        <div className="match-card">
            <p className="match">{match}</p>
            <div className="match-rating">
                {ratingScale.map((elem, index) => {
                    return <button
                        key={eventId + elem}
                        onClick={() => handleClick(elem)}
                        className={elem}
                        ref={(el) => (refs.current[index] = el)}
                    >★
                    </button>
                })}
            </div>
        </div>
    )
}

export default Match