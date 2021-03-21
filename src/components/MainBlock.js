import {Button, makeStyles, Typography} from "@material-ui/core";
import land from "../img/land.png";

const mainStyles = makeStyles((theme) => ({
    mainImg: {
        maxWidth: "71.57%",
        maxHeight: "71.57%",
    },
    tagline: {
        color: "white",
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
}))

export function MainBlock() {
    const classes = mainStyles()
    return (
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
    )
}