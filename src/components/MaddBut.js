import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, Box } from "@material-ui/core";
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
    // width: "100%",
    width: "100%",
    position: "fixed",
    bottom: "10%",
    overflow: "hidden",
    // zIndex : 1
    
  },
  button:{
    width : "42%",
    fontSize : "0.2rem",
    margin: theme.spacing(1),
    // borderColor: "#4CAF50",
    backgroundColor : "#000000",
  }
}));


export default function OutlinedButtons({openSearch}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {/* <Grid item xs ={12} >
    <Button variant="contained" color="secondary" className={classes.button}>
            포트폴리오 종목 추가 
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
            목표 자산 구성
        </Button>
    </Grid> */}
    <Container maxWidth="sm">
    <Box textAlign='center' >
        <Button variant="contained" color="secondary" className={classes.button} onClick = {openSearch}>
            포트폴리오 종목 추가 
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
            목표 자산 구성
        </Button>
      </Box>
    </Container>
{/* 
      <Box textAlign='center' >
        <Button variant="contained" color="secondary" className={classes.button}>
            포트폴리오 종목 추가 
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
            목표 자산 구성
        </Button>
      </Box> */}
    </div>
  );
}