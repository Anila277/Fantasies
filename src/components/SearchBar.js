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
                    placeholder={placeholder}
                    onChange={handleFilter}
                    value={wordEntered}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? <ImSearch /> : <AiFillCloseCircle onClick={clearInput} />} </div>
            </div>

            {filteredData.length != 0 && (
                <div className="result">
                    {filteredData.slice(0, 1).map((value, key) => {
                        return (
                            <>
                                <h2>{value.title} </h2>
                                <h4>By: {value.poet} </h4>
                                <p>{value.poem} </p>
                                <h5>Published: {value.published} </h5>
                            </>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar;