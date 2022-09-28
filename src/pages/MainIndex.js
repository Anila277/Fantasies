import SearchBar from '../components/SearchBar';
import PoemData from '../components/Data.json';

function MainIndex() {
    return (
        <div>
            <h1>Hello MainIndex </h1>
            <SearchBar placeholder='Enter a poem' data={PoemData} />

        </div>
    )
}

export default MainIndex;