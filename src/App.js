import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import About from './About'; 
import Indexx from './Components/Navbar/index' 
import P from './P'
// eslint-disable-next-line no-unused-vars
//import Firestore from './Components/Firestore'


function App() {
  return (

    
      <Router>
           

        <Indexx />
        
        <main>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
         
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/p">
            <P />
          </Route>
        
         
         
       
        </Switch>
        </main>
     
    </Router>
      
    
  );
}

export default App;