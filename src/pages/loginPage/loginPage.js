import LoginForm from "../../components/loginForm/loginForm";
import "./loginPage.css";
import bigLogo from "../../components/logos/bigLogo.png";
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