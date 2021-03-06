import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(() => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },

}));

export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar/>
            </AppBar>
        </React.Fragment>
    );
}
