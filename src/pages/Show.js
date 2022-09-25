import {usestate, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Show ({poems, deletePoems, updatePoems}) {
    const { id } = useParams();


const poem = poems ? poems.find(p => p._id === id): null;

const navigate = useNavigate();


const loading = () => {
    return <h1> Your Poem is On the Way...</h1>;
};


const loaded = () => {

const handleDelete = () => {
    deletePoems(poem._id)
    navigate('/');
};

return (
    <section>
        <h1>{poem.name}</h1>
        <img className='limiter'
        src={poem.image}
        alt={poem.name}
        />
        <p>{poem.title}</p>
        <button onClick={handleDelete}>Delete</button>
    </section>
)

};

// useEffect (() =>{
//     getData();
//   }, []);

  return (
    <section>
        {poems ? loaded() : loading()}
    </section>

  );
  }

  export default Show;