import React from 'react';
import SignupForm from './Auth/SignupForm'
import LoginForm from './Auth/LoginForm'
import Page from './Settings/Page'
import ViewTask from './Ceva';
import Names from './Subordinates/Names';
import Subordinates from './Subordinates/Subordinates';

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
      {/* <SignupForm />
      <span> <h1>Ceva intre</h1> </span>
      <LoginForm /> 
      <Page /> 
      <ViewTask />
      <Names /> */}
      <Subordinates />
      
  </div>
)

export default App;
