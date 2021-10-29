

const List = ({stories}) =>  {
    return stories.map(item => {
      return (
        <div key={item.id}>
          <span>
            <a href={item.url}><h4>{item.title}</h4></a>
          </span>
          <span>by <strong>{item.author}</strong></span>
          <span>| Video Hours: {item.hours_video}</span>
          <span>| Number of Lectures: {item.number_of_lectures}</span>
          <span>| Rating: {item.rating}</span>
          <br/><br/>
        </div>
      );
    }); 
  }
  
  export default List;