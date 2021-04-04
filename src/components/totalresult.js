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
      color : "red",
      paddingBottom : 5,
  },
  smallFont: {
    fontSize : "0.4rem",
  },
  mainFont:{
    fontSize : "1.5rem",
  },
  plusFont:{
    fontSize : "0.4rem",
    color : "#3498db"
  },
  minusFont:{
    fontSize : "0.4rem",
    color : "#e74c3c"
  },

}));


//첫글자가 + - 여부만 확인 
function checkSign(x){
    let a = true;
    // console.log(typeof x);
    if(x[0] == '-'){
        a = false;
    }
    return a 
}

//숫자 3자리마다 , 처리해주는 함수 
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 전달받은 데이터 값 정제
function cleanValue(data){ 
    for(let key in data){
        // console.log("기본값 " + key + ":" + data[key]);
        data[key] = Math.round(data[key]);
        // console.log("round 처리" + key + ":" + data[key]);
        //sign 함수 양수, 음수, 양수인 영 또는 음수인 영이면, 이 함수는 1, -1, 0, -0을 각각 반환
        
        if(0 < Math.sign(data[key])&& key != 'totalAsset'){ //총 자산은 + - 가 안붙는다 
            data[key] = "+" + String(data[key]); // 양수인경우 + 붙여줘야함
        } 
        // console.log("양수 음수 처리 " + key + ":" + data[key]);
        
        //문제는 여기다 
        data[key] = numberWithCommas(data[key]); //컴마 처리 

        //현재 컴마처리를 안해줘서 -가 숫자로 나타나는 문제가 있었던것 
        // 저거 처리하기 쩐까지만 sting으로 바꿔주자 
        data[key] = String(data[key]);

        // console.log("컴마 처리 " + key + ":" + data[key]);
    }
    return data;
    // console.log(data)
}


export default function TotalResult({prop}){ 
    // console.log(props);
    
    const classes = useStyles()
    let sign = 0;
    //sign = checkSign
    let portplioMain ={
      "totalAsset": 0,
       "profitBalance": 0, 
       "profitRate": 0, 
   }; 
  // 전체를 다 대입할 필요없이 아래와 같이 해도 알아서 대입이 된다 .. 아니네..
  //   portplioMain = test;
    portplioMain.totalAsset = prop.totalAsset;
    portplioMain.profitBalance = prop.profitBalance;
    portplioMain.profitRate = prop.profitRate;
    
    /// 절사처리,000단위 끊어주기 둘다 처리
    // 이쪽 처리에서 문제가 있음 
    let props  = new Object;
    props =  cleanValue(portplioMain);
    console.log(props);
    // console.log(checkSign(props.profitBalance));

    /// + - 구별하는 함수 
    
    
  return (
    <>
      <Paper className={classes.paper} >
        <Typography  className = {classes.titleFont} >
          포트폴리오 현황
        </Typography>
        <Grid container spacing={1}>
            <Grid item xs = {7}>
                {/* 총자산 */}
                
                <Typography  className = {classes.mainFont} >￦{props.totalAsset}</Typography>
            </Grid>
            <Grid item xs = {2}>
               <Grid direction="column-reverse" justify="center">
                   <Typography className = {classes.smallFont}>수익률</Typography>
               </Grid>
                 <Grid>
                     <Typography className = {classes.smallFont}>수익금</Typography>
                </Grid>
            </Grid>
            <Grid item xs = {2}>
                <Grid direction="column-reverse" justify="center">
                   <Typography className = {(checkSign(props.profitRate)?classes.plusFont:classes.minusFont)}>{props.profitRate}%</Typography>
               </Grid>
                <Grid>
                     <Typography className = {(checkSign(props.profitBalance)?classes.plusFont:classes.minusFont)}>{props.profitBalance}￦</Typography>
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
