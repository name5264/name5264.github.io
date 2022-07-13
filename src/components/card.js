import { navigate } from "gatsby"
import * as React from "react"
import { Container } from "../style/components/card"

const Card = ({ children, to }) => {
  return <Container onClick={() => navigate(to)}>{children}</Container>
}

export default Card
