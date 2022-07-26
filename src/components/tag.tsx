import * as React from "react"
import { Hashtag, TagContainer, TagName } from "../style/components/tags"
import { navigate } from "gatsby"

interface IProps {
  tagName: string
  children?: JSX.Element
}

const Tag = ({ tagName, children }: IProps) => {
  if (tagName) {
    return (
      <TagContainer onClick={() => navigate(`/tag/${tagName}`)}>
        <Hashtag>#</Hashtag>
        <TagName>
          {tagName}
          {children ? ` (${children})` : null}
        </TagName>
      </TagContainer>
    )
  }
  return null
}

export default Tag
