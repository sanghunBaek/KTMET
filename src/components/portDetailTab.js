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
//import Modal from '@material-ui/core/Modal';

//context api 
import {useContext} from 'react';
import {StockContext} from './main.js';


//연습용으로 일단 가져왔음 
import data from './mockupdata.json';
import { Paper} from "@material-ui/core"
import { Grid} from "@material-ui/core"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


//각 그리드들 분류해서 가져오기 
import Category from './portDetailTabCategory';
import StockSummary from './portDetailTabSummary';
import StockHistory from './portDetailTabHistory';


//Dialog 가져오기 
import DetailDialog from './portDetailDialog';
import Button from '@material-ui/core/Button';
import DetailUpdateHistory from './portDetailUpdateHistory';
import DeleteHistoryAlert from './portDetailDeleteHistory';



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
    background: 'linear-gradient(45deg, #B7BABC 30%, #B0CAE5 90%)',
    // padding : 0, 
    "& .MuiBox-root":{
        paddingLeft : 10, 
        paddingRight : 10
        // padding : 10 
    },
    "& #scrollable-auto-tabpanel-0":{
        height : "100vh"    
    },
    "& .MuiPaper-root":{
      paddingLeft : 10, 
      paddingRight : 10
      // padding : 10 
    },
    
  },
  labelContainer: {
    padding: 0,
  },
  paper: {
    padding: theme.spacing(3),
  },
  titleFont:{
      fontSize : "0.7rem",
      fontWeight : "1000",
      color : "black",
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

// 전달 받을 때 전해준쪽이랑 동일한 이름을 쓰고 {}로 묶어서 받으면 그대로 할당되어 들어온다 
// 다른 변수를 쓰면 내용으로 들어갈때 두번 들어가야함 
export default function PortDeatilTab() {
  const classes = useStyles();
  const nameOfPotos = new Array; // 포폴 이름 가져오기   
  const valueOfStock = new Array; // 포폴 이름 가져오기   
  const [value, setValue] = React.useState(0);

  //한국주식은 이름으로 미국 주식은 코드명으로 
  // 객체라서 값으로 가져올 필요가 있음 
  for(let datas in data.stockStatus){
    let a = data.stockStatus[datas]; // 배열로 가져오 기 쉽게 만들어 주는것 
    valueOfStock.push(a); 
    if(a.stock.markey == "kospi"){
        nameOfPotos.push(a.stock.name);    
    }else{
        nameOfPotos.push(a.stock.code);
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  //dialog 생성시에 필요한 함수들 
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(1);
  const handleClickOpen = (...props) => { // spread 로 값 배열로서 여러게 받을 수 있을듯 
    inputUpdateData(props);
    console.log(props);
    setOpen(true);
  };



  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  //삭제 처리 dialog 생성을 위한 함수     
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  //수정 처리 dialog 생성을 위한 함수     
  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  // 데이터 값을 전달 하기 위해서는 업데이트 할때 값을 전달해야함 
  const [updateData, setupdateData] = React.useState({});

  const inputUpdateData = (props) =>{ // 배열값을 받는것이기 때문 
      setupdateData({
        type : props[0],
        date : props[1],
        count : props[2], 
        price : props[3]
      })
  } 


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {nameOfPotos.map((nameOfPoto, index) => (
            <Tab label={nameOfPoto} {...a11yProps(index)}/>
          ))}
           
        </Tabs>
        
      </AppBar>
        {valueOfStock.map((stock,index) => (
            <TabPanel value={value} index={index}>     
                <Category/>
                <StockSummary stock = {stock}/>
                <StockHistory clickopen={handleClickOpen} />
                {/* <TotalResult prop ={tests} />
                <StockResult test = {tests}/>
                <Cash cashValue = {tests}/> */}
            </TabPanel> 
            ))}
          <DetailDialog selectedValue={selectedValue} open={open} onClose={handleClose} 
          handleClickOpen2 = {handleClickOpen2}
          handleClickOpen3 = {handleClickOpen3} />
          <DeleteHistoryAlert handleClose = {handleClose2} open = {open2}/>
          <DetailUpdateHistory handleClose = {handleClose3} open = {open3} data = {updateData}/>

          


    
    </div>
  );
}
