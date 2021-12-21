import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import InterestPage from './pages/InterestPage/InterestPage';
import InvitationsPage from './pages/InvitationsPage/InvitationsPage';
import FontStyles from './static/font';

function App() {
  return (
  
    <div className="App">
      <FontStyles/>
      <Router>
        <Routes> 
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/signup1" element={<RegistrationPage/>}/>
          <Route exact path="/resetpassword" element={<ResetPasswordPage/>}/>
          <Route exact path="/signup2" element={<InterestPage/>}/>
          <Route exact path="/invitations" element={<InvitationsPage/>}/>


        </Routes>
        
      </Router>
    </div>

  );
}

export default App;