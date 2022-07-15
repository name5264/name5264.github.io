import styled from "styled-components"

export const MenuBar = styled.header`
  width: 100%;
  height: 25px;
  margin-bottom: 15px;
  display: flex;
`

const circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 25px;
  margin-right: 10px;
`

export const FristCircle = styled(circle)`
  background-color: ${props => props.theme.menu[0]};
`

export const SecondCircle = styled(circle)`
  background-color: ${props => props.theme.menu[1]};
`

export const ThirdCircle = styled(circle)`
  background-color: ${props => props.theme.menu[2]};
`

export const Code = styled.pre`
  padding: 20px;
  background-color: transparent;
  line-height: 2.5rem;
  background-color: ${props => props.theme.code};
  margin: 25px 0;
  border-radius: 10px;
`

export const LineNumber = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  opacity: 0.3;
  color: ${props => props.theme.text};
  margin-right: 15px;
`
