import { useState} from "react";

const StateForSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" onchange={handleChange} />
            <p>
                Searching for <strong>{searchTerm}</strong>
            </p>
        </div>
    );
};
 export default StateForSearch;