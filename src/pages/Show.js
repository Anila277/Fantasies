import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
function Show({ poems, deletePoems, updatePoems }) {
    const { id } = useParams();


    const poem = poems ? poems.find(p => p._id === id) : null;

    const navigate = useNavigate();

    const [editForm, setEditForm] = useState({
        name: '',
        image: '',
        title: ''
    });

    const [isEditing, setIsEditing] = useState(false);

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


    const loading = () => {
        return <h1> Your Poem is On the Way...</h1>;
    };


    const loaded = () => {

        const handleDelete = () => {
            deletePoems(poem._id)
            navigate('/');
        };

        const handleEdit = () => {
            setIsEditing(prevState => !prevState)
        };

        return (
            <section>
                <h1>{poem.name}</h1>
                <img className='limiter'
                    src={poem.image}
                    alt={poem.name}
                />
                <p>{poem.title}</p>
                <button onClick={handleEdit}>{isEditing ? 'Cancel Edit' : 'Edit'}</button>
                <button onClick={handleDelete}>Delete</button>
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
                    <lable>
                        Name:
                        <input
                            type='text'
                            name='name'
                            value={editForm.name}
                            onChange={handleChange}

                        />
                    </lable>
                    <lable>
                        Image:
                        <input
                            type='text'
                            name='image'
                            value={editForm.image}
                            onChange={handleChange}
                        />
                    </lable>
                    <lable>
                        Title:
                        <input
                            type='text'
                            name='title'
                            value={editForm.title}
                            onChange={handleChange}
                        />
                    </lable>
                    <lable>
                        Submit:
                        <input
                            type='submit' value='Update' />
                    </lable>
                </form>

            }
        </section>

    );
}

export default Show;
