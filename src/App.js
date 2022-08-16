import logo from './logo.svg';
import './CSS/App.css';
import Header from './Components/Header.js';

function App() {
  const element = <h1>Hello World</h1>;
  const title = "Helo";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Header homeTitle = "Hello" productTitle = "Goods" downloadTitle = "Installs" contactTitle = "Communication"/>
      </header>
    </div>
  );
}

export default App;
