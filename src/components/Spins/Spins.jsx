import React from "react";
import { useStyles } from "../styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const Spins = ({ row, id }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={1} sm={1} md={1} className={classes.item}>
        <Paper>
          <Typography variant="h6">{id}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3} sm={3} md={3} className={classes.item}>
        <Paper>
          <Typography variant="h6">{row.slot1}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3} sm={3} md={3} className={classes.item}>
        <Paper>
          <Typography variant="h6">{row.slot2}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3} sm={3} md={3} className={classes.item}>
        <Paper>
          <Typography variant="h6">{row.slot3}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={2} sm={2} md={2} className={classes.item}>
        <Paper>
          <Typography variant="h6">{row.time}</Typography>
        </Paper>
      </Grid>
    </>
  );
};
export default Spins;
