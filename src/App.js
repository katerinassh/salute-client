import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import SignupPage from './pages/SignupPage/SignupPage';
import InvitationsPage from './pages/InvitationsPage/InvitationsPage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import InterestsPage from './pages/InterestsPage/InterestsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
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
          <Route exact path="/signup2" element={<SignupPage/>}/>
          <Route exact path="/invitations" element={<InvitationsPage/>}/>
          <Route exact path="/people" element={<PeoplePage/>}/>
          <Route exact path="/interests" element={<InterestsPage/>}/>
          <Route exact path="/profile" element={<ProfilePage/>}/>



        </Routes>
        
      </Router>
    </div>

  );
}

export default App;
