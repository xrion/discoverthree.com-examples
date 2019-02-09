import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import Title from './js/Title';
import Scene from './js/Scene';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Scene className="container" />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));