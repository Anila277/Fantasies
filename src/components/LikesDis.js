import { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';


function LikeDis() {

    const [like, setLike] = useState(99);
    const [isLiked, setIsLiked] = useState(false);

    const [dislike, setDislike] = useState(0);
    const [isDisliked, setIsDisliked] = useState(false);


    function likeButton() {
        if (isLiked) {
            setIsLiked(false)
            setLike(like - 1)
        } else {
            setIsLiked(true)
            setLike(like + 1)
            if (isDisliked) {
                setIsDisliked(false)
                setLike(like + 1)
                setDislike(dislike - 1)
            }
        }
    };

    function dislikeButton() {
        if (isDisliked) {
            setIsDisliked(false)
            setDislike(dislike - 1)
        } else {
            setIsDisliked(true)
            setDislike(dislike + 1)
            if (isLiked) {
                setIsLiked(false)
                setDislike(dislike + 1)
                setLike(like - 1)
            }
        }
    };

    return (
        <div>
            <span className="likes-counter">{`${like}`}</span>
            <FaThumbsUp onClick={likeButton} />

            <span className="dislikes-counter">{`${dislike}`}</span>
            <FaThumbsDown onClick={dislikeButton} />

        </div>
    );
}

export default LikeDis;