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
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

//연습용으로 일단 가져왔음 
import data from './mockupdata.json';
import {Paper} from "@material-ui/core"
import {Grid} from "@material-ui/core"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(3),
    },
    titleFont:{
        fontSize : "0.7rem",
        fontWeight : "1000",
        color : "black",
        paddingBottom : 5,
    },
    smallFont: {
      fontSize : "0.4rem",
    },
    mainFont:{
      fontSize : "0.7rem",
    },
    plusFont:{
      fontSize : "0.7rem",
      color : "#3498db"
    },
    minusFont:{
      fontSize : "0.7rem",
      color : "#e74c3c"
    },
    
}));

function checkSign(x){
    let a = true;
    // console.log(typeof x);
    if(x[0] == '-'){
        a = false;
    }
    return a 
}



//총 현황 
export default function StockSummary({stock}){ 
    const classes = useStyles()

  return (
    <>
      <Paper className={classes.paper} >
        <Typography  className = {classes.titleFont} >
          총 현황
        </Typography>

        <Grid container spacing={1}
        direction="row">
          <Grid item xs = {11}>
            <Grid container spacing ={1}>  
              <Grid item xs = {6}>
                <Grid container spacing ={1}>
                    <Grid item xs = {6}>
                        <Typography  className = {classes.titleFont} > 평균 단가</Typography>
                    </Grid>
                    <Grid item xs = {6}>
                        <Typography  className = {classes.mainFont} >￦{stock.avgPrice}</Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs = {6}>
                    <Grid container spacing ={1}>
                        <Grid item xs = {6}>
                        <Typography  className = {classes.titleFont} > 수익률</Typography>
                        </Grid>
                        <Grid item xs = {6}>
                          <Typography className = {(checkSign(stock.profitRate)?classes.plusFont:classes.minusFont)}>{stock.profitRate}%</Typography>
                        </Grid>
                    </Grid>
                </Grid>
              </Grid>

              <Grid container spacing ={1}>  
                <Grid item xs = {6}>
                  <Grid container spacing ={1}>
                      <Grid item xs = {6}>
                          <Typography  className = {classes.titleFont} > 현재가</Typography>
                      </Grid>
                      <Grid item xs = {6}>
                          <Typography  className = {classes.mainFont} >￦{stock.avgPrice}</Typography>
                      </Grid>
                  </Grid>
                  </Grid>
                  <Grid item xs = {6}>
                      <Grid container spacing ={1}>
                          <Grid item xs = {6}>
                          <Typography  className = {classes.titleFont} > 수익금</Typography>
                          </Grid>
                          <Grid item xs = {6}>
                            <Typography className = {(checkSign(stock.profitRate)?classes.plusFont:classes.minusFont)}>{stock.profitRate}%</Typography>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>

              <Grid container spacing ={1}>  
                <Grid item xs = {6}>
                  <Grid container spacing ={1}>
                      <Grid item xs = {6}>
                          <Typography  className = {classes.titleFont} > 수량</Typography>
                      </Grid>
                      <Grid item xs = {6}>
                          <Typography  className = {classes.mainFont} >16</Typography>
                      </Grid>
                  </Grid>
                  </Grid>
              </Grid>

          </Grid>


            
            <Grid item xs = {1}>
                <NavigateNextIcon fontSize="large" style = {{paddingLeft : 15, paddingBottom: 13}}/>
            </Grid>
        </Grid>
      </Paper>
      <br />
      
    </>
  )
}