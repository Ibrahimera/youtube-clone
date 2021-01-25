import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from  './Sidebar'
import SearchPage from  './SearchPage'
import RecommendedVideo from  './RecommendedVideo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
 
  return (
    
    <div className="app">
      <Router>
        <Header/><div className="app__page">
        <Switch> 
          
          <Route path="/search/:searchTerm"><Sidebar/><SearchPage/></Route>
          <Route path="/"><Sidebar/> <RecommendedVideo/></Route>
      </Switch>
      </div>
      </Router>

      </div>
);
}

export default App;
