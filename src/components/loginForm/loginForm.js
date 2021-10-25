import React from "react";
import './loginForm.css';


function LoginForm(){
    return (
            <div className="login">
            <form  method="post">
    
                <input type="text" placeholder="login" className="field1"/>
            
                <input type="password" placeholder="password" className="field2"/>
    
                <button type="submit" className="button login" >log in</button>
                <a href="#" id="forgot">forgot password?</a>
                
            </form>
            
            </div>
    );
}

export default LoginForm;
