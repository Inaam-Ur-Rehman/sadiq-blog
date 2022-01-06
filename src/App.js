import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Description from './pages/Description';
import Nav from './components/Nav';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/blog/:id" element={<Description />} />
        <Route path="/blog/create" element={<Create />} />
        <Route path="/blog/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
