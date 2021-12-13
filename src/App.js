import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import InterstPage from './pages/InterestPage/InterestPage';
import FontStyles from './static/font';

function App() {
  return (
  
    <div className="App">
      <FontStyles />
      <Router>
        <Routes> 
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/signup" element={<RegistrationPage/>}/>
        <Route exact path="/resetpassword" element={<ResetPasswordPage/>}/>
        <Route exact path="/interests" element={<InterstPage/>}/>


          </Routes>
        
        </Router>
    </div>

  );
}

export default App;