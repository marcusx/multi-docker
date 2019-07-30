import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRoter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
      <Route>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to Fibonachisieren</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib}/>
            <Route exact path="/otherpage" component={OtherPage}/>
          </div>
        </div>
      </Route>
  );
}

export default App;
