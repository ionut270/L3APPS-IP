import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './Page.css'

const options = [
  { key: 'Christian', text: 'christian@gmail.com', value: 'Matt' },
  { key: 'Matt', text: 'matt@gmail.com', value: 'Matt' },
]

const Email = () => (
  <Dropdown className="case" placeholder='Mail' fluid multiple selection options={options} />
)

export default Email
