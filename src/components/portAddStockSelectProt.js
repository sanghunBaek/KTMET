import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


//import Modal from '@material-ui/core/Modal';
//context api 
import {useContext} from 'react';
import {StockContext} from './main.js';


//연습용으로 일단 가져왔음 
import data from './mockupdata.json';
import {Paper} from "@material-ui/core"
import {Grid} from "@material-ui/core"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize : "0.7rem",
      fontWeight : "1000",
      color : "black",
    },
    margin: {
        margin: theme.spacing(1),
        fontSize : "0.4rem",
    },
    extendedIcon: {
    marginRight: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(3),
        marginTop : "2%"
    },
}));



export default function AddStockpPort(){ 
    const classes = useStyles()

  return (
    <>
      <Paper className={classes.paper} >
        <Typography  className = {classes.title} >
          포트폴리오
        </Typography>
        <Grid container spacing={1}
        justify="center">
            <Grid item xs = {4} align="center">
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
               A포트폴리오
            </Button>
            </Grid>
            <Grid item xs = {4} align="center">
            <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                B포트폴리오 
            </Button>
            </Grid>
        </Grid>
      </Paper>
      <br />
      
    </>
  )
}
