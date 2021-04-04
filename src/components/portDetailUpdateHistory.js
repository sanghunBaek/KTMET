import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


import { Container } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Box} from "@material-ui/core";
import { Grid} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  titleText: {
    fontSize : "1.1rem", 
    fontWeight : "650",
    color : "#8286a1"
    },
    topList:{
        // color: 'white', 
        backgroundColor: 'white',
       // height : "5.5vh",
        borderBottom: "2px solid #3f51b5",

        //verticalAlign :"middle",
        display :"flex",
       // margin : "auto",
       // alignItems :"center", // 이걸 통해서 위치가 중간으로 내려옴 
        //justifyContent :"center", // 이거는 전체 내용을 center로 옮겨준다 


    },
    barTitle:{
        paddingTop : "10px",
        paddingLeft : "6px"
    },
    bodyTitleText:{
        fontSize : "2.0rem", 
        fontWeight : "650",
        color : "#8286a1"
    },
    bodyMainText :{
        fontSize : "1.2rem", 
        fontWeight : "350",
        display : "inline"
    },
    bodyTitle :{
        paddingTop : "2%",
        paddingBottom : "2%"
    },
    containerDisplay:{
        "&.MuiGrid-item":{
            display : "inline-block" 
        },
        "&.MuiGrid-root":{
            display : "inline-block"
        },
        width : "50%"         
    },
    root :{
        height : "100%"
    },
    title:{
        height :"10%",         
        // backgroundColor: "lightblue",
        display : "inline-block",
        paddingTop : "3%",
        paddingBottom : "3%"
    },
    mainPart : {
        height : "30%",
        // backgroundColor: "lightgreen"
    },
    mainContentLeft : {
        width : "30%",
        // backgroundColor: "yellow",
        display : "inline-block",
        textAlign: "center"
    },
    mainContentRight : {
        width : "70%",
        // backgroundColor: "yellow",
        display : "inline-block",
        textAlign: "center"
    },
    mainItem : {
        // height : "100%",
        // width : "50%"
    },
    mainSpace :{
        paddingBottom : "5%"   
    }


    

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailUpdateHistory(props) {
  const classes = useStyles();
  const { handleClose, open ,data} = props;

  return (
    <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <Box className = {classes.topList} >
                    <Grid container spacing={1}>
                        <Grid container xs = {6} className = {classes.barTitle}>
                            <ArrowBackIosIcon className ={classes.icon} onClick={handleClose}/><Typography className = {classes.titleText}>거래 내역 수정</Typography> 
                        </Grid>

                        <Grid item xs = {6} align="Right">
                        <Button autoFocus color="inherit" onClick={handleClose}>
                                저장 
                            </Button>
                        </Grid>
                    </Grid>    
                </Box>  

                <Grid Container className = {classes.root} >
                    <Grid item className = {classes.title}>
                        <Typography  className = {classes.bodyTitleText} >BA-{data.date} @ {data.type}</Typography> 
                    </Grid>

                    <Grid item className = {classes.mainPart}>
                        <Grid Container className = {classes.mainSpace}>
                            <Grid className = {classes.mainContentLeft}>
                                <Typography  className = {classes.bodyMainText} >{data.type == "Buy" ? "매수가" : "매도가"}</Typography>
                            </Grid>
                            <Grid className = {classes.mainContentRight}>
                                <Input inputProps={{ 'aria-label': 'description' }} placeholder = {data.price}/>        
                            </Grid>
                        </Grid>

                        <Grid Container className = {classes.mainPart}>
                            <Grid className = {classes.mainContentLeft}>
                              <Typography  className = {classes.bodyMainText} >{data.type == "Buy" ? "매수 수량" : "매도 수량"}</Typography>
                            </Grid>
                            <Grid className = {classes.mainContentRight}>
                                <Input inputProps={{ 'aria-label': 'description' }} placeholder = {data.count}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
            </Dialog>
      
    </div>
  );
}

