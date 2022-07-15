import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import {
  Code,
  LineNumber,
  MenuBar,
  FristCircle,
  SecondCircle,
  ThirdCircle,
} from "../style/components/codeBlock"

const cdBlock = props => {
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
    >
      {({ className, _, tokens, getLineProps, getTokenProps }) => (
        <Code className={className}>
          <MenuBar>
            <FristCircle />
            <SecondCircle />
            <ThirdCircle />
          </MenuBar>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <LineNumber>{i + 1}</LineNumber>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Code>
      )}
    </Highlight>
  )
}

export default {
  pre: props => cdBlock(props),
}
