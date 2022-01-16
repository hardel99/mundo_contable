import React, {
    useEffect,
    useState
 } from "react";

 import {useLocation } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles
} from "@material-ui/core";

import TelegramIcon from '@material-ui/icons/Telegram';

const titles = {
    "/app/mensajes":"Mensajes",
    "/app/plans": "Planes",
    "/app/informacion": "Información",
 };

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent:"space-between",
    },

    navtitle: {
        [theme.breakpoints.down("sm")]: {
            fontSize:"14px",
        }
    },

}));

const SmsNavbar = () => {
    const classes = useStyles();
    const location = useLocation();
    const [title, setTitle] = useState(titles["/"]);

    useEffect(() => {
        setTitle(titles[location.pathname]);
     }, [location.pathname]);
     
     return(
        <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Typography 
            variant="h6" 
            className={classes.navtitle}
            >
                {title}
            </Typography>
            <div>
            <TelegramIcon/> 
            </div>
        </Toolbar>
    </AppBar>
     );
}

export default SmsNavbar;
