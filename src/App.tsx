import React from 'react';

import './App.css';
import Counter from './components/Counter'

// Containers
import AllDecksContainer from './containers/AllDecksContainer';
import PlayingContainer from './containers/PlayingContainer';
import StatsContainer from './containers/StatsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <AllDecksContainer/>
        <PlayingContainer />
        <StatsContainer />
        {/* <Counter /> */}
      </main>
      <footer id="footer"> This App Was Built By <a href="https://github.com/BennEntterprise">Kyle</a></footer>
    </div>
  );
}

export default App;
