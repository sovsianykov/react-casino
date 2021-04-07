
import * as React from 'react';
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import Spins from "./Spins/Spins";
import {useStyles} from "./styles";


const Content = ({spinRow}) => {
    const classes =useStyles()
    return (
        <div className={classes.table}>
            <Grid container justify='center'spacing={2}>
                <Grid item xs={1} sm={1} md={1}  className={classes.item}>
                    <Paper>
                        <Typography variant='h4'>
                            id
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3} md={3}  className={classes.item}>
                    <Paper>
                        <Typography variant='h4'>
                            slot one
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3} md={3}  className={classes.item}>
                    <Paper>
                        <Typography variant='h4'>
                            slot two
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3} sm={3} md={3}  className={classes.item}>
                    <Paper>
                        <Typography variant='h4'>
                            slot three
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2} sm={2} md={2}  className={classes.item}>
                    <Paper>
                        <Typography variant='h4'>
                            time
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container justify='center' spacing={2}>
                {spinRow.map((row, i) => (
                    <Spins row={row} key={i} id={i} />
                ))}
            </Grid>
        </div>
    );
};
export default Content;