import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Container } from '@material-ui/core';
import { Paper } from "@material-ui/core"
import SearchTab from './SearchTab.js';
import { TextField, InputAdornment } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
// 기본 화면 틀 구성 
import { Grid, Box } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


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
    icon:{
        marginLeft : 10, 
        color : "#3f51b5"
    
    }
  }))

// re-render 시 함수 전체를 재시작하기 떄문에 전역 변수 설정 
let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ0ZXN0Xzc3ZWJhNmI1IiwiZXhwIjoxNjE1NzQzNjc4fQ.wyMNJ0lJeJKfi_4E_X3kbUy_0CCYLz6Yez98iZn2Suo"; 
let value;
let changeData = {"data":{
    "koreaStocks": [],
    "usaStocks": []
}
};
let firstStatus = 0;

export default function Search({getMain}){
    const classes = useStyles();
    const [getData, setGetData] = React.useState(changeData);//re-rendering 은 이걸 통해서 진행 

  
    const onSearch = (e) =>{
        //입력되어있는 값 가져오기 
        value = e.target.value;
        if(value.length > 0 ){
            let searchWord = encodeURIComponent(value);
            let url = '/search/prefix/' + searchWord;
            axios.get(url,{
                headers:{
                    Authorization : `Bearer ${accessToken} `,
                }
            })
                .then(function (response) {
                    //changeData = response;
                    firstStatus = 1;
                    setGetData(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }else if(value.length == 0){
            //검색된 값이 없는 경우 
            //검색을 시작하기전 
            firstStatus = 0;
            setGetData(changeData);
        }
        
    }

    return (
        <div className = {classes.root}>
           <div>
            <Container maxWidth="sm">                
                <Box className = {classes.topList} >
                    <ArrowBackIosIcon className ={classes.icon} onClick = {getMain}/><Typography className = {classes.titleText}>종목 검색</Typography> 
                </Box>      
            </Container>
            <Container maxWidth="sm" >
            <TextField
                fullWidth
                variant="filled"
                placeholder="종목명,코드,심볼 검색"
                onChange={onSearch}
                className = {classes.textFiled}
                />
            </Container>
            <Container maxWidth="sm" >
                <SearchTab Data = {getData.data} firstStatus = {firstStatus}/> 
            </Container>
            </div>

            
        </div>
    )
}