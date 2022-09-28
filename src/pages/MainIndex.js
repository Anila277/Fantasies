import SearchBar from '../components/SearchBar';
import PoemData from '../components/Data.json';

function MainIndex() {
    return (
        <div>
            <h1>Hello MainIndex </h1>
            <SearchBar data={PoemData} />

        </div>
    )
}

export default MainIndex;