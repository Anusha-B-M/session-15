import styles from "./List.module.css";

function List({stories})   {
    return (
      <div>
        <ol>
          {stories.map(function(item) {
      return (
        <li>
          <span className={styles.item}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span className={styles.item}>{item.author}</span>
          <span className={styles.item}>{item.hours_video}</span>
          <span className={styles.item}>{item.number_of_lectures}</span>
          <span className={styles.item}>{item.rating}</span>
          
        </li>
      );
    })}
    </ol>
    </div>
    )}
  
  export default List;