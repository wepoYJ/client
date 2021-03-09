import logo from './logo.svg';
import './App.css';
import LoginBox from './component/loginBox/LoginBox'
import ShowTips from './component/showTips/showTips'
import { useState, useEffect } from 'react';


function App() {
  const [isShowTips, setIsShowTips] = useState(false)
  const [tipText, setTipText] = useState('')

  useEffect(() => {
    setIsShowTips(false)

    setTipsTexFN = async (tipTexts) => {
      await setTipText(tipTexts)
      setIsShowTips(true)
      setTimeout(() => {
        alert(tipText, isShowTips)

      }, 1000);
    }

    return

  }, [])

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShowTips.Provider value={{ setTipsTexFN: setTipsTexFN }}>
          <LoginBox></LoginBox>
        </ShowTips.Provider>
      </header>

    </div>
  );
}

export default App;
