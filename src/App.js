import logo from './logo.svg';
import './App.css';
import LoginBox from './component/loginBox/LoginBox'
import { ModalProvider } from 'react-use-modal'
function App() {
  return (
    <ModalProvider>
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
            Learn React ha ha
        </a>
        <LoginBox></LoginBox>
        </header>

      </div>
    </ModalProvider>
  );
}

export default App;
