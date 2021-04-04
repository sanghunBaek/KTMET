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
import AddIcon from '@material-ui/icons/Add';

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
    boxMargin : {
      margin : "1%"
    }
}));



export default function AddStockCategory({clickopen}){ 
  const classes = useStyles()
  let categoryLists = ["미국주식","한국주식","채권"]
  const categoryCount = categoryLists.length // category list의 개수 파악 우선시 되어야함 
  return (
    <>
      <Paper className={classes.paper} >
        <Typography  className = {classes.title} >
          분류 
        </Typography>
        <Grid container spacing={1}
        justify="center">
          
          {/* {categoryLists.map((categoryList)=>(
                 <Grid item xs = {4} align="center">
                 <Button variant="contained" size="small" color="primary" className={classes.margin}>
                    {categoryList}
                 </Button>
                 </Grid>
                ))} */}

              <Box
                display="flex"
                flexWrap="wrap"
                alignContent="flex-start"
                p={1} // box 크기? 인듯 비율?
                m={1} // margin
                bgcolor="background.paper"
                css={{ maxWidth: 300, height: 200 }}
              >
                <Box p={1} bgcolor="grey.300" className = {classes.boxMargin}>
                  Item 1
                </Box>
                <Box p={1} bgcolor="grey.300">
                  Item 1
                </Box>
                <Box p={1} bgcolor="grey.300">
                  Item 1
                </Box>
                <Box p={1} bgcolor="grey.300">
                  Item 1
                </Box>
                <Box p={1} bgcolor="grey.300">
                  Item 1
                </Box>
                <Box p={1} bgcolor="grey.300">
                  Item 1
                </Box>
                <Box p={1} bgcolor="grey.300">
                  Item 1
                </Box>
              </Box>


            {/* <Grid item xs = {4} align="center">
            <Button variant="contained" size="small" color="primary" className={classes.margin}>
               미국주식
            </Button>
            </Grid>
            <Grid item xs = {4} align="center">
            <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                한국주식
            </Button>
            </Grid>
            <Grid item xs = {4} align="center">
            <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                채권
            </Button>
            </Grid>
            <box style = {{paddingTop : 10}}>
                <AddIcon  onClick = {clickopen}/>
            </box> */}
        </Grid>
      </Paper>
      <br />
      
    </>
  )
}
