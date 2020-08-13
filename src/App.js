import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { useHistory } from "react-router-dom";

class App extends Component{
  state={
    usename:"",
    pass:""
  };
  validate(){
    const hist=useHistory();
    hist.push("/home")
  }
  setUsername=event=>{
    this.setState({usename:event.target.value,pass:this.state.pass});

  }
  setPassword=event=>{
    this.setState({usename:this.state.usename,pass:event.target.value});
  }
  logval=() =>{
    console.log(this.state.usename);
    console.log(this.state.pass)
    
  }
render() {
  return (
  
<div className="boxer">
<center><div className="heading"><h1>TODO-TEAM!!</h1></div></center>
<br></br>
<center>
  <div className='box'>
    
    
    <input className="inp" onChange={this.setUsername} type='text' placeholder="Username!" name="username" required/><br></br>
    <input className="inp" onChange={this.setPassword} type='password' placeholder="Password!" name='password' required/><br></br>
    <p><input className="keep" type="checkbox"  required/> keep me logged in!</p>
    
        <input className="btn btn-warning auth" onClick={this.validate} value="Authenticate"  type='submit'/>
    
  </div>
  </center>
  </div>
  
  );
}
}

export default App;
