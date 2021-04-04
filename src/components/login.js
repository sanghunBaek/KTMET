import React, {Component} from 'react';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import axios from 'axios';

import {Redirect} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  maincontain:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: '100vh'
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  maintext : {
    color : "white",
    marginBottom: theme.spacing(4)
  }
}));

const KaKaoBtn = styled(KakaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;




function SignIn(){
  const [toHome, setToHome] = useState(false);
  // const state = "false";
  const classes = useStyles();
  console.log(3);
  // const goToMain = () =>{
  //   return <Redirect to="/Main"/>;
  // }
  const responseKakao = (res) => { 
        let a = res.response.access_token;
        console.log(a);
        console.log(res);
        
        axios.post('/user/login', {
            socialType: 'kakao',
            socialToken: a
          })
          .then(function (response) {
            // this.setState({ redirect: true });
            // goToMain();
            // <Redirect to={{ pathname: "/Main" }}/>;
            // this.state = "ture";
            setToHome(true);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


        // this.setState({
        //     id: res.profile.id,
        //     name: res.profile.properties.nickname,
        //     provider: 'kakao'
        // })
    }

    // Login Fail
    const responseFail = (err) => {
        console.error(err);
    }

  // if({number}>0){
  //   return <Redirect to={{ pathname: "/Main" }}/>;
  // }
   return (
      <div>
      <div> 
        {/* 3항 연산자를 통해서 redirect 를 성공 시켰다! */}
      {toHome ? <Redirect to= "/Main" /> : null }
      </div>
      <Container component="main" maxWidth="xs" className={classes.maincontain}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.maintext}>
            자산 관리는 ASSET 
          </Typography>
          <KaKaoBtn
                  jsKey={'17b869548be6103a4de705b7721b55ab'}
                  buttonText="Kakao"
                  onSuccess={responseKakao}
                  onFailure={responseFail}
                  getProfile="true"
              />
              
        </div>
      </Container>
    </div> 
    );

}

export default SignIn;

// 초찾기에 로그인 페이지 
// const useStyles = makeStyles((theme) => ({
//   maincontain:{
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     height: '100vh'
//     //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   },
//   paper: {
//     marginTop: theme.spacing(0),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     position: 'absolute', 
//     left: '50%', 
//     top: '50%',
//     transform: 'translate(-50%, -50%)'
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   maintext : {
//     color : "white"
//   }
// }));

// export default function SignIn() {
//   const classes = useStyles();
  

//   return (
//     <Container component="main" maxWidth="xs" className={classes.maincontain}>
      
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <AttachMoneyIcon />
//         </Avatar>
        
//         <Typography component="h1" variant="h5" className={classes.maintext}>
//           자산 관리는 ASSET 
//         </Typography>
//       </div>
      
//     </Container>
//   );
// }