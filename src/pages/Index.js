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
            image: '',
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
                <lable>
                    Poet:
                    <input
                        type='text'
                        value={newForm.name}
                        onChange={handleChange}
                        name='name'
                    />
                </lable>
                <label>
                    Image:
                    <input
                        type='text'
                        value={newForm.image}
                        onChange={handleChange}
                        name='image' />
                </label>
                <label>
                    Poem Title:
                    <input
                        type='text'
                        value={newForm.content}
                        onChange={handleChange}
                        name='content' />
                </label>
                <label>
                    submit
                    <input
                        type='submit' value='submit' />
                </label>
            </form>
            {props.poems ? loaded() : loading()}
        </section>
    );

}

export default Index;