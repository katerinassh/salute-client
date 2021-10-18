import LoginForm from "../../components/loginForm/loginForm";
import Ellipse1 from './img/Ellipse1.png';
import Ellipse2 from './img/Ellipse2.png';
import Ellipse3 from './img/Ellipse3.png';
import "./loginPage.css"
import bigLogo from "../../components/logos/bigLogo.png"
function LoginPage() {
    return(
        <div className="loginPage">
            <div className="LoginForm"><LoginForm /></div>
            
            <img src={bigLogo} className="bigLogo" alt="bigLogo" />
            <div className="Ellipse1"></div>
            <div className="Ellipse2"></div>
            <div className="Ellipse3"></div>


            
        </div>
    )
}
export default LoginPage;