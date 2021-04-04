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
  },
  labelContainer: {
    padding: 0,
  },
  
}));



// 전달 받을 때 전해준쪽이랑 동일한 이름을 쓰고 {}로 묶어서 받으면 그대로 할당되어 들어온다 
// 다른 변수를 쓰면 내용으로 들어갈때 두번 들어가야함 
export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const nameOfPotos = new Array; // 포폴 이름 가져오기 
  const [value, setValue] = React.useState(0);

  const {potodata} = useContext(StockContext);
  console.log("요거 맞는겨?");
  console.log(potodata);


  for(let names of potodata){
    nameOfPotos.push(names.name);
  }

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
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {nameOfPotos.map((nameOfPoto, index) => (
            <Tab label={nameOfPoto} {...a11yProps(index)}/>
          ))}
           
          {/* <Tab label="A.포트폴리오" {...a11yProps(0)}  />
          <Tab label="B.포트폴리오" {...a11yProps(1)} />         */}

            <box style = {{paddingTop : 10}}>
                <AddIcon  />
            </box>
            
            
        </Tabs>
        
      </AppBar>
      {potodata.map((tests,index) => (
            <TabPanel value={value} index={index}>
              <TotalResult prop ={tests} />
              <StockResult test = {tests}/>
              <Cash cashValue = {tests}/>
          </TabPanel> 
          ))}
      {/* <TabPanel value={value} index={0} >
        <TotalResult props ={portplioMain} />
        <StockResult test = {test}/>
        <Cash cashValue = {test}/>
      </TabPanel>
       */}
    </div>
  );
}
