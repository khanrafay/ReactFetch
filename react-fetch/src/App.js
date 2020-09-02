import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [repo, setRepo] = useState([{}]);
  
  // useEffect(() => {
  //   fetch('https://api.github.com/users/khanrafay/repos')
  //   .then(response => response.json())
  //   .then(json => setRepo(json))    
  // },[repo])



useEffect(() => {
     async function fetchData(){
      let data = await fetch('https://api.github.com/users/khanrafay/repos');
      let json = await data.json();
      setRepo(json);
     }
     fetchData();
  })
  return (
    <div>
       <ul>
         {repo.map((data, index) => {
           return(
             <li key={index}>
               {data.name}
             </li>
           )
         })}
       </ul>
    </div>
  );
}

export default App;
