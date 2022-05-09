import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../Firebase";
//import Login from '../Login'
//import Storage from './Storage'
const Firestore = () => {
  
  
  const getData = async () => {
    
    const names = await db.collection("names").get();
console.log(names);
   
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Firebase Firestore Example
      <div>
       
      </div>
     
     
    
    </div>
  );
};

export default Firestore;

// google oauth --> displayName email 
// onAuthChanged