import {AppBar, Button, Container, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import logo from './img/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import {Image} from "@material-ui/icons";


const styles = makeStyles((theme) => ({
    root: {
        fontFamily: ""

    },
    appBar: {
        backgroundColor: "white",
    },
    logoText: {
        color: "black",
        flexGrow: 1,
    },
    logoImg:{
        maxWidth: "3%",
        maxHeight: "3%",
    },
    companyButton: {
        color: "red",
        flexGrow: 0.1,
    },
    company: {
        fontSize: "smaller",
        float: "right",
    }
}))
function App() {
    const classes = styles();
  return (
      <div className={classes.root}>
          <AppBar position={"fixed"} className={classes.appBar}>
              <Container maxWidth={"xl"} >
                  <Toolbar>
                      <img src={logo} alt={"logo.png"} className={classes.logoImg}/>
                      <Typography variant={"h5"} className={classes.logoText} >
                          RMC
                      </Typography>
                      <Button className={classes.companyButton}>О компании</Button>
                      <div className={classes.company}>
                          <Typography align={"right"} color={"textPrimary"}>
                              RMC Russian Mining Company
                              <br/>
                              10100, Москва, Колпачный переулок дом 6 строение 2
                          </Typography>
                      </div>
                  </Toolbar>
              </Container>
          </AppBar>
      </div>
  );
}

export default App;
