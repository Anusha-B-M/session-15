import React, { useState,useEffect,useReducer,useCallback} from "react";
import List from './components/List';
import Search from './components/Search';
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";
import InputWithlabel from "./components/InputWithlabel";
import styles from "./App.module.css";

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
    ""
  );

    const[stories,dispatchStories] = useReducer(storiesReducer, {
       data:[],
       isLoading: false,
       isError: false,
    });
 
    useEffect(() => {
      dispatchStories({ type: "STORIES_FETCH_INIT"});
      fetch(`${API_ENDPOINT}react`) 
      .then((res) => res.json())
       .then((result) => {
       dispatchStories({
          type: "STORIES_FETCH_SUCCESS", 
          payload:result.hits,
      });
    })
    .catch(() => {
      dispatchStories({ type: "STORIES_FETCH_FAILURE"});
    });
     }, []);
      
    
  
  const handleOnSearch = (e) => {
    setSearchTerm(e.target.value);
    
  };

  const onHandleDeleteItem = (item) => {
    dispatchStories({type: "REMOVE_STORY", payload: item });
  };

  const filteredStories = stories.data.filter((story) => {
     return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  });

  

  return (
    <div className={styles.container}>
      <InputWithlabel
      id="search"
      value={searchTerm}
      onInputChange={handleOnSearch}
      type="text"
      >
        <strong>Search For Stories:</strong>
        </InputWithlabel>
      <h4>Searching for:{searchTerm}</h4 >
      {stories.isLoading ?(
        <p>Loading...</p>
      ) :(
        <List stories={filteredStories} handleDeleteItem={onHandleDeleteItem}/>
      )}
      {stories.isError && <p>Something went wrong..</p>}
    </div>
  );
}

export default App;