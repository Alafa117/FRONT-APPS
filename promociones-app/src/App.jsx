import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CodesMenu from './components/CodesMenu';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/codes" element={<CodesMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;