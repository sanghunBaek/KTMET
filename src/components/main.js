import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import axios from 'axios';
// import Container from '@material-ui/core/Container';
import { Container } from '@material-ui/core';
// core에서 가져오는거는 이렇게 가져와야하나봄 
import ScrollableTabsButtonAuto from './tab.js';

import { Paper } from "@material-ui/core"
import LabelBottomNavigation from './navigation.js';
import OutlinedButtons from './MaddBut.js';
import { Grid, Box } from "@material-ui/core"
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core"

import { TextField, InputAdornment } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import mockupdata from "./mockupdata.json"


import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Search from './Search.js';


//초기에 해당 유저의 포폴정보를 가져오기 위함 
import userPortfiloinfo from "./userPortfiloinfo.json"
import { PortableWifiOffRounded } from '@material-ui/icons';


//context API 를 사용하기 위함 
export const StockContext = React.createContext();


const useStyles = makeStyles((theme) => ({
    container: {
      background: theme.palette.success.main,
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        // hight: '40ch',
      },

    //TEst로 합쳐보는것 
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
    icon:{
        marginLeft : 10, 
        color : "#3f51b5"
    
    },
    titleText: {
        fontSize : "1.1rem", 
        fontWeight : "650",
        color : "#8286a1"
        
    },
  }))



const mockupdatas = mockupdata;

let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ0ZXN0Xzc3ZWJhNmI1IiwiZXhwIjoxNjE2MDA5NDA0fQ.reR6QX1sPup7un7oxyaFwKdT9jVhrHEGUsDHbkceQBk"; 

export default function Main(){
    // API 를 통해서 데이터 가져오는 부분 정의 필요 
    //1. Main으로 넘어오면 User 정보를 통해서 포폴 정보를 가져오는게 1순위 
    //해당 api는 test로 넣어진 값이 없어서 쓰기 어려움으로 일단은 하드코딩으로 가져오기 
    //가져온 데이터의  "portfolios" 값만큼 api를 호출해서 계산을 시작해야한다 0일수도 있고, 최대 10개 까지 가능함 
    
    let portfolioID = new Array;// 초기에 ID값을 저장할 객체 
    let portfolioDatas = new Array; // 각 ID에서 가져온 데이터를 넣어준다 
    let checkSecond = 0;
    portfolioID = userPortfiloinfo.portfolios;

    const [loading, setLoading] = React.useState(true);
    const [potodata, setPotodata] = React.useState(); // data 
    
    //getPortfolio 정보 가져온다 추후 로컬에서 계산 필요 
    const getPortfolio = (accessToken,port) =>{
        let url = '/portfolio/'+port;
        return axios.get(url,{
            headers:{
                Authorization : `Bearer ${accessToken} `,
            }
        })
    }
    //getProtfolioStatus 정보 가져온다 초기 1회만 사용 하는게 목표     
    const getProtfolioStatus =(accessTocken,port) =>{
        let url = '/portfolio/'+port+'/status';
        return axios.get(url,{
            headers:{
                Authorization : `Bearer ${accessToken} `,
            }
        })
    }
    //초창기에 데이터 뿌려줄때 사용하는 목적으로 만들어진 함수     
    const fetchingMulti = (accessTocken,port,end) =>{
        axios.all([getPortfolio(accessTocken,port),getProtfolioStatus(accessTocken,port)])
        .then(axios.spread((portfolio,portfolioStatus)=>{

            portfolioStatus.data.name = portfolio.data.name;
            portfolioDatas.push(portfolioStatus.data);
            if(end == true){
                setPotodata(portfolioDatas);
                setLoading(false);
            }
        })).catch(function (error) {
            console.log(error);
        })
    }
    //데이터 가져오기 전까지는 로딩중 
    if(loading == true){
        let end = false;
        for(let j=0; j < portfolioID.length;j++){
            if(j == portfolioID.length-1){
                end = true;
            }
            fetchingMulti(accessToken,portfolioID[j],end);
        }
    }else if(checkSecond == 0){
        checkSecond = checkSecond + 1;
    }
    const classes = useStyles();

    //debugger;
    const [change, setChange] = React.useState(0);
    const getSearch = () => {
        setChange(1);
    };
    const getMain = () =>{
        setChange(0);
    };
    return (   
        <StockContext.Provider value = {{potodata}}>
        { loading && 
            <h1>로딩중입니다</h1> }

        { !loading && change ==0 &&
        <div>
        <Container maxWidth="sm">
            <TextField
            fullWidth
            label="Search" variant="filled"
            className={classes.textField}
            placeholder="종목명,코드,심볼 검색"
            onClick = {getSearch}
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                ),
            }}
            />
        </Container>
        {console.log("testmain")}
        
        <Container maxWidth="sm">
            <ScrollableTabsButtonAuto /> 
        </Container>
    
        <OutlinedButtons openSearch = {getSearch}/>    
        <LabelBottomNavigation/>
        </div>}
        { change == 1 && 
            <div>
                <Search getMain= {getMain}/>
            </div>
        }
        </StockContext.Provider>  
        );

}
