import background from './background_fire.mp4';

import './App.css';

function App() {
  return (
    <div className="App">
        <video src={background} autoPlay loop />
        <div className='App_text-container'>
          <div className='moon'>🌕</div>
          <h1>
          Good Night World...
        </h1>
        <p>
           This App is in Process.
        </p>
        </div>
    </div>
  );
}

export default App;
