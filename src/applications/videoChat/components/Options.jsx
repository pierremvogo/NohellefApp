import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import hangup from '../../../assets/images/chatvideo/hangup.png';
import copy from '../../../assets/images/chatvideo/copy.png';
import phone from '../../../assets/images/chatvideo/phone.png';
import l1 from '../../../assets/images/iconvideo/l1.png';
import l2 from '../../../assets/images/iconvideo/l2.png';
import r1 from '../../../assets/images/iconvideo/r1.png';
import r2 from '../../../assets/images/iconvideo/r2.png';
import share from '../../../assets/images/iconvideo/share.png';
import stop from '../../../assets/images/iconvideo/stop.png';
import userall from '../../../assets/images/iconvideo/userall.png';
import start from '../../../assets/images/iconvideo/start.png';

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
    margin: '10px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 15,
  },
  padding: {
    padding: 25,
    textAlign: "center",
  },
  cursor: {
    cursor: "pointer",
  },
  paper: {
    padding: '0px 20px',
    border: '2px solid #FFCE52',
    borderRadius: '25px'
  },
  buttonColor: {
  	backgroundColor: '#FFCE52',
    cursor:"pointer",
  },
}));

const Options = ({onChildClick, isInvited }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [enableCamera, setEnableCamera] = useState(true);
  const [enableMicrophone, setEnableMicrophone] = useState(false);
  const [isStart, setIstart] = useState(false);
  const classes = useStyles();
  const video = document.querySelector('video');
  const clickHandler = (e) => {
  	onChildClick(e.target.name)
  	callUser(idToCall);
  }

  const handleStart = (istart) => {
    setIstart(istart);
    if(!istart){
      leaveCall();
    }
  }
  const startCam = () => {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch(function(error) {
                console.log("Something went wrong!");
            });
    }
};



  const handleCamera = (enable) => {
    setEnableCamera(enable);
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    if(!enable){
        const track = tracks.find(track => track.kind === "video");
        track.stop();
        //tracks.forEach(track => track.stop())
    }else{
          startCam();
         }
    
  }


  const handleMicrophone = (enable) => {
    setEnableMicrophone(enable);
        const mediaStream = video.srcObject;
        const tracks = mediaStream.getTracks();
        const videoTrack = tracks.find(track => track.kind === "audio");
    if(!enable && videoTrack.enabled){
        //tracks[0].stop();
        //tracks.forEach(track => track.stop())
        videoTrack.enabled = false;
    }else{
          videoTrack.enabled = true;
         }
  }

  const shareScreen = async () => {
    const mediaStream = await getLocalScreenCaptureStream();

    const screenTrack = mediaStream&&mediaStream.getVideoTracks()[0];

    if (screenTrack) {
      console.log('replace camera track with screen track');
      replaceTrack(screenTrack);
    }
};

const getLocalScreenCaptureStream = async () => {
  try {
    const constraints = { video: { cursor: 'always' }, audio: false };
    const screenCaptureStream = await navigator.mediaDevices.getDisplayMedia(constraints);

    return screenCaptureStream;
  } catch (error) {
    console.error('failed to get local screen', error);
  }
};

const replaceTrack = (newTrack) => {
  const mediaStream = video.srcObject;
  const tracks = mediaStream.getTracks();
  let videoTrack = tracks.find(track => track.kind === newTrack.kind);
  videoTrack = newTrack;
}



  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
         {isStart?
          <Grid container className={classes.gridContainer}>

            <Typography gutterBottom variant="h6">Identifiant de Réunion: 
              <CopyToClipboard text={me} className={classes.margin}>
                <span variant="contained" className={classes.buttonColor} fullWidth onClick={(e) => clickHandler(e)} className={classes.margin}><u style={{cursor:"pointer"}}>{me}</u></span>
              </CopyToClipboard>
            </Typography>
           
          </Grid> :""}  
          <Grid container className={classes.gridContainer}>

            {/*<Grid item xs={12} md={3} className={classes.padding}>
              {console.log("ME--->",me)}
              {enableMicrophone ? (
                <img src={r1} variant="contained" style={{cursor:'pointer'}} className={classes.buttonColor} fullWidth onClick={(e) => handleMicrophone(false)} className={classes.margin}/>
                ) : (
                <img src={l1} variant="contained" style={{cursor:'pointer'}} className={classes.buttonColor} fullWidth onClick={(e) => handleMicrophone(true)} className={classes.margin}/>
                )
              }
            </Grid>*/}

            <Grid item xs={12} md={4} className={classes.padding}>
              {console.log("ME--->",me)}
              {enableCamera ? (
                <img src={r2} variant="contained" style={{cursor:'pointer'}} className={classes.buttonColor} fullWidth onClick={(e) => handleCamera(false)} className={classes.margin}/>
                ) : (
                <img src={l2} variant="contained" style={{cursor:'pointer'}} className={classes.buttonColor} fullWidth onClick={(e) => handleCamera(true)} className={classes.margin}/>
                )
              }
            </Grid>

            <Grid item xs={12} md={4} className={classes.padding}>
              {/*<Typography gutterBottom variant="h6">Lancer l'appel</Typography>
              <TextField label="Identifiant d'appel" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              */}
                <img src={share} variant="contained" style={{cursor:'pointer'}} className={classes.buttonColor} fullWidth onClick={shareScreen} className={classes.margin}/>
                  
              
            </Grid>

           {!isInvited&& 
           <Grid item xs={12} md={4} className={classes.padding}>
              {/*<Typography gutterBottom variant="h6">Lancer l'appel</Typography>
              <TextField label="Identifiant d'appel" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
             */}
              {callAccepted && !callEnded && isStart?(
               <img src={stop} variant="contained" style={{cursor:'pointer'}} color="secondary" fullWidth onClick={(e)=>handleStart(false)} className={classes.margin}/>
                ) : (
                  <img src={start} variant="contained" style={{cursor:'pointer'}} color="secondary" fullWidth onClick={(e)=>setIstart(true)} className={classes.margin}/>
                )
              } 
            </Grid>}

          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Options;
