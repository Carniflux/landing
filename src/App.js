import {Container, createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {ApplicationBar} from "./components/ApplicationBar"
import {MainBlock} from "./components/MainBlock"
import {AboutCompany} from "./components/AboutCompany"
import {MobileApp} from "./components/MobileApp"
import CenturyGothicWoff from "./fonts/CenturyGothic.woff"
import CenturyGothicTtf from "./fonts/CenturyGothic.ttf"
import CenturyGothicEot from "./fonts/CenturyGothic.eot"


const centuryGR = {
    fontFamily: 'Century Gothic',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: "normal",
    src: `
    local('Century Gothic'),
    local('CenturyGothic'),
    url(${CenturyGothicWoff}) format('woff'),
    url(${CenturyGothicTtf}) format('ttf'),
    url(${CenturyGothicEot}) format('eot')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Century Gothic',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [centuryGR],
            },
        },
    },
})

function App() {
  return (
      <MuiThemeProvider theme={theme}>
      <Container maxWidth={"xl"}>
          <CssBaseline/>
          <ApplicationBar />
          <MainBlock />
          <AboutCompany/>
          <MobileApp/>
      </Container>
      </MuiThemeProvider>
  );
}

export default App;
