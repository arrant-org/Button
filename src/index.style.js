import styled, { css } from 'styled-components'
import { colors, sizes } from '@arrant/theme'

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

const fit = css`
  width: 100%;
  justify-content: center;
`

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  max-width: 100%;
  justify-content: center;
  ${props => props.variant === 'contained' ? contained : outlined};
  ${props => props.fit ? fit : null}
  ${props => sizes[props.size]}
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`

export default StyledButton
