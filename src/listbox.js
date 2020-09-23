import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
var teamname=localStorage.getItem('team'); 
var user=localStorage.getItem('uname')

var dayobj={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}
class ListBox extends Component{
state={
    'values':[]
}
componentDidMount(){
    axios.post("http://127.0.0.1:5001/getdata",{"teamname":teamname})
    .then((response) => {
        let { data }=response['data']
        console.log(response)
        this.setState({'values':data})
        console.log(this.state.values)
    });
    console.log(this.state.values)
    
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
    UTC {this.state.values[i][3]}
    </div>
    <div className='Box-head'>
        {this.state.values[i][1]}
    </div>
    <div className='desc'>
    {this.state.values[i][2]}
    </div>
    
    <div className='desc'>
    {this.state.values[i][4]}
    </div>
    
    </div>);}
return arr;
}
async logout(){
    window.localStorage.clear();
    window.location.reload(false)
    
}
addList(){
    var title=document.getElementById('title').value;
    var desc=document.getElementById('desc').value;
    if (title==='' || desc===''){
        document.getElementById('title').value='';
        document.getElementById('desc').value='';
        return 

    }
    
        axios.post("http://127.0.0.1:5001/putdata",{"title":title,"desc":desc,'team':teamname,'user':user})
        .then((response) => {
            if (response.status){
            
            window.location.reload(false);
           
        }
            // console.log(this.state.values)
        });

    
    
}
render(){
    return (
        <div>
           
        <div className="greet">
    <center className='name'>Hola {user}!</center>
    <center><h1>Welcome back to {teamname}</h1></center></div>
    <center className="greet name">Hope it's an Awesome {dayobj[new Date().getDay()]}!</center>
    <center><div className="todobox">
        <h2>Schedule Work</h2>
        
        <div className="inputlist" >
            <input className="titlebox" placeholder="Title of the Event!" id="title" required></input>
            <button className="add btn btn-danger" type="submit" value='+'  onClick={()=>this.addList()}>Add</button>

            <br></br>
            <input className="descbox" placeholder="Description!" id="desc" required></input>
            <br></br>
            
        </div>
        
        <hr/>
        <div className="ele">Elements</div>
       
                 {this.boxi()}
            
        <h6 className="fetch">Fetching Data...</h6>

    </div></center>
        <footer><center>
        <button  className=" bttn btn btn-default btn-danger" onClick={()=>this.logout()}>
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </button></center>
        </footer>
</div>
    );
}

}
export default ListBox;