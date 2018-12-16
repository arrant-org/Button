import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './index.style'
import { colors } from '@arrant/theme'

class Button extends React.Component {
  render () {
    return (
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    )
  }
}

Button.PropTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf['contained', 'outlined']
}

Button.defaultProps = {
  color: colors.red,
  variant: 'contained'
}

export default Button