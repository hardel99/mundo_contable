import { Drawer, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Mensajes from "./Mensajes";
import Informacion from "./Informacion";
import Plans from "./Plans";
import NotFound from "../inexistentPage";

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#e9b6e9',
        width: '100%',
        border: 'solid #1eaa4d 3px',

    },

    drawer: {
        width: drawerWidth,
        height: '100vh',
        //border: 'solid #1eaa4d 3px',
        //marginLeft: '150px',

    },

    drawerPaper: {
        width: drawerWidth,
    },

    root: {
        display: 'flex',
        //border: 'solid #aa1e58 3px',
        //marginLeft: drawerWidth,

    }
})

export default function Layout({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            {/* app bar */}
            {/* side  drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div> <Typography variant="h5">Test drawer</Typography> </div>
            </Drawer>

            <div className={classes.page} >
                {children}
                <Switch>
                    <Route exact path="/app/mensajes" render={(props) => <Mensajes {...props} />} />
                    <Route exact path="/app/informacion" render={(props) => <Informacion {...props} />} />
                    <Route exact path="/app/plans" render={(props) => <Plans {...props} />} />

                </Switch>

            </div>
        </div>
    );
}