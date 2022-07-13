import * as React from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../theme"
import { Container } from "../style/components/layout"
import { GlobalStyle } from "../style/global"

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
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
