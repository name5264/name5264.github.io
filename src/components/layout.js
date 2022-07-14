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

const Layout = ({ location, children }) => {
  const [isDark, setIsDark] = React.useState(true)
  React.useEffect(() => {
    setIsDark(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  }, [])

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container data-is-root-path={isRootPath}>
        <Header>
          <Wrapper>
            <Logo>wonbin5264.dev</Logo>
            <Lists>
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
