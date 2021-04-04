import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialogStyle: {
    "& .MuiDialog-paper":{
      // maxWidth : "500px",
      width: '300px'
    },
  

  }
});

export default function DetailDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, handleClickOpen2, handleClickOpen3 } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}
    className = {classes.dialogStyle}>
      <List divider={true}> 
         <ListItem button onClick={() => handleListItemClick(1)} divider={true}>
            {/* <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar> */}
            <ListItemText primary="수정하기" align="center" onClick = {handleClickOpen3}/>
          </ListItem>

          <ListItem button onClick={() => handleListItemClick(2)} >
            {/* <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar> */}
            <ListItemText primary="삭제하기" align="center" onClick = {handleClickOpen2} />
          </ListItem>   
      </List>
    </Dialog>
  );
}

DetailDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

