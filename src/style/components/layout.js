import styled from "styled-components"

export const Container = styled.div`
  width: 97vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  font-family: "Source Code Pro";
  font-size: 3rem;
  color: ${props => props.theme.text};
`

export const Lists = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const List = styled.span`
  font-family: "Source Code Pro";
  font-size: 1.8rem;
  color: ${props => props.theme.text};
  margin: 0 25px;
`
