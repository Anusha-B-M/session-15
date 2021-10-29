import React, { useState,useEffect,useReducer,useCallback} from "react";
import List from './components/List';
import Search from './components/Search';
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";
import axios from "axios";
import SearchForm from './components/SearchForm';
import styled from "styled-components";


const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";


const storiesReducer = (state, action) => {
  
  switch(action.type) {
    case "STORIES_FETCH_INIT":
      return {...state, isLoading: true, isError: false};
      case "STORIES_FETCH_SUCCESS":
        return {...state, data: action.payload, isLoading: false, isError: false};
        case "STORIES_FETCH_FAILURE":
          return {...state, data: [], isLoading: false, isError: true};

        case "REMOVE_STORY":
          return {
              ...state,
              data: state.data.filter((i) => action.payload.id !== i.id),
            };
          default :
          throw new Error()
         }
  };



function App() {
  const [searchTerm,setSearchTerm] = useSemiPersistenceState(
    "customSearchTerm",
    "react"
  );

    const[stories,dispatchStories] = useReducer(storiesReducer, {
       data:[],
       isLoading: false,
       isError: false,
    });

    const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`)

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const StyledCard = styled.div`
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${isDarkTheme ? "rgb(51, 51, 51)" : "rgb(51, 51, 51)"};
border-radius: 8px;
box-shadow: 0 0 1px 10px rgb(188, 253, 255);
`;


    const handleFetchStories = useCallback(async() => {
      dispatchStories({ type: "STORIES_FETCH_INIT"});
      try {
      const response = await axios.get(url)  
       dispatchStories({
          type: "STORIES_FETCH_SUCCESS", 
          payload:response.data.hits,
      });
    
    } catch {
      dispatchStories({ type: "STORIES_FETCH_FAILURE"});
    }
     }, [url]);
    
      
    useEffect(() => {
      handleFetchStories();
    }, [handleFetchStories]);

    const handleSearchSubmit = (event) => {
      event.preventDefault();
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    };
  
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    
  };

  const onHandleDeleteItem = (item) => {
    dispatchStories({type: "REMOVE_STORY", payload: item });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme",isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);


  return (
    <StyledDiv>
      <StyledCard>
    <button onClick={() => setIsDarkTheme((prev) => !prev)}>
      Toggle Theme
      </button>
      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearchInput} onSearchSubmit={handleSearchSubmit}/>
      
      {stories.isLoading ?(
        <p>Loading...</p>
      ) :(
        <List stories={stories.data} handleDeleteItem={onHandleDeleteItem}/>
      )}
      {stories.isError && <p>Something went wrong..</p>}
      </StyledCard>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
padding: 2rem;
display: flex;
justify-content: center;
`;


export default App;