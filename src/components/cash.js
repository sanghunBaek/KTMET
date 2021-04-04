import React from "react"
import { Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Box } from "@material-ui/core"

import { createMuiTheme } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  titleFont:{
      fontSize : "0.7rem",
      fontWeight : "1000",
      paddingBottom : 5,
  },
  smallFont: {
    fontSize : "0.4rem",
    
  },
  mainFont:{
    fontSize : "0.8rem",
  },
  middleFont:{
    fontSize : "1.0rem",
  }
}));


// function cleanCashData(cashValue){
  
// }



export default function Cash({cashValue}){
    const classes = useStyles()
  return (
    <>
      <Paper className={classes.paper} >
        <Typography  className = {classes.titleFont} >
          현금
        </Typography>
        <Grid container spacing={1}>
            <Grid item xs = {6} container direction="row"  alignItems="center">
                <Typography  className = {classes.mainFont} >달러</Typography>
            </Grid>

            <Grid item xs = {6}>               
                   <Typography align = "right" className = {classes.middleFont}>{cashValue.cashStatus.usa.balance}＄</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs = {6} container direction="row"  alignItems="center">
                <Typography  className = {classes.mainFont} >원화</Typography>
            </Grid>
            <Grid item xs = {6}>            
                   <Typography align = "right" className = {classes.middleFont}>{cashValue.cashStatus.korea.balance}￦</Typography>
            </Grid>
        </Grid>
      </Paper>
      <br />      
    </>
  )
}

