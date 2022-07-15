import * as React from "react"
import { Hashtag, TagContainer, TagName } from "../style/components/tags"
import { navigate } from "gatsby"

const Tag = ({ tagName }) => {
  if (tagName) {
    return (
      <TagContainer onClick={() => navigate(`/tag/${tagName}`)}>
        <Hashtag>#</Hashtag>
        <TagName>{tagName}</TagName>
      </TagContainer>
    )
  }
  return null
}

export default Tag
