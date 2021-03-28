
// import './App2.css';
import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
     
}from "react-router-dom";


// import from Login './Login';
// import from Movies './Movies';
// import from Calc './Clac';

class App2 extends React.Component{
    constructor(){
    super();
    }
    render(){
        return(
        <Router>
            <div>
              <ul>
             <li>
               <link to="/">Home</link>
             </li> 
             <li>
               <link to="/Login">Login</link>
             </li> 
             <li>
               <link to="/Calc">Calc</link>
             </li> 
             </ul>
             
             <Switch>
                 <Route exact path="/">
                 <Home/>
                     </Route>
                     
                     <Route exact path="/Login">
                         <Login/>
                     </Route>
                     {/* <Route exact path="/">
                     <Calc/>   
                 </Route> */}
             </Switch>
                     </div>
                     </Router>
                  


//                      {/* <div class="navbar">
//   <div className="navbar-inner">
//     <a className="brand" href="#">Title</a>
//     <ul className="nav">
//    <li> <Link className="nav-link" exact to="/"activeClassName="" >Home</Link></li>
//    <li> <Link className="nav-link" exact to="Login"activeClassName="" >Login</Link></li>
//    <li> <Link className="nav-link" exact to="Calc"activeClassName="" >Calc</Link></li>
//    <li> <Link className="nav-link" exact to="Movies"activeClassName="" >Movies</Link></li>
    
      
//     </ul>
//   </div>
// </div> */}



        );
    }
}
class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
            </div>
        )
    }
}

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    Login = ()=>{
        console.log(this.state)
        fetch("https://reqres.in/api/login",{
            method:"Post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(this.state)
        })
        
    }
    changeInput=(e)=>{
        let name=e.target.name;
        this.setState({[name]:e.target.value})
    }
render(){
    return(
        <div>
        email<input type="email" value={this.state.email} name="email" onchangeInput={this.changeInput}/>
        password <input type="password" value={this.state.password} name="password" onchangeInput={this.changeInput}/>
        <input type="email"></input>
        <button onClick={this.Login}>Login</button>
        </div>
    );
}
}

class Movies extends React.Component{
    constructor(){
        super();
    this.state={
        data:[]
     }
    }
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2").then(res=>res.json())
        .then(res=>{
            this.setState({data:res.data});
        });
    }
    render()
    {
        return(
            <div>
                <h1>Movies ...</h1>
                {this.state.data.map((item)=>{
                    return <Movies key={item.id} item={item}/>
                })
                 }
            </div>
        )
    }
}
// class Movies extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <div>
//                 <img src={this.props.items.avatar}/>
//                 <span>{this.props.item.first_name}</span>

//             </div>
//         )
//     }
// }



export default App2;