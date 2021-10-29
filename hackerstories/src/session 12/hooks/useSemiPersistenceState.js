import React, { useState,useEffect} from "react";

const useSemiPersistenceState = (key, initvalue) => {
const [semipersistenceKey,setSemiPersistencevalue] = useState(localStorage.getItem(key) || initvalue
);
useEffect(() => {
    localStorage.setItem(key,semipersistenceKey);
  }, [semipersistenceKey]);

  return[semipersistenceKey,setSemiPersistencevalue];
};
export default useSemiPersistenceState;
