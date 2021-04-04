import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//import Modal from '@material-ui/core/Modal';
//context api 
import {useContext} from 'react';
import {StockContext} from './main.js';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

//연습용으로 일단 가져왔음 
import data from './mockupdata.json';
import {Paper} from "@material-ui/core"
import {Grid} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(3),
    },
    date:{
        fontSize : "0.8rem",
        fontWeight : "1000",
        color : "black",
        paddingBottom : 5,
    },
    sellOrBuy: {
      fontSize : "0.8rem",
    },
    countAndPrice:{
      fontSize : "0.6rem",
    },
    totalPrice:{
      fontSize : "1.0rem",
      color : "black",
      fontWeight : "1000",
    },
    benifit:{
      fontSize : "0.6rem",
      color : "red"
    },
    
}));


//총 현황 
export default function StockHistory({clickopen}){ 
    const classes = useStyles()

  return (
    <>
      <Paper className={classes.paper} >
        <Grid container spacing={1} onClick = {()=> {clickopen("Sell","21.01.01",8,140)}}> 
          {/* 나중에는 아래쪽에 데이터를 넣을꺼니까 해당 데이터를 위쪽에 삽입해서 보내면 될듯  */}
            <Grid item xs = {6}
            alignItems = "center">
                <Grid container >
                    <Typography  className = {classes.date} > 20.10.01</Typography> <Typography  className = {classes.sellOrBuy} > Buy</Typography>
                </Grid>
                <Grid container >
                    <Typography  className = {classes.countAndPrice} > 16</Typography> <Typography  className = {classes.countAndPrice} > @ 133.82</Typography>
                </Grid>
            </Grid>

            <Grid item xs = {6} align="Right">
                <Typography  className = {classes.totalPrice} > 1,864$</Typography> 
                <Typography  className = {classes.benifit} > +55.68$(+3.08%)</Typography>
            </Grid>
        </Grid>
        <br/>
        <Grid container spacing={1} onClick = {clickopen}>
            <Grid item xs = {6}
            alignItems = "center">
                <Grid container >
                    <Typography  className = {classes.date} > 20.10.01</Typography> <Typography  className = {classes.sellOrBuy} > Buy</Typography>
                </Grid>
                <Grid container >
                    <Typography  className = {classes.countAndPrice} > 16</Typography> <Typography  className = {classes.countAndPrice} > @ 133.82</Typography>
                </Grid>
            </Grid>

            <Grid item xs = {6} align="Right">
                <Typography  className = {classes.totalPrice} > 1,864$</Typography> 
                <Typography  className = {classes.benifit} > +55.68$(+3.08%)</Typography>
            </Grid>
            
        </Grid>



      </Paper>
      <br />
      
    </>
  )
}