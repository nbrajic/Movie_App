import React, { useState, useEffect } from "react";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import { getUsers, insert, isLoggedIn } from '../LocalStorage';

const Login = ({setDisplay,loggedIn, setLoggedIn}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setDisplay(false)
  },[setDisplay])

  const isValid = () => username.length > 0 && password.length > 0;
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if ((getUsers().some(user => user.username !== username && user.password !== password)) !== undefined)
    {insert({username, password})}
    console.log(isLoggedIn())
    console.log(getUsers())
    setLoggedIn(true)
  };

  return (
    <div 
    className="Login" 
    style={{display: "block", 
      marginLeft: "auto", 
      marginRight: "auto", 
      marginTop:"10%", 
      width: "40%"}}>
      <form onSubmit={handleSubmit}>
        <FormGroup 
          controlId="username" 
          bssize="large">
          <FormLabel style={{color:"white"}}>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup 
          controlId="password" 
          bssize="large">
          <FormLabel style={{color:"white"}}>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button
          bssize="large"
          disabled={!isValid()}
          type="submit"
          style={{display:"block", marginLeft: "auto", marginRight: "auto"}}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;