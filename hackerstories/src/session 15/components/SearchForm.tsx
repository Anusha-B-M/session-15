import React from "react";
import InputWithlabel from "./InputWithlabel";
import "./SearchForm.css";

type SearchFormProps = {
  searchTerm: string;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: any;
};

const SearchForm = ({ 
  onSearchInput,
   onSearchSubmit,
    searchTerm,
  }: SearchFormProps) => (
    <form className = "searchForm" onSubmit={onSearchSubmit}>
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