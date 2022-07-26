import * as React from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../theme"
import {
  Container,
  Header,
  List,
  Lists,
  Logo,
  Wrapper,
} from "../style/components/layout"
import { GlobalStyle } from "../style/global"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ location, children }) => {
  const [isDark, setIsDark] = React.useState(true)
  const [isTwoLine, setIsTowLine] = React.useState(false)
  React.useEffect(() => {
    setIsDark(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
    setIsTowLine(
      window.matchMedia && window.matchMedia("(max-width: 768px)").matches
    )
  }, [])

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Helmet>
        <meta
          name="google-site-verification"
          content="ZqSw4HXAqA9Uuz9phK4lBzs_MS5iSDS-dZz4njm-ag8"
        />
      </Helmet>
      <GlobalStyle />
      <Container data-is-root-path={isRootPath}>
        <Header>
          <Wrapper isTwoLine={isTwoLine}>
            <Logo>wonbin5264.dev</Logo>
            {isTwoLine ? <br /> : null}
            <Lists isTwoLine={isTwoLine}>
              <List onClick={() => navigate("/")}>Posts</List>
              <List onClick={() => navigate("/tags")}>Tags</List>
            </Lists>
          </Wrapper>
        </Header>
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
