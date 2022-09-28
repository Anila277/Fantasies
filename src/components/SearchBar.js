import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';


function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


    const handleFilter = (e) => {
        const searchWord = e.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return (
                value.title.toLowerCase().includes(searchWord.toLowerCase())
            )
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text"
                    placeholder="placeholder"
                    onChange={handleFilter}
                    value={wordEntered}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? <ImSearch /> : <AiFillCloseCircle onClick={clearInput} />} </div>
            </div>

            {filteredData.length != 0 && (
                <div className="result">
                    {filteredData.slice(0, 5).map((value, key) => {
                        return <a href={value.title}>
                            <p>{value.title} </p>
                        </a>
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar;