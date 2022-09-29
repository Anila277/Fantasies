import { useState, useEffect } from 'react';
import LikeDis from '../components/LikesDis';



import { useParams, useNavigate } from 'react-router-dom';
function Show({ poems, deletePoems, updatePoems, user }) {
    const { id } = useParams();
    const poem = poems ? poems.find(p => p._id === id) : null;
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState({
        name: '',
        content: '',
        author: '',
        createdByUser: '',
        tags: [],
        comments: [],
        likes: 0,
        dislikes: 0,
    });

    const [isEditing, setIsEditing] = useState(false);


    const handleEdit = () => {
        setIsEditing(prevState => !prevState)
    };

    const handleDelete = () => {
        deletePoems(poem._id)
        navigate('/');
    };

    const handleComment = () => {
        // push the comment input to the end of the comment array
        updatePoems(editForm, id);
    }

    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        updatePoems(editForm, id);
        setIsEditing(false);
    };

    const handleConfirm = () => {
        const confirmBox = window.confirm(
            `Are you sure you want to delete ${poem.name}?`
        )
        if (confirmBox === true) {
            handleDelete();
        }
    };

    const loading = () => {
        return <h1> Your Poem is On the Way...</h1>;
    };

    const loaded = () => {

        poem.comments.map(comments => (
            <div className='comments' key={poem._id} >
                <ul className='comments-list'>
                    <li>
                        {comments}
                    </li>
                </ul>
            </div>

        ));

        return (
            <section className="PoemsShow">
                <div className="poem">

                <h1>{poem.name}</h1>
                <img className='limiter'
                    src={poem.image}
                    alt={poem.name}
                />
                <p className='poemmContentShow'>{poem.content}</p>
                <p className='author'>{poem.author}</p>

                {poem.createdByUser === user.uid ?
                    <span>
                        <button onClick={handleEdit}>{isEditing ? 'Cancel' : 'Edit'}</button>
                        <button onClick={handleConfirm}>Delete</button>
                    </span> :
                    <span></span>
                    
                }
                <br />
                <div className="likes">
                    <div className='thumbs'>
                <span className="likes-counter">{`${likes}`}</span>
                <FaThumbsUp className={`like-button ${isClicked && 'liked'}`} onClick={likeButton} />
                    </div>
                    <div className='thumbs'>
                <span className="dislikes-counter">{`${dislikes}`}</span>
                <FaThumbsDown className={`dislike-button ${isClicked && 'disliked'}`} onClick={dislikeButton} />
                    </div>
                </div>

                <br />
                <form onSubmit={handleComment}>
                    <label>
                        <input
                            type='text'
                            name='comment'
                            value={editForm.comments}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input type='submit' value='Post Comment' />
                    </label>
                </form>
                    </div>
            </section>
        )
    };
    useEffect(() => {
        if (poem) {
            setEditForm(poem);
        }
    }, [poem]);

    return (
        <section>
            {poems ? loaded() : loading()}
            {isEditing &&
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                            type='text'
                            name='name'
                            value={editForm.name}
                            onChange={handleChange}

                        />
                    </label>
                    <label>
                        Author:
                        <input
                            type='text'
                            name='author'
                            value={editForm.author}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Content:
                        <textarea
                            type='text'
                            name='content'
                            value={editForm.content}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Submit:
                        <input
                            type='submit' value='Update' />
                    </label>
                </form>
            }
        </section>

    );
}

export default Show;
