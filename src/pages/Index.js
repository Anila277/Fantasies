import { Link } from 'react-router-dom';
import { useState } from 'react'


function Index(props) {

    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        content: '',
        author: '',
        user: '',
        tags: [],
        comments: [],
        likes: 0,
        dislikes: 0,
    })

    if (!props.user) return <h1>Please Login to see your data.</h1>;

    const loaded = () => {

        return props.poems.map(poem => (
            <div className='poem' key={poem._id} >

                <h2>
                    <Link to={`/poems/${poem._id}`}>
                        {poem.name}
                    </Link>
                </h2>

                <img className='limiter'
                    src={poem.image} alt={poem.name}></img>
                <p>{poem.title}</p>
                <p>{poem.content}</p>

            </div>

        ));
    };

    const loading = () => {
        return <h1> Poems On The Way... </h1>
    };
    const handleChange = (e) => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value

        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newForm.image) delete newForm.image
        props.createPoems(newForm);
        setNewForm({
            name: '',
            content: '',
            author: '',
            user: '',
            tags: [],
            comments: [],
            likes: 0,
            dislikes: 0,
        })
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type='text'
                        value={newForm.name}
                        onChange={handleChange}
                        name='name'
                    />
                </label>
                <label>
                    Author:
                    <input
                        type='text'
                        value={newForm.author}
                        onChange={handleChange}
                        name='author'
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        type='text'
                        value={newForm.content}
                        onChange={handleChange}
                        name='content' />
                </label>
                <label>
                    <input
                        hidden
                        type='text'
                        value={props.user.displayName}
                        onChange={handleChange}
                        name='user'
                    />
                </label>
                <label>
                    <input
                        type='submit' value='Add Poem' />
                </label>
            </form>
            {props.poems ? loaded() : loading()}
        </section>
    );

}

export default Index;