import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
var teamname=localStorage.getItem('team'); 
var user=localStorage.getItem('uname')
class ListBox extends Component{
state={
    'values':[]
}
componentDidMount(){
    axios.post("https://todo-pair-api.herokuapp.com/getdata",{"teamname":teamname})
    .then((response) => {
        let { data }=response['data']
        this.setState({'values':data})
        // console.log(this.state.values)
    });
    
    
}
// rows=function(){
//     this.state.values.unshift(['Event Name','Description','Time','Team Member'])
//     var rows = this.state.values.map(function (item, i){
//         var entry = item.map(function (element, j) {
//             return ( 
//                 <td key={j}> {element} </td>
//                 );
//         });
//         return (
//             <tr key={i}> {entry} </tr>
//          );
//     });
//     return (
//        <center><table className="table-hover table-striped table-bordered">
//             <tbody>
//                 {rows}
//             </tbody>
//         </table></center> 
//     );
// }
boxi=function(){
var arr=[]
for (var i in this.state.values){
   arr.push ( <div className="sep-box">
       <div className='time'>
    UTC {this.state.values[i][2]}
    </div>
    <div className='Box-head'>
        {this.state.values[i][0]}
    </div>
    <div className='desc'>
    {this.state.values[i][1]}
    </div>
    
    <div className='desc'>
    {this.state.values[i][3]}
    </div>
    
    </div>);}
return arr;
}
async logout(){
    window.localStorage.clear();
    window.location.reload(false)
}
render(){
    return (
        <div>
           
        <div className="greet">
    <center className='name'>Hola {user}!</center>
    <center><h1>Welcome back to {teamname}</h1></center></div>
    <center><div className="todobox">
        <h2>ScheduleD LisT</h2>
        <hr/>
       
                 {this.boxi()}
            
        <h6 className="fetch">Fetching Data...</h6>

    </div></center>
        <footer><center>
        <button  class=" bttn btn btn-default btn-danger" onClick={()=>this.logout()}>
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </button></center>
        </footer>
</div>
    );
}

}
export default ListBox;