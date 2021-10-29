import InputWithlabel from "./InputWithlabel";

const SearchForm = ({ onSearchInput, onSearchSubmit, searchTerm}) => (
    <form onSubmit={onSearchSubmit}>
      <InputWithlabel
      id="search"
      value={searchTerm}
      onInputChange={onSearchInput}
      type="text"
      >
        <strong>Search For Stories:</strong>
        </InputWithlabel>
        <button disabled={!searchTerm} type="submit" >
          Submit
        </button>
        </form>
);

export default SearchForm;