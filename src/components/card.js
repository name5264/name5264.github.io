import { navigate } from "gatsby"
import * as React from "react"
import { Container, Description, Tags, Title } from "../style/components/card"

const Card = ({ title, to, description }) => {
  return (
    <Container onClick={() => navigate(to)}>
      <Title>{title}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <Tags></Tags>
    </Container>
  )
}

export default Card
