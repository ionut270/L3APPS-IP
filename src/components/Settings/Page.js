import React from 'react';
import { Button, Checkbox, Form, Grid, ButtonGroup} from 'semantic-ui-react';
import { Header, Icon, Input, Message } from 'semantic-ui-react'
import Skills from './Skills'
import Users from './Users'
import Language from './Language'
import Email from './Email'
import './Page.css'
import { Link } from 'react-router-dom';

const Page = () => (
    <div>
      <h2>Manage your account settings</h2>

  <Grid centered columns={4} divided className='grid'>
    <Grid.Row>
      <Grid.Column>
        <Users />
      </Grid.Column>
      <Grid.Column>
        <Skills />
      </Grid.Column>
      <Grid.Column>
        <Language />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
      <Input fluid placeholder='Change password' />
      </Grid.Column>
      <Grid.Column>
      <Input fluid  type='password' placeholder='Confirm password' />
      </Grid.Column>
      <Grid.Column>
      <Email />
      </Grid.Column>
    </Grid.Row>
  </Grid>
    
    <Grid.Row>
        <Grid.Column>
       
    
  <Button.Group attached='bottom'>
  <Button animated="vertical">
      <Button.Content visible>Cancel</Button.Content>
      <Button.Content hidden>
        <Icon name='cancel' />
      </Button.Content>
    </Button>
    <Button.Or />
    <Button animated="vertical">
      <Button.Content visible>Confirm </Button.Content>
      <Button.Content hidden>
        <Icon name='check circle' />
      </Button.Content>
    </Button>
  </Button.Group>

    </Grid.Column>
        </Grid.Row>

  </div>
)


  

export default Page
