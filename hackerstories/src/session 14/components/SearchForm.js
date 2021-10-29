import InputWithlabel from "./InputWithlabel";
import "./SearchForm.css";

const SearchForm = ({ onSearchInput, onSearchSubmit, searchTerm}) => (
    <form onSubmit={onSearchSubmit}>
      <InputWithlabel
      id="search"
      value={searchTerm}
      onInputChange={onSearchInput}
      type="text"
      >
       
        </InputWithlabel>
        <button className="button" disabled={!searchTerm} type="submit" >
          Submit
        </button>
        </form>
);

export default SearchForm;