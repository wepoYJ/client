
import './App.css';
import Toas from './component/toas';


import FirstPages from './pages/FirstPages/FirstPages'
import './publishCss.css'
setTimeout(() => {
  Toas.loading('loading',3000)
}, 3);

function App(props) {
  console.log('reflsh')


  return (
    <div className="App">
   
      <FirstPages></FirstPages>

    </div>
  );
}


export default App;
