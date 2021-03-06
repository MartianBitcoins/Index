import { createGlobalStyle } from 'styled-components'

const GeneralIndex = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
p{
  margin: 0px
}
.opacity:hover {
  opacity: 0.4;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text-center {
  text-align: center
}


.total-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.margin-top-30 {
  margin-top: 30px;
}

`
export default GeneralIndex