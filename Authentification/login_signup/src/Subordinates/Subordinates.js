import React from 'react'
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'
import ListUser from './ListUser';

const Subordinates = () => (
  <Modal trigger={<Button>Show Subordinates</Button>} closeIcon>
    <Header icon='fork' content='Subordinates' />
    <Modal.Content>

      <ListUser />

    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Edit
      </Button>
    </Modal.Actions>
  </Modal>
)

export default Subordinates
