import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'shashank';
  const isLoggedin = true;
  return (
    <React.Fragment>
      <h1>dfjdlfd</h1>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            Hello world,My Name is {isLoggedin ? name : 'someUser'}{' '}
            {new Date().toDateString()}
            {!isLoggedin && <p>hello world</p>}
            {isLoggedin && <p>hello {name}</p>}
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
