import React from 'react';

class Login extends React.Component{

    myInput = React.createRef();

    goToTable = (event) => {
        //1.stop the form from submmiting
        event.preventDefault();
        //2. get the text from that input
        const loginName =(this.myInput.current.value);
        //3. Change the page to /login/functional
        this.props.history.push(`/login/${loginName}`);
    };

    
    render(){
     return(
    <form className="login-selector" onSubmit={this.goToTable}>
        <h2>Please Enter Manager status</h2>
        <input type="text" required placeholder="First Name" defaultValue="John"/>
        <input type="text" required placeholder="Last Name" defaultValue="Snow"/>

        <select name="status" ref={this.myInput}>
            <option value="Functional">Functional </option>
            <option value="Program">Program</option>
            <option value ="Csv">Csv</option>
        /</select>
        
        <button type="submit"> Login >> </button>
        <div class="login-help">
            <a href="Register">Register</a> • <a href="Forgot">Forgot Password</a>
        </div>
    </form>
        )
    }
}

export default Login;