import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import {
  Code,
  LineNumber,
  Blockquote,
  H1,
  H2,
  TitleLine,
  Sup,
  SubTitleLine,
  H3,
} from "../style/components/customPostStyle";

const cdBlock = (props) => {
  const className = props.children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
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
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <Code className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <LineNumber>{`${i + 1}`.padStart(2, " ")}</LineNumber>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
              {"  "}
            </div>
          ))}
        </Code>
      )}
    </Highlight>
  );
};

const blockquote = ({ children }) => (
  <Blockquote.Container>
    <Blockquote.Hr /> {children}
  </Blockquote.Container>
);

const h1 = ({ children }) => (
  <>
    <H1>{children}</H1>
    <TitleLine />
  </>
);
const h2 = ({ children }) => (
  <>
    <H2>{children}</H2>
    <TitleLine />
  </>
);

const h3 = ({ children }) => (
  <>
    <H3>- {children}</H3>
    <SubTitleLine />
  </>
);

const a = ({ href, children }) => {
  return <Sup href={href}>[{children}]</Sup>;
};

const components = {
  pre: (props) => cdBlock(props),
  blockquote: (props) => blockquote(props),
  h1: (props) => h1(props),
  h2: (props) => h2(props),
  h3: (props) => h3(props),
  a: (props) => a(props),
};

export default components;
