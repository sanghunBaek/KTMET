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


import AddStockpPort from './portAddStockSelectProt';
import AddStockCategory from './portAddStockCategory';
import AddCategory from './portAddStockAddCategory'
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
    topStockTitle:{
        height : "5.5vh",
        backgroundColor : "#f5f5f5",
        alignItems :"center",
        display :"flex",
        
    },
    stockTitleText :{
        fontSize : "1.2rem", 
        fontWeight : "650",
        marginLeft :"2%"
    },
    titleText: {
        fontSize : "1.1rem", 
        fontWeight : "650",
        color : "#8286a1",

    },
    textFiled:{
        "& .MuiFilledInput-input":{
            paddingTop : "10px",
            height : "1.5rem",
            //borderTopLeftRadius : "0 0" 
        },
    },
    
  }))


export default function PortAddStock(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className = {classes.root}>
           <div>      
            <Container maxWidth="sm">                
                <Box className = {classes.topList} >
                    <ArrowBackIosIcon className ={classes.icon} /><Typography className = {classes.titleText}>포트폴리오 종목 추가</Typography> 
                </Box>
                <Box className = {classes.topStockTitle}>
                    <Typography className  = {classes.stockTitleText}>AAPL</Typography>
                </Box>
                <AddStockpPort/>
                <AddStockCategory clickopen = {handleClickOpen}/>
            </Container>
            <AddCategory handleClose ={handleClose} open = {open}/>
            <LabelBottomNavigation/>
            </div>
        </div>
    )
}