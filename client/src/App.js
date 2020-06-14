import React from 'react';
import Nav from './Components/Nav';
import './styles/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBlog from './Components/AddBlog';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Switch>
          <Route path='/addBlog' exact component={AddBlog}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
