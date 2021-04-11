import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '100px',
    // marginRight: '-150px',
    marginLeft: '510px',
    '& > * + *': {
      marginTop: theme.spacing(2),    
      
    },
  },
}));

export default function UserNotFound() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit"/>
            </IconButton>
          }
        >
          User Not Found
        </Alert>
      </Collapse>
    </div>
  );
}
