import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  margin-top: 50px;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => {
    const cardNumber =
      Math.floor((props.width * 9) / 10 / 250) === 0
        ? 1
        : Math.floor((props.width * 9) / 10 / 250)
    let returnStr = "250px"
    for (let i = 1; i < cardNumber; i++) {
      returnStr += " 250px"
    }
    return returnStr
  }};
  grid-gap: 25px;
`
