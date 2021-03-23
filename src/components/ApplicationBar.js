import {Button, Container, makeStyles, Toolbar, Typography, AppBar} from "@material-ui/core";
import logo from "../img/logo.png";

const barStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "white",
    },
    logoText: {
        color: "black",
        flexGrow: 1,
        fontFamily: "sans-serif Century",
        fontSize: "xx-large",
        [theme.breakpoints.down(400)]: {
            fontSize: 'medium',
        }
    },
    logoImg:{
        maxWidth: "3%",
        maxHeight: "3%",
        [theme.breakpoints.down(400)]: {
            maxWidth: "6%",
            maxHeight: "6%",
        }
    },
    companyButton: {
        color: "red",
        flexGrow: 0.1,
        fontSize: "large",
        fontWeight: "bold"
    },
    company: {
        fontSize: "medium",
        display: "block"
        },
}))

export function ApplicationBar() {
    const classes = barStyles();
    return (
        <AppBar position={"relative"} className={classes.appBar}>
        <Container maxWidth={"xl"}>
            <Toolbar>
                <img src={logo} alt={"logo.png"} className={classes.logoImg}/>
                <Typography variant={"h4"} className={classes.logoText}>
                    RMC
                </Typography>
                <Button className={classes.companyButton} href="#about-company">О компании</Button>
            </Toolbar>
        </Container>
    </AppBar>
    )
}