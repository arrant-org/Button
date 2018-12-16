import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button from '.'

const VariantButtonInfo = 'The following variants are supported `contained`, `outlined`.'
const ColoredButtonInfo = 'The following colors are supported - https://github.com/arrant-org/theme/blob/master/lib/colors.js'
const FitButtonInfo = 'You can fit the button width to the container.'

const VariantButton = () => <div>
  <Button variant='contained'>Red</Button>
  <Button variant='outlined'>Red</Button>
</div>

const ColoredButton = () => <div>
  <Button color='red'>Red</Button>
  <Button color='google-blue'>Google Blue</Button>
  <Button color='green'>Green</Button>
  <Button color='microsoft-yellow'>Microsoft Yellow</Button>
</div>

const FitButton = () => <div>
  <Button fit>Fit</Button>
</div>

storiesOf('Button', module)
  .add('Variant', withInfo(VariantButtonInfo)(VariantButton))
  .add('Colored', withInfo(ColoredButtonInfo)(ColoredButton))
  .add('Fit', withInfo(FitButtonInfo)(FitButton))