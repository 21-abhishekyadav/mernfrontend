
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // eslint-disable-next-line
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
<NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
      </Router>
      </NoteState>

    </div>
  );
}

export default App;
