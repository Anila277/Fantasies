import { Link } from 'react-router-dom';
import {useState} from 'react'


function Index (props) {
    const [newForm, setNewForm] = useState({
        name:'',
        image:'',
        title:'',
    })

    const loaded = () => {

        return props.poems.map( poem => (
            <div className= 'poem' key={poem._id} >

                <h2>
                    <Link to={`/poems/${poem._id}`}>
                    {poem.name}
                    </Link>
                    </h2> 
                
                    <img className='limiter'
                     src={poem.image}></img>
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
        if(!newForm.image) delete newForm.image
        props.createPoems(newForm);
        setNewForm({
            name:'',
            image:'',
            title:''
        })
    };

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <lable>
                    Name
                    <input
                    type='text'
                    value={newForm.name}
                    onChange={handleChange}
                    name='name'
                    />
                </lable>
                <label>
                    image 
                    <input 
                    type='text' 
                    value={newForm.image}
                    onChange={handleChange}
                    name='image' />
                </label>
                <label>
                    title
                    <input 
                    type='text'
                    value={newForm.title}
                    onChange={handleChange}
                    name='title' />
                </label>
                <label>
                submit
                    <input 
                    type='submit' value='submit' />
                </label>
            </form>
        {props.poems ? loaded(): loading() }
    </section>
)

}
export default Index;