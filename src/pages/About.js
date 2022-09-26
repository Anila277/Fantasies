import { GiFlexibleStar } from 'react-icons/gi';
import { useState } from 'react';

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

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div >
            <h1>About Fantasies</h1>
            <h3> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim distinctio ea
                <br /> nesciunt, sapiente quibusdam fugiat, alias sunt pariatur, optio totam odit?
                <br /> Aperiam ex dicta aspernatur suscipit tempora recusandae consequuntur officiis.</h3>
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

                {reviews.map((input) => (
                    <div>{review}</div>
                ))}
                <textarea
                    placeHolder='Leave a Review'
                    value={review}
                    onChange={onChangeHandler}
                />
                <br />
                <button onClick={onClickHandler}>Submit</button>
            </form>

            <div className="profile">
                <h1>About Our Team</h1>
                <h3>Ben Allen</h3>
                <h3>Dudley Gamino</h3>
                <h3>Samuel Johnson</h3>
                <h3>Anila Nisar</h3>

            </div>
        </div>
    )
}

export default About;