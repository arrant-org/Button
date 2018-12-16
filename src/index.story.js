import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button from '.'

const ButtonInfo = 'Hello Button'

const ButtonVariant = () => <ul>
  <li><Button>Hello</Button></li>
</ul>

storiesOf('Button', module)
  .add('Variant', withInfo(ButtonInfo)(ButtonVariant))