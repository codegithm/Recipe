import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from './components/signup.component';
import Login from './components/login.component';
import Recipes from './components/recipe.component';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/' exact component={Recipes} />
      </div>
    </Router>
  
  );
}

export default App;
