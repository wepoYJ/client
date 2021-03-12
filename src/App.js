
import './App.css';
import toas from './component/toas';


import FirstPages from './pages/FirstPages/FirstPages'
import './publishCss.css'
setTimeout(() => {
  toas.loading('loading',3000)
}, 3);

function App(props) {
  console.log('reflsh')


  return (
    <div className="App">
      <toas></toas>
   
      <FirstPages></FirstPages>

    </div>
  );
}


export default App;
