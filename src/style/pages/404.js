import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: ${props => props.theme.text};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 3rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 25px;
`

export const SubTitle = styled.h2`
  color: ${props => props.theme.text};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
  text-align: center;
  opacity: 0.5;
`
