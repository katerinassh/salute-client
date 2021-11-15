import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import FontStyles from './static/font';

function App() {
  return (
  
    <div className="App">
      <FontStyles />
      <Router>
        <Routes> 
        <Route exact path="/login" element={<LoginPage/>}/>
          </Routes>
        
        </Router>
    </div>

  );
}

export default App;