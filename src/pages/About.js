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
    }

    const handleMouseLeave = () => {
        setHoverValue(null)
    }

    return (
        <div >
            <h1>About Fantasies</h1>
            <h3> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim distinctio ea
                <br /> nesciunt, sapiente quibusdam fugiat, alias sunt pariatur, optio totam odit?
                <br /> Aperiam ex dicta aspernatur suscipit tempora recusandae consequuntur officiis.</h3>
            <div >
                {stars.map((_, index) => {
                    return (
                        <GiFlexibleStar
                            key={index}
                            color={(hoverValue || currentValue) > index ? colors.green : colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}

            </div>
            <textarea
                placeHolder='Leave a Review'
            />
            <button>Submit</button>
        </div>
    )
}

export default About;