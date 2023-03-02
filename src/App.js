import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Single from './views/Single';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single/:name' element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
