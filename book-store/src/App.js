import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Home from './components/Home';
import searchPage from './components/searchpage';
import Details from './components/details';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/search" component={searchPage}/>
                    <Route path="/details" component={Details}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
