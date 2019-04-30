import React from 'react';
import SignupForm from './Auth/SignupForm'
import LoginForm from './Auth/LoginForm'

 const styles={
  root:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    height: '100vh'
  }
} 
const App = () =>(
  <div>
      <SignupForm />
      <span> <h1>Ceva intre</h1> </span>
      <LoginForm />
  </div>
)

export default App;
