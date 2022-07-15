import { navigate } from "gatsby"
import * as React from "react"
import { Container, Description, Tags, Title } from "../style/components/card"
import Tag from "./tag"

const Card = ({ title, to, description, tag }) => {
  return (
    <Container onClick={() => navigate(to)}>
      <Title>{title}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <Tags>
        {tag.slice(0, 2).map(tagName => (
          <Tag tagName={tagName} />
        ))}
      </Tags>
    </Container>
  )
}

export default Card
