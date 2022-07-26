import styled from "styled-components"

export const Code = styled.pre`
  padding: 20px;
  background-color: transparent;
  font-size: 1.8rem;
  line-height: 2.5rem;
  background-color: ${props => props.theme.code};
  margin: 25px 0;
  border-radius: 10px;
  font-family: "Source Code Pro";
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 8px;
  }
`

export const LineNumber = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  opacity: 0.3;
  color: ${props => props.theme.text};
  margin-right: 15px;
`

export const Blockquote = {
  Container: styled.blockquote`
    display: flex;
  `,
  Hr: styled.div`
    width: 5px;
    background-color: ${props => props.theme.backgroundOnUp};
    margin-right: 15px;
  `,
}

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 5.5rem;
  margin: 25px 0;
`

export const TitleLine = styled.hr`
  border: none;
  border: 1px solid ${props => props.theme.text};
  margin-bottom: 25px;
  opacity: 0.4;
`

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 4.5rem;
  margin: 25px 0;
`

export const H3 = styled.h3`
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin: 25px 0;
`

export const SubTitleLine = styled.hr`
  border: none;
  border: 1px solid ${props => props.theme.text};
  margin-bottom: 25px;
  opacity: 0.4;
  width: 40%;
  text-align: left;
  margin-left: 0;
`

export const Sup = styled.a`
  vertical-align: super;
  font-weight: 100;
  font-size: 1.5rem;
  font-family: "Source Code Pro";
`
