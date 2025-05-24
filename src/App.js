
import './App.scss';
// Components
import InProgress from './components/InProgress.js';
// Dependencies
import { Routes, Route, Link } from 'react-router-dom';
import PortapholioCard from './components/portapholio/PortapholioCard.js';




function App() {

  return (<>
    <div className="App">
        <Routes>
        <Route path="/" element={<InProgress />} />
        <Route path="/card" element={<PortapholioCard />} />
        <Route path="/contact" element={""} />
        <Route path="/menu" element={""} />
      </Routes>
    </div>
    
    </>
  );
}

export default App;
