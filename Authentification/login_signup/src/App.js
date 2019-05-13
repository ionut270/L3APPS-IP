import React from 'react';
import SignupForm from './Auth/SignupForm'
import LoginForm from './Auth/LoginForm'
import Page from './Settings/Page'

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
      <LoginForm /> */}
      <Page />
  </div>
)

export default App;
