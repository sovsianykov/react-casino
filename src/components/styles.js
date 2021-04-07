import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    item: {
      width : 200 ,
        textAlign: "center",
        marginTop: '20px'
    },
    table: {
        width : '60%' ,
        textAlign: "center",
        position : "fixed",
        bottom: 100,
        left: '20%',
        zIndex : '-1',

    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));
