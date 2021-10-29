import { useState,useEffect, useRef} from "react";

const useSemiPersistenceState = (key, initvalue) => {
  const firstRender = useRef(false);
const [value,setValue] = useState(localStorage.getItem(key) || initvalue
);
useEffect(() => {
  if(!firstRender.current) {
    firstRender.current = true;
    return;
  } else {
      console.log("Localstorage useEffect running");
    localStorage.setItem(key,value);
  }
  }, [key, value]);

  return[value,setValue];
};
export default useSemiPersistenceState;
