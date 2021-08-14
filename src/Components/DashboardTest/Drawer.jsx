import React, { Component } from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter, Redirect, } from "react-router-dom";
import { useAuth } from "../../app/auth/AuthContext";
import { auth } from "../../app/auth/firebase";


const useStyles = makeStyles({
    drawer: {
        width: "190px",
    },
});

const Drawer = (props) => {
    const { history } = props;
    const classes = useStyles();
    const { logout } = useAuth();

    const CerrarSesion = () => {
        auth.signOut()
        history.push("/");

    }

    const itemsList = [
        {
            text: "Home",
            icon: <InboxIcon />,
            onClick: () => history.push("/app/home"),
        },
        {
            text: "About",
            icon: <MailIcon />,
            onClick: () => history.push("/app/about"),
        },
        {
            text: "Contact",
            icon: <MailIcon />,
            onClick: () => history.push("/app/contact"),
        },
        {
            text: "Salir",
            icon: <MailIcon />,
            onClick: () => CerrarSesion(),
        },
    ];
    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    );

};

export default withRouter(Drawer);
