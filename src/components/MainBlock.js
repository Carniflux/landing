import {Button, Container, makeStyles, Typography} from "@material-ui/core";
import land from "../img/land.png";

const mainStyles = makeStyles((theme) => ({
    mainImg: {
        maxWidth: "100%",
        maxHeight: "100%",
        minWidth: "30%",
        minHeight: "30%",
        float:"left"
    },
    tagline: {
        color: "white",
        float: "right",
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(18),
        fontSize: 50
    },
    mainLayout: {
        backgroundColor: "#f44643",
        backgroundSize: "cover",
        maxWidth: "100%",
        height: "900px",
        maxHeight: "100%",

    },
    buyButton: {
        backgroundColor: "white",
        float: "bottom",
        fontSize: "x-large",
        marginLeft: theme.spacing(26.5),
        marginTop: theme.spacing(13)
    },
    cashBack: {
        float: "left",
        fontSize: 40,
        color: "white",
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(11)
    },
}))

export function MainBlock() {
    const classes = mainStyles()
    return (
            <Container maxWidth={"xl"} className={classes.mainLayout} >
                <img src={land} alt={"not found"} className={classes.mainImg}/>
                <Typography align={"center"} className={classes.tagline}>
                    Обогреватель,
                    <br/>
                    который платит
                </Typography>
                <Typography align={"center"} className={classes.cashBack}>кэшбэк за тепло</Typography>
                <Button size={"large"} className={classes.buyButton}>Купить</Button>
            </Container>
    )
}