import { GiFlexibleStar } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const colors = {
    grey: "#556483",
    green: "#63d670"

}

function About(props) {


    const stars = Array(5).fill(0);

    const [currentValue, setCurrentValue] = useState(0);

    const [hoverValue, setHoverValue] = useState(null);

    const handleClick = value => {
        setCurrentValue(value)

    };


    const handleMouseOver = value => {
        setHoverValue(value)
    };

    const handleMouseLeave = () => {
        setHoverValue(null)
    };

    const [review, setReview] = useState("");

    const [reviews, setReviews] = useState([]);

    const onClickHandler = () => {
        setReviews((reviews) => [...reviews, review]);

    }

    const onChangeHandler = (e) => {
        setReview(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div >
            <h1>About Fantasies: Poetry Escape</h1>
            <h3> Fantasies: Poetry Escape is the brain child of 4 GA Programming Students who,
                <br /> after much thought realized their shared love of poetry. So, they descided
                <br /> that they would make a place where Poets can share their work with the world.
                <br /> as well as a place where they can easily peruse the classics and take
                <br /> inspiration from the poets of the past.</h3>

            <div className="profile">
                <h1>About Our Team</h1>
                <br />
                <h3>Ben Allen</h3>
                <p className="BenP"> The Functionality Genius<img className="Ben" src={require('../assets/Capture3.PNG')} alt="Ben" /></p>
                <br />
                <h3>Dudley Gamino</h3>
                <p className="DudleyP"> The Styling Master<img className="Dudley" src={require('../assets/Capture.PNG')} alt="Dudley" /></p>
                <br />
                <h3>Samuel Johnson</h3>
                <p className="SamuelP"> The Chief Overseer<img className="Samuel" src={require('../assets/Capture4.PNG')} alt="Samuel" /></p>
                <br />
                <h3>Anila Nisar</h3>
                <p> The Mastermind<img className="Anila" src={require('../assets/Capture2.PNG')} alt="Anila" /></p>

            </div>

            <h2>Reviews</h2>
            <form onSubmit={handleSubmit}>
                {stars.map((_, star) => {
                    return (
                        <GiFlexibleStar
                            key={star}
                            color={(hoverValue || currentValue) > star ? colors.green : colors.grey}
                            onClick={() => handleClick(star + 1)}
                            onMouseOver={() => handleMouseOver(star + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}

                <br />

                <textarea
                    placeholder='Leave a Review'
                    value={review}
                    onChange={onChangeHandler}
                />
                <br />
                <button onClick={onClickHandler}>Submit</button>
                <div>
                    {reviews.map((input) => (
                        <div>{input}</div>
                    ))}
                </div>
            </form>


        </div>
    )
}

export default About;