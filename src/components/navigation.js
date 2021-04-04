import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import FeedbackIcon from '@material-ui/icons/Feedback';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    overflow: "hidden",
    // textAlign : "center"
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Protfolio" value="Protfolio" icon={<PersonIcon />} />
      <BottomNavigationAction label="Example" value="Example" icon={<EditIcon />} />
      <BottomNavigationAction label="Feedback" value="Feedback" icon={<FeedbackIcon />} />
      <BottomNavigationAction label="options" value="options" icon={<BuildIcon />} />
    </BottomNavigation>
  );
}