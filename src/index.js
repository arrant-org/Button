import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './index.style'

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
  
}

Button.defaultProps = {

}

export default Button