import logo from './logo.svg';
import './App.css';
import LoginBox from './component/loginBox/LoginBox'
import ShowTips from './component/showTips/showTips'
import { useState, useEffect } from 'react';
function Bbb(props) {
  const [isShowTips, setIsShowTips] = useState(false)
  const [tipText, setTipText] = useState('')
  const [showTipsFN, setShowTipsFN] = useState(() => { })
  useEffect(() => {
    setShowTipsFN(() => {
      return async (tipTexts) => {
        console.error(tipText)
        await setTipText(tipTexts)
        setIsShowTips(true)
        console.log('===123', isShowTips, tipText)
      }
    }
    )
    return
  }, [props])

  return (
    <ShowTips.Provider value={{ setTipsTexFN: showTipsFN }}>
       {
        isShowTips && <p>{tipText}</p>
      }
      <LoginBox></LoginBox>
    </ShowTips.Provider>
  )

}

function App(props) {
  console.log('reflsh')


  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {Bbb()}
      </header>

    </div>
  );
}

export default App;
