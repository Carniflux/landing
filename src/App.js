import {AppBar, Button, Container, makeStyles, Toolbar, Typography} from "@material-ui/core";
import logo from './img/logo.png'
import land from './img/land.png'
import model from './img/model.png'


const styles = makeStyles((theme) => ({
    root: {
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
    },
    mainImg: {
        maxWidth: "71.57%",
        maxHeight: "71.57%",
    },
    tagline: {
        color: "white",
        maxWidth: "100%",
        maxHeight: "100%",
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(18),
    },
    mainLayout: {
        backgroundColor: "#f44643",
        backgroundSize: "cover",
        float: "right",
        width: "100vw",
        minWidth: "191px",
        maxWidth: "537px",
        height: "100vh",
        maxHeight: "1000px"
    },
    buyButton: {
        backgroundColor: "white",
        float: "bottom",
        fontSize: "x-large",
        marginLeft: theme.spacing(29),
        marginTop: theme.spacing(13)
    },
    cashBack: {
        fontSize: "xx-large",
        color: "white",
        paddingTop: theme.spacing(10)
    },
    model: {
        float: "left",
    },
    headAboutCompany: {
        color: "red",
        fontSize: "xxx-large",
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(4)
    },
    aboutCompany: {
        paddingTop: theme.spacing(3),
        marginLeft: theme.spacing(5),
    },
    centerTypo: {
        float:"left",
        paddingTop: theme.spacing(3),
        maxWidth: "40%",
        maxHeight: "40%",
    },
    secondTypo: {
        paddingTop: theme.spacing(25),
        float: "left",
        maxWidth: "40%",
        maxHeight: "40%",
    },
    thirtyTypo: {
        float: "left",
        maxWidth: "40%",
        maxHeight: "40%",
        paddingTop: theme.spacing(20)
    }
}))

function App() {
    const classes = styles();
  return (
      <div className={classes.root}>
          <AppBar position={"relative"} className={classes.appBar}>
              <Container maxWidth={"xl"}>
                  <Toolbar>
                      <img src={logo} alt={"logo.png"} className={classes.logoImg}/>
                      <Typography variant={"h4"} className={classes.logoText} component={"h5"}>
                          RMC
                      </Typography>
                      <Button className={classes.companyButton} href="#about-company">О компании</Button>
                      <div className={classes.company} >
                          <Typography align={"right"} color={"textPrimary"}>
                              RMC Russian Mining Company
                              <br/>
                              10100, Москва, Колпачный переулок дом 6 строение 2
                          </Typography>
                      </div>
                  </Toolbar>
              </Container>
          </AppBar>
          <main>
              <div>
                  <img src={land} alt={"not found"} className={classes.mainImg}/>
                  <div className={classes.mainLayout} >
                      <Typography variant={"h2"} align={"center"} className={classes.tagline}>
                          Обогреватель,
                          <br/>
                          который платит
                      </Typography>
                      <Typography align={"center"} className={classes.cashBack}>кэшбэк за тепло</Typography>
                  <Button className={classes.buyButton}>Купить</Button>
                  </div>
              </div>
              <div>
                  <Typography id={"about-company"} align={"left"} className={classes.headAboutCompany}> О компании </Typography>
                  <div className={classes.aboutCompany}>
                      <Typography align={"center"} variant={"h5"} gutterBottom={true}>
                          RMC предлагает новый тип устройств - бытовые обогреватели, которые греют не за счет
                          сжигания электроэнергии, а за счет выполнения сложных вычислительных работ: искусственный
                          интеллект, нейросети, майнинг криптовалют. За время работы обогревателя
                          начисляется кэшбэк в CNX
                      </Typography>
                      <img alt={"not found"} src={model} className={classes.model}/>
                      <Typography align={"left"} variant={"h4"} className={classes.centerTypo} gutterBottom={true}>
                          Таким образом,
                          пользуясь обогревателем можно компенсировать расходы на электричество,
                          а при определённых условия - получить доход.
                      </Typography>
                      <Typography align={"left"} variant={"h4"} className={classes.secondTypo} gutterBottom={true}>
                          Чем больше обогреватель работает,
                          тем больше пользователь получает CNX
                      </Typography>
                      <Typography align={"left"} variant={"h4"} className={classes.thirtyTypo} gutterBottom={true}>
                          CNX - это эквивалент, универсальная стоимость тепловой энергии,
                          не зависящая от стоимости киловатт/час.
                      </Typography>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
