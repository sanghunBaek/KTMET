import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';




const useStyles = makeStyles((theme) => ({
    icon:{
        marginLeft : 10, 
        color : "#3f51b5"
    
    },
    fab: {
        position: 'fixed',
        bottom: "10%",
        //right: "0%",
    },
     fab2: {
        position: 'fixed',
        bottom: "10%",
        //right: "3%",
        
    },
    plusGrid :{
        paddingRight: "60px" // 임시 방편 
    },
    deleteGrid:{
        paddingRight: "60px" // 임시 방편 
    },


    root: {
        transform: 'translateZ(0px)',
        flexGrow: 1,
      },
      exampleWrapper: {
        position: 'relative',
        marginTop: theme.spacing(3),
        height: 380,
      },
      radioGroup: {
        margin: theme.spacing(1, 0),
      },
      speedDial: {
        position: 'fixed',
        bottom: "10%",
        // position: 'absolute',
        // '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        //   bottom: theme.spacing(2),
        //   right: theme.spacing(2),
        // },
        // '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        //   top: theme.spacing(2),
        //   left: theme.spacing(2),
        // },
      },
    
  }))



export default function ControlIcon({clickopen,clickopen2,clickopen3}){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const actions = [
        { icon: <ShoppingCartIcon />, name: 'Buy', onclick : clickopen},
        { icon: <RemoveIcon />, name: 'Sell', onclick : clickopen2},
      ];
      

    const fab = {
          color: 'primary',
          className: classes.fab,
          icon: <DeleteIcon />,
          onclick : clickopen3,
          label: 'Delete',
        };
    const fab2 = {
        color: 'primary',
        className: classes.fab2,
        icon: <AddIcon />,
        label: 'Add',
    };
      
    
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };


    
    
      
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    return (
        <div >
            <Grid container justify="flex-end">
                <Grid item className = {classes.deleteGrid} >
                    <Zoom
                        key={fab.color}
                        in={1 === 1}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${1 === 1 ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                        
                    >
                        <Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick = {fab.onclick}>
                            {fab.icon}
                        </Fab>
                    </Zoom>
                </Grid>
                <Grid item className =  {classes.plusGrid}>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    className={classes.speedDial}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                    direction="up"
                    >
                    {actions.map((action) => (
                        <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.onclick}
                        // onClick={handleClose}
                        />
                    ))}
                    </SpeedDial>
                </Grid>
                
               
            </Grid>
            

        </div>
    )
}