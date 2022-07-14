import styled from "styled-components"

export const Wrapper = styled.div`
  width: 97vw;
  display: flex;
  justify-content: center;
`

export const Container = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;
  margin-bottom: 50px;
  text-align: center;
`

export const Title = styled.h1`
  color: ${props => props.theme.text};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 4rem;
  margin-bottom: 25px;
  font-weight: 500;
`

export const CDate = styled.h3`
  color: ${props => props.theme.text};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.8rem;
`

export const Content = styled.section`
  font-size: 1.5rem;
  font-family: "Noto Sans KR", sans-serif;
  color: ${props => props.theme.text};
`
