import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListBox from './listbox';



// import { Redirect } from  'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// var status=undefined;
// var team=undefined;
// const logedin=async values=>{
  
//   var url="http://127.0.0.1:5001/name="+values[0]+"&pass="+values[1];
//   var res= await fetch(url);
//   var data=await res.json();

//   // console.log(data)
// status=data.status;
// team=data.Team;
// console.log({status})
//   return data;

// }
class Loginform extends Component{
  
  
  state={
    usename:'',
    pass:'',
    auth:false
   
  };
 async validate(){
   console.log(this.state)
   if (!this.state.usename){
     return;
   }
   if (!this.state.pass){
     return;
   }
   try{
     let res=await axios.post("https://todo-pair-api.herokuapp.com/login",this.state);
     let result=res['data']
     console.log(result)
     if (result['Team']==='False'){
       this.resetform();
     }
     else{
       ListBox.teamname=result['team'];
       console.log(result);
       this.auth=true;
       localStorage.setItem('logged',true)
       localStorage.setItem('team',result['Team'])
       window.location.reload(false);
       
     }
     
   }
   catch(e){
    this.resetform();
   }
     
  }
  resetform=()=>{
      document.getElementById("ux").value="";
      document.getElementById("px").value="";
  }
  clicker=()=>{
    // this.logval()
    var data=this.validate()
    console.log(data)
  }
  setUsername=event=>{
    this.setState({usename:event.target.value,pass:this.state.pass});
    // console.log(this.state)

  }
  setPassword=event=>{
    this.setState({usename:this.state.usename,pass:event.target.value});
    // console.log(this.state)
  }
  logval=() =>{
    // console.log(this.state.usename);
    // console.log(this.state.pass)
    
  }
  islogged=()=>{
    try{
      var c=localStorage.getItem('logged');
      return c;
    }
    catch(e){
      return false
    }
  }
  
render() {
  if (!this.islogged()){
  return (
  
<div className="boxer">
  
<center><div className="heading"><h1>TODO-TEAM!!</h1></div></center>
<br></br>
<center>
  <div className='box'>
    
    
    <input className="inp" onChange={this.setUsername} type='text' placeholder="Username!" name="username" id="ux" required/><br></br>
    <input className="inp" onChange={this.setPassword} type='password' placeholder="Password!" name='password' id="px" required/><br></br>
    <p><input className="keep" type="checkbox"  required/> keep me logged in!</p>
    
        <input className="btn btn-warning auth" onClick={()=>this.validate()} value="Authenticate"  type='submit'/>
    
  </div>
  </center>
  </div>
  
  );
}
else{
  return <ListBox/>;
}}
}

export default Loginform;
