import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListBox from './listbox';

import Loginform from './loginform';
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
var auth=false;
class App extends Component{

render() {
  console.log(auth)
  if (!auth){
  return <Loginform/>;}
  else{
    return <ListBox/>;
  }


  
}
}

export default App;
