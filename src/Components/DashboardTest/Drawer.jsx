import React from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import SmsNavbar from "./SmsNavbar"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextsmsIcon from '@material-ui/icons/Textsms';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToApp from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import { withRouter} from "react-router-dom";
import { auth } from "../../app/auth/firebase";

const drawerWidth = 200

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        height: "100vh",
        
        [theme.breakpoints.down("sm")]: {
            width: "50px",
        },

    },

    list: {
        color: '#fff',
        marginTop: theme.spacing(8),
    },

    listButtons: {
        background: '#212b5a',
        marginTop: theme.spacing(1),
        '&:hover': {
            background: '#222638'
        },

        [theme.breakpoints.down("sm")]: {
            paddingLeft:"25%",
        },
    },

    drawerPaper: {
        width: drawerWidth,
        background: '#1f2a5c',  
        
        [theme.breakpoints.down("sm")]: {
            width: "50px",
        },
    },

    iconItem: {
        color: '#fff',

        [theme.breakpoints.down("xs")]: {
            fontSize:"18px",
        },
    },

    listText:{
        [theme.breakpoints.down("sm")]: {
            display:"none",
        },
    },

}));

const Drawer = (props) => {
    const { history } = props;
    const classes = useStyles();


    const CerrarSesion = () => {
        auth.signOut()
        history.push("/");

    }

    const itemsList = [
        {
            text: "Mensajes",
            icon: <TextsmsIcon className={classes.iconItem} />,
            onClick: () => history.push("/app/mensajes"),
        },
        {
            text: "Planes",
            icon: <PaymentIcon className={classes.iconItem} />,
            onClick: () => history.push("/app/plans"),
        },
        {
            text: "Informacion",
            icon: <InfoIcon className={classes.iconItem} />,
            onClick: () => history.push("/app/informacion"),
        },
        {
            text: "Salir",
            icon: <ExitToApp className={classes.iconItem} />,
            onClick: () => CerrarSesion(),
        },
    ];

    return (
        <>
            <MUIDrawer
                variant="permanent"
                className={classes.drawer}
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                        <SmsNavbar />
                <List className={classes.list}>
                    {itemsList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem
                                button key={text}
                                onClick={onClick}
                                className={classes.listButtons}
                            >
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} className={classes.listText}/>
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>
        </>
    );

};

export default withRouter(Drawer);
