import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TotalResult from './totalresult.js';
import StockResult from './stockresult.js';
import Cash from './cash.js';
import AddIcon from '@material-ui/icons/Add';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Grid } from "@material-ui/core"
import Divider from '@material-ui/core/Divider';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
    background: '#FFFFFF',
    // padding : 0, 
    "& .MuiBox-root":{
        paddingLeft : 10, 
        paddingRight : 10
        // padding : 10 
    },
    "& #scrollable-auto-tabpanel-0":{
      // tab 안에 있는 내용무 높이 기본설정 
      // 이걸 안해주면 값이 없거나, 값이 다 안채워졌을때 색이 달라진다 
      // 그래서 그냥 배경색이랑 통일시켜줌 

      //height : "100vh"   
       
    },
  },
  labelContainer: {
    padding: 0,
  },
  smallFont: {
    fontSize : "0.8rem",
    color : "#8286a1"
  },
  mainFont:{
    fontSize : "1.1rem",
    fontWeight : "550",
  },
  middleFont:{
    fontSize : "1.2rem",
    fontWeight : "550",
    color : "#8286a1",
    verticalAlign :"Baseline",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
    //textAlign: "center"
    //display :"flex",
    //margin : "auto",
    //alignItems :"center"
  },
  nonedata:{
    height : "50vh", // 정확하게 중간은 아님... 정확한 계산은 모르겠네 
    textAlign: "center", // 텍스트를 중앙 정렬해줌
  }
}));



//api로 전달 받은 데이터를 원하는 탭에 따라서 data를 나눠서 출력 
//data 는 전달 받은 값, select   1 :국내, 2 :해외. 3 : 전체
function stockList(data,select){

  let stocklistK = data.koreaStocks;
  let stocklistU = data.usaStocks;
  let totalStock = [];
  totalStock = stocklistK.concat(stocklistU);

  if(select == '1'){
    return stocklistK;
  }else if(select == '2'){
    return stocklistU;
  }else{
    return totalStock;
  }
}

// 데이터 출력 
function ShowStockList({data}){  
  const classes = useStyles();
  return(
      <>
        <Grid container spacing={1} alignItems = "center">
            <Grid item xs = {6} container direction="row"  alignItems="center" >
                <Grid item xs ={12} >
                    <Typography  className = {classes.mainFont} >{data.name}</Typography>
                </Grid>       
                <Typography  className = {classes.smallFont} >{data.code}</Typography>
            </Grid>
            <Grid item xs = {6}>
                   <Typography align = "right" className = {classes.middleFont}>{data.market}</Typography>         
            </Grid>
        </Grid>
        <Divider/>
      </>
  );
}
//검색어 잘못 입력했을때 화면 
function ShowWorongWord(){  
  const classes = useStyles();
  return(
      <>
        <Grid
            container
            spacing={0}
            justify="center" // 이게 딱 중앙 정렬을 시켜준다 ..  아래 direction 이랑 같이 써야함
            direction="column"
            className = {classes.nonedata}
          >
            <Grid item >
              <h2>검색 결과가 없습니다.</h2>
                국내 미국 상해 홍콩 주식,<br/>
                해외 지수 환율 및 비상장 종목 <br/>
                검색이 가능합니다 
            </Grid>
          </Grid>
      </>
  );
}

//Data api 검색 결과 전달 
//firstStatus 최로 렌딩 페이지에서 상태 나타냄 
export default function SearchTab({Data,firstStatus}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0); //value 값을 통해서 tab 전환시 re-render
  
  // API 호출시에 국내, 해외 나누지 않고 전체 검색임
  // 들어왔을때 구별이 되기만 하면 된다 
  // 1 : 국내, 2: 해외, 3: 전체 
  let cleanDatas = stockList(Data,3);
  let cleanDatasU = stockList(Data,2);
  let cleanDatasK = stockList(Data,1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="전체" {...a11yProps(0)}  />
          <Tab label="국내" {...a11yProps(1)} />        
          <Tab label="해외" {...a11yProps(1)} />                    
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0} >
       {cleanDatas.length > 0 && cleanDatas.map((cleanData)=>(
          <ShowStockList data = {cleanData}/>
        ))}
         {cleanDatas.length == 0 && firstStatus !=0 &&
         <ShowWorongWord/>} 
      </TabPanel>
      <TabPanel value={value} index={1}>
        {cleanDatasK.length > 0 && cleanDatasK.map((cleanData)=>(
            <ShowStockList data = {cleanData}/>
          ))}  

        {cleanDatasK.length == 0 && firstStatus !=0 &&
         <ShowWorongWord/>} 

      </TabPanel>
      <TabPanel value={value} index={2}>
        {cleanDatasU.length > 0 && cleanDatasU.map((cleanData)=>(
            <ShowStockList data = {cleanData}/>
          ))}  

        {cleanDatasU.length == 0 && firstStatus !=0 &&
          <ShowWorongWord/>} 
      </TabPanel>
    </div>
  );
}
