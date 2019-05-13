import React from 'react';
import { Button, Checkbox, Form, Grid} from 'semantic-ui-react';
import './Auth.css'

 const styles = {
  root:{
    marginTop: '5%'
  }
} 

const SignupForm = () =>(
  <Grid centered style={styles.root}>
    <Grid.Column width={4} className="my-form">
      <h2>Log in</h2>
      <Form>
      <Form.Field required>
        <label className="my-label">Username</label>
        <input type="text" placeholder="Username here..."/>
      </Form.Field>
      <Form.Field required>
        <label className="my-label">Password</label>
        <input type="password" placeholder="Password here..."/>
      </Form.Field>
      <Form.Field>
        <Checkbox label="I forgot my password" />
      </Form.Field>
      <Button fluid type="submit">Sign in</Button>
      </Form>
    </Grid.Column>
  </Grid>
)


export default SignupForm;