import styled, { css } from 'styled-components'
import { colors } from '@arrant/theme'

const contained = css`
  background: ${props => colors[props.color] ? colors[props.color] : colors.red};
  color: white;
  border: 1px solid ${props => colors[props.color] ? colors[props.color] : colors.red}
`

const outlined = css`
  background: white;
  color: ${props => colors[props.color] ? colors[props.color] : colors.red};
  border: 1px solid ${props => colors[props.color] ? colors[props.color] : colors.red}
`

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;
  ${props => props.variant === 'contained' ? contained : outlined};

  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`

export default StyledButton
