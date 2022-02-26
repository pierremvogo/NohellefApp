import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import hangup from '../../../assets/images/chatvideo/hangup.png';
import copy from '../../../assets/images/chatvideo/copy.png';
import phone from '../../../assets/images/chatvideo/phone.png';

import { SocketContext } from '../../../SocketContext.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid #FFCE52',
    borderRadius: '25px'
  },
  buttonColor: {
  	backgroundColor: '#FFCE52'
  },
}));

const Options = ({onChildClick }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  const clickHandler = (e) => {
  	onChildClick(e.target.name)
  	callUser(idToCall);
  }

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">Information du Compte</Typography>
              <TextField label="Username" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              {console.log("ME--->",me)}
              <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" className={classes.buttonColor} fullWidth startIcon={<img src={copy} width='25%' />}>
                  Copier votre Id
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">Lancer l'appel</Typography>
              <TextField label="Identifiant d'appel" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<img src={hangup} width='25%' />} fullWidth onClick={leaveCall} className={classes.margin}>
                  Arreter l'appel
                </Button>
              ) : (
                <Button variant="contained" className={classes.buttonColor} startIcon={<img src={phone} width='25%' />} fullWidth onClick={(e) => clickHandler(e)} className={classes.margin}>
                  Appeler
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Options;
