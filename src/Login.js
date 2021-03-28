import React, { Component } from 'react';

class Login  extends Component {
    state = { 
        email:"",
        password:"",
        error:""

     }

     login = () =>{
         fetch("https://reqres.in/api/login",{
             method:"POST",
             headers:{
                 "content-type":"application/json"
             },
             body:JSON.stringify(this.state)
         }).then(res=>res.json()).then(res=>{
             if(res.error){
                this.setState({error:res.error})
             }else if(res.token){
                localStorage.token=res.token;
             }
         }).catch(err=>{
             alert(err.error);
         })

     }

     changeInput=(e)=>{
         let statepropname = e.target.name;
         this.setState({[statepropname]:e.target.value})
     }

    render() { 
        return ( 

            <div>

        <h1 style={{color:'red'}}>{this.state.error}</h1>
                Email<input type="email" value={this.state.email} onChange={this.changeInput} name="email"/> 
                <br/>
                Password <input type="password" value={this.state.password} onChange={this.changeInput}  name="password"/> 
                <br/>       
                <button onClick={this.login}>Login</button>
                <br/>   

      
            </div>    

                   
         );
     }
 }
 
export default Login;