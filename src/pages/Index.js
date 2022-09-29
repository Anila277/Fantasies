import { Link } from 'react-router-dom';
import { useState } from 'react'


function Index(props) {

    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        content: '',
        author: '',
        createdByUser: '',
        tags: [],
        comments: [],
        likes: 0,
        dislikes: 0,
    })

    if (!props.user) return <h1>Please Login to see your data.</h1>;

    const loaded = () => {

        return props.poems.map(poem => (
            <div className='poem' key={poem._id}  >

                {/*  className='poemmContent'> */}
 

                <h2>
                    <Link id='PoemId' to={`/poems/${poem._id}`}>
                        {poem.name}
                    </Link>
                    <img className='limiter'
                        src={poem.image} alt={poem.name}>
                        </img>
                </h2>

                

                <p className='PPoem'> {poem.content}</p>
                <p className='author'>{poem.author}</p>
                    </div>
              

            // </div>

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
        props.createPoems(newForm);
        setNewForm({
            name: '',
            content: '',
            author: '',
            image: '',
            createdByUser: '',
            tags: [],
            comments: [],
            likes: 0,
            dislikes: 0,
        })
    };

    return (
        <section className='content'>
        <div className='icon2'></div>
            <form className='addPoem' onSubmit={handleSubmit}>
                <h2> Add Your Poetic Fantasy</h2>
                <label>
                    <input
                        type='text'
                        value={newForm.name}
                        onChange={handleChange}
                        name='name'
                        placeholder='Title'
                    />
                </label>
                <label>
                    <input
                        type='text'
                        value={newForm.author}
                        onChange={handleChange}
                        name='author'
                        placeholder='author'
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
                    Image:
                    <input 
                        type='url'
                        value={newForm.image}
                        onChange={handleChange}
                        name='image'
                    />
                </label>
                <label>

                    <input
                        hidden
                        type='text'
                        value={newForm.createdByUser}
                        onChange={handleChange}
                        name='createdByUser'
                        
                    />
                </label>
                <label>
                <label className='poemInput'>
                    <textarea
                        type='text'
                        value={newForm.content}
                        onChange={handleChange}
                        name='content' 
                        placeholder='content'
                        />
                </label>
                    <input
                        type='submit' value='Add Poem' />
                </label>
            </form>
            <div className='Poems'>
            {props.poems ? loaded() : loading()}
            </div>
        </section>
    );

}

export default Index;