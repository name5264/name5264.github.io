import styled from "styled-components"

export const TagContainer = styled.span`
  border: 1px solid ${props => props.theme.text};
  padding: 5px 15px;
  color: ${props => props.theme.text};
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  border-radius: 50px;
  line-height: 5rem;
  margin: 0 8px;
  white-space: nowrap;
`

export const Hashtag = styled.span`
  padding-right: 5px;
`

export const TagName = styled.span``
