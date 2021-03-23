import {Container, makeStyles, Typography} from "@material-ui/core";
import pic1 from "../img/pic1.png";
import model from "../img/model.png";
import pic2 from "../img/pic2.png";

const companyStyle = makeStyles((theme) => ({
    containerCompany: {
    },
    model: {
        height: "30%",
        width: "30%",
        float: "left",
        paddingTop: theme.spacing(6),
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
        textIndent: 40
    },
    centerTypo: {
        paddingTop: theme.spacing(8),
        float:"left",
        maxWidth: "55%",
        maxHeight: "40%",
        textIndent: 40
    },
    secondTypo: {
        float: "left",
        maxWidth: "40%",
        maxHeight: "40%",
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(8),
        flexGrow: 1
    },
    thirtyTypo: {
        float: "left",
        maxWidth: "40%",
        maxHeight: "40%",
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(8),

    },
    picture1: {
        float: "right",
        maxWidth: "19%",
        maxHeight: "19%",
        marginRight: theme.spacing(16)
    },
    picture2: {
        float: "right",
        maxWidth: "15%",
        maxHeight: "15%",
    }
}))

export function AboutCompany() {
    const classes = companyStyle()
    return (
        <Container maxWidth={"xl" } className={classes.containerCompany}>
            <Typography id={"about-company"} align={"left"} className={classes.headAboutCompany}> О компании </Typography>
            <Typography variant={"h4"} gutterBottom={true} className={classes.aboutCompany}>
                RMC предлагает новый тип устройств - бытовые обогреватели, которые греют не за счет
                сжигания электроэнергии, а за счет выполнения сложных вычислительных работ: искусственный
                интеллект, нейросети, майнинг криптовалют. За время работы обогревателя
                начисляется кэшбэк в CNX
            </Typography>
            <img alt={"not found"} src={pic1} className={classes.picture2}/>
            <img alt={"not found"} src={model} className={classes.model}/>
            <Typography align={"left"} variant={"h3"} className={classes.centerTypo} gutterBottom={true}>
                Таким образом,
                пользуясь обогревателем можно компенсировать расходы на электричество,
                а при определённых  условия - получить доход.
            </Typography>

            <Typography align={"left"} variant={"h4"} className={classes.secondTypo} gutterBottom={true}>
                Чем больше обогреватель работает,
                <br/>тем больше пользователь получает CNX
            </Typography>
            <img alt={"not found"} src={pic2} className={classes.picture1}/>
            <Typography align={"left"} variant={"h4"} className={classes.thirtyTypo} gutterBottom={true}>
                CNX - это эквивалент,<br/>универсальная стоимость<br/> тепловой энергии,
                не зависящая<br/> от стоимости киловатт/час.
            </Typography>
        </Container>
    )
}