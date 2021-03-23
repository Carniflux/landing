import {Container, makeStyles, Typography} from "@material-ui/core";
import appScrin from "./../img/app.png"

const appMobileStyles = makeStyles((theme) => ({
    mobileContainer: {
        float: "left",
        marginTop: theme.spacing(10)
    },
    Typography: {
      fontFamily: "Century Gothic"
    },
    contTypo: {
        backgroundColor: "#f44643",
        backgroundSize: "cover",
        color: "white",
        height: "370px",
        maxHeight: "100%"
    },
    firstTypo: {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(20),
        textIndent: "-100px",
        float:"left",
        fontSize: "xxx-large",
    },
    secondTypo: {
        fontSize: "xx-large",
        paddingTop: theme.spacing(3),
        float: "right"
    },
    mobileAppImg: {
        position: "relative",
        float: "left",
        marginLeft: "-9px",
        marginTop: "-270px"
    }
}))

export function MobileApp() {
    const classes = appMobileStyles()
    return (
        <Container maxWidth={"xl"} className={classes.mobileContainer}>
            <Container maxWidth={"xl"} className={classes.contTypo}>
            <Typography className={classes.firstTypo}>
                Кэшбэк за тепло?<br/>
                Как это работает?
            </Typography>
            <Typography className={classes.secondTypo}>
                1. Пользователь покупает обогреватель<br/>
                2. Регистрирует устройство в мобильном приложении<br/>
                3. Обогревает помещение<br/>
                4. Получает CNX на свой счет за каждый ватт тепла<br/>
                5. CNX можно обменять на деньги и вывести на карту
            </Typography>
            </Container>
            <Container className={classes.mobileAppImg}>
                <img src={appScrin}/>
            </Container>
        </Container>
    )
}