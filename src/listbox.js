import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
var teamname=localStorage.getItem('team'); 


class ListBox extends Component{
state={
    'values':[]
}
componentDidMount(){
    axios.post("https://todo-pair-api.herokuapp.com/getdata",{"teamname":teamname})
    .then((response) => {
        let { data }=response['data']
        this.setState({'values':data})
        console.log(this.state.values)
    });
    
    
}
rows=function(){
    this.state.values.unshift(['Event Name','Description','Time','Team Member'])
    var rows = this.state.values.map(function (item, i){
        var entry = item.map(function (element, j) {
            return ( 
                <td key={j}> {element} </td>
                );
        });
        return (
            <tr key={i}> {entry} </tr>
         );
    });
    return (
       <center><table className="table-hover table-striped table-bordered">
            <tbody>
                {rows}
            </tbody>
        </table></center> 
    );
}
render(){
    return (
        <div>
        <div className="greet">
    <center><h1>Welcome back to {teamname}</h1></center></div>
    <center><div className="todobox">
        <h2>Sceduled List</h2>
        <hr/>
        {this.rows()}
        <h6>"</h6>

    </div></center>

</div>
    );
}

}
export default ListBox;