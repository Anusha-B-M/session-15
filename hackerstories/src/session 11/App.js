import { useState,useRef,useEffect} from "react";
import List from './session 11/components/List';
import Search from './session 10/components/Search';
import useSemiPersistenceState from "./session 11/hooks/useSemiPersistenceState";
import InputWithlabel from "./session 11/components/InputWithlabel";

const initStories = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    id: 2,
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    id: 3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
];

function App() {
  const [searchTerm,setSearchTerm] = useSemiPersistenceState(
    "customSearchTerm",
    ""
  );
    
    const[stories,setStories] = useState(initStories);
  
  const handleOnSearch = (e) => {
    setSearchTerm(e.target.value);
    
  };

  const onHandleDeleteItem = (item) => {
    const newList = stories.filter((i) => item.id !== i.id);
    setStories(newList);
  };



  const filteredStories = stories.filter((story) =>
     story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>List of Courses</h1>
      <InputWithlabel
      id="search"
      value={searchTerm}
      onInputChange={handleOnSearch}
      type="text"
      >
        <strong>Search For Stories:</strong>
        </InputWithlabel>
      <h4>Searching for:{searchTerm}</h4 >
      <List stories={filteredStories} handleDeleteItem={onHandleDeleteItem}/>
    </div>
  );
}

export default App
;