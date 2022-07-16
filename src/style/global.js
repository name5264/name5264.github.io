import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${props => props.theme.background};
    }
    html {
        font-size: 10px;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => {
          const hex = props.theme.text.trim().replace("#", "")
          const rgb =
            3 === hex.length
              ? hex.match(/[a-f\d]/gi)
              : hex.match(/[a-f\d]{2}/gi).map(str => {
                  if (str.length === 1) str = str + str
                  return parseInt(str, 16)
                })
          return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`
        }};
        height: 30%;
        border-radius: 50px;
    }
`
