import React from 'react';
import { Button, Checkbox, Form, Grid, Icon} from 'semantic-ui-react';
import './Auth.css'

 const styles = {
  root:{
    marginTop: '5%'
  }
} 

const SignupForm = () =>(
  <Grid centered style={styles.root}>
    <Grid.Column  width={4} className="my-form">
      <h2>Register</h2>
      <Form>
      <Form.Field required>
        <label className="my-label">Username</label>
        <input type="text" placeholder="Username here..."/>
      </Form.Field>
      <Form.Field required>
        <label className="my-label">Email</label>
        <input type="email" placeholder="Email here..."/>
      </Form.Field>
      <Form.Field required>
        <label className="my-label">Password</label>
        <input type="password" placeholder="Password here..."/>
      </Form.Field>
      <Form.Field required>
        <label className="my-label">Confirm Password</label>
        <input type="password" placeholder="Confirm Password here..."/>
      </Form.Field>
      <Form.Field required>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button fluid type="submit">Sign up</Button>
      </Form>
    </Grid.Column>
  </Grid>
)


export default SignupForm;