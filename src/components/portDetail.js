import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SearchTab from './SearchTab.js';
// 기본 화면 틀 구성 
import {Box } from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



// main에서의 데이터 가져오기 가능 
import {useContext} from 'react';
import {StockContext} from './main.js';

//연습용으로 일단 가져왔음 
import data from './mockupdata.json';

import PortDetailTab from './portDetailTab.js';
import LabelBottomNavigation from './navigation.js';
import ControlIcon from './portDetailControlIcon.js'


//일단은 이쪽에다가 구매랑 판매 추가하는거 만들기 
import DetailRecode from './portDetailRecodeBuy';
import DetailRecodeSell from './portDetailRecodeSell';
import DeleteAlert from './portDetailDeleteAlert';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      background: "white",
    },
    topList:{
        // color: 'white', 
        backgroundColor: 'white',
        height : "5.5vh",
        borderBottom: "2px solid #3f51b5",

        verticalAlign :"middle",
        display :"flex",
        margin : "auto",
        alignItems :"center", // 이걸 통해서 위치가 중간으로 내려옴 
        //justifyContent :"center", // 이거는 전체 내용을 center로 옮겨준다 


    },
    titleText: {
        fontSize : "1.1rem", 
        fontWeight : "650",
        color : "#8286a1"
        
    },
    textFiled:{
        "& .MuiFilledInput-input":{
            paddingTop : "10px",
            height : "1.5rem",
            //borderTopLeftRadius : "0 0" 
        },
    },
    
  }))


export default function PortDetail(){
    const classes = useStyles();
    const theme = useTheme();


    // 1 : 구매, 2: 판매, 3: 삭제 
    // const[opens,setOpens] = React.useState([false,false,false]);
    // const handleClickOpen = (num) => {
    //     let preArray = [...opens];
    //     console.log(preArray[1]);
    //     console.log(num);
    //     preArray[num-1] = true;
    //     console.log(preArray);
    //     //setOpens(preArray);
    // };
    // const handleClose = (num) => {
    //     let preArray = [...opens];
    //     preArray[num-1] = false;
    //     console.log(preArray);
    //     //setOpens(preArray);
    // };
    // console.log("Test");

    //구매 
    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    //판매 
    const [open3, setOpen3] = React.useState(false);
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };

    // 삭제 
    const [open4, setOpen4] = React.useState(false);
    const handleClickOpen4 = () => {
        setOpen4(true);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };

    return (
        <div className = {classes.root}>
           <div>
                            
            <Container maxWidth="sm">                
                <Box className = {classes.topList} >
                    <ArrowBackIosIcon className ={classes.icon} /><Typography className = {classes.titleText}>거래 내역</Typography> 
                </Box>      
            </Container>
            <Container maxWidth="sm" >
                <PortDetailTab /> 
            </Container>
            <Container fixed maxWidth="sm"
            justify="flex-end" >
              <ControlIcon clickopen = {handleClickOpen2} clickopen2 = {handleClickOpen3} clickopen3 = {handleClickOpen4}/>
              {/* <ControlIcon clickopen = {handleClickOpen}/> */}
            </Container>
            <LabelBottomNavigation/>
            </div>
            <DetailRecode handleClose ={handleClose2} open = {open2}/>
            <DetailRecodeSell handleClose ={handleClose3} open = {open3}/>
            <DeleteAlert handleClose ={handleClose4} open = {open4}/>
        </div>
    )
}