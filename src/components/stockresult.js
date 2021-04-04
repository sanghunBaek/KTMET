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


function filterStockIf(value){
  /*
    변수 정리 
    ptfoName : 포폴 이름 배열 
    totalInfo : 최종 결과 배열 key 포폴, value 는 주식정보 
    productCode : 각 포폴별로 필요한 상품주식정보를 배열로 배열안에 각 주식은 JSON으로  
    eachProtfilo : 해당 포폴정보를 객체로 만들어주는것 
  */
  // 해당 계정에서 사용파는 포폴 이름들 배열로 생성
  let ptfoName = Array();
  ptfoName = Object.keys(value.assetCategory.stockCategory);
  
  //최종 결과 저장될 배열 
  let totalInfo = Array();

  //각 포폴에서 필요한 주식코드에  맞춰서 필요한 정보를 획득하고 totalInfo에 넣어줘야한다 
  for(let i=0; i < ptfoName.length; i++){  
    //이름으로 설정하려면 해당 포폴이름에서의 코드값을 가져와야함  
    let productCode = Array(); 
    let productRealInfo = Array();
    let copyCode = Array();
    productCode = value.assetCategory.stockCategory[ptfoName[i]]; // 포폴안의 주식정보 배열을 가져올수 있음 
    for(let j=0; j < productCode.length; j++){
      // 코드값맘ㄴ 가져오기  /// d이쪽에서 code가 없다 ? 
      copyCode[j] = productCode[j].code;
      // 해당 코드값을 통해서 전체 값을 찾아오면 된다 
      productRealInfo[j] = value.stockStatus[copyCode[j]];
    } 
    // 해당 포폴을 위한 객체를 생성 name은 포폴이름 value 는 product value 그리고 배열에 삽입
    let eachProtfilo = Object();
    eachProtfilo[ptfoName[i]] = productRealInfo;  // 배열 자체를 값으로 넣어줌 
    totalInfo[i] = eachProtfilo;
  }
  console.log("B");
  return totalInfo;  
}

//포폴 안에있는 주식이 반복되도록 하는것 

function DrawStock({eachStock}){
  const classes = useStyles();
  // console.log("에러가 나는 부분");
  // console.log(eachStock);
  return(
    <>
    <Grid container spacing={1}>
            <Grid item xs = {6} container direction="row"  alignItems="center">
                <Grid item xs ={6} >
                    <Typography  className = {classes.mainFont} >{eachStock.stock.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography  className = {classes.smallFont} > {eachStock.amount} @ {eachStock.avgPrice}</Typography>
                </Grid>
                <Typography  className = {classes.smallFont} >{eachStock.stock.code}</Typography>
            </Grid>

            <Grid item xs = {6}>
                <Grid direction="column" justify="center">
                   <Typography align = "right" className = {classes.middleFont}>{eachStock.evaluatedBalance}＄</Typography>
                   {/* <Typography align = "right" className = {classes.middleFont}>{eachStock.profitBalance}＄</Typography> */}
               </Grid>
                <Grid>
                     <Typography align = "right" className = {classes.smallFont} style = {{color : "#3498db" }}>+{eachStock.profitBalance}＄(+{eachStock.profitRate}%)</Typography>
                     {/* <Typography align = "right" className = {classes.smallFont} style = {{color : "#3498db" }}>+55.68＄(+3.08%)</Typography> */}
                </Grid>
            </Grid>
        </Grid>
    </>
  );
}



//제일 큰 포폴 반복되는것 
function DrawPortflio({filtered}){
  const classes = useStyles();
  let arrayStock = Object.values(filtered)[0];
  
  return(
    <>
      <Paper className={classes.paper} >
        <Typography  className = {classes.titleFont} >  
          {Object.keys(filtered)[0]}
        </Typography>
        {/* 주식 반복 부분  */}
        
        {arrayStock.map((filter)=>(
          <DrawStock eachStock = {filter}/>
        ))}  
      </Paper>
      <br />

    </>
  );
}




export default function StockResult({test}){
    // const classes = useStyles();
    console.log("stockResult: ");
    console.log(test);
    let samples = Array();
    samples = filterStockIf(test);
    
  return (
    <>
      {samples.map((sample)=>(
        <DrawPortflio filtered = {sample}/>
      ))}
    </>
  )
}

