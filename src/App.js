import './App.css';
import {
  Switch, Route, Redirect, BrowserRouter as Router,
} from 'react-router-dom'
import LoginPage from './pages/loginPage/loginPage';


function App() {
  return (
    <div className="App">
    
      <Router>
      <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
         
        </Switch>
        </Router>
                 

    </div>
  );
}

export default App;
