import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import UserPage from './pages/userpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route Component={HomePage} path='/' />
        <Route Component={UserPage} path='/users' />
      </Routes>
    </div>
  );
}

export default App;
