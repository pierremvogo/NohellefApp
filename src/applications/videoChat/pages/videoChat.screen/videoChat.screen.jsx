import React, { useState, useEffect } from 'react';
import {Typography, AppBar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from '../../components/VideoPlayer.jsx';
import Notifications from '../../components/Notifications.jsx';
import Options from '../../components/Options.jsx';
import imchat from '../../../../assets/images/chatvideo/imchat.jpg';
import './videoChat.css';

const useStyles = makeStyles((theme) => ({
     appBar: {
        borderRadius: 10,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid #FFCE52',

        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      image: {
        marginLeft: '15px',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}));

const VideoChat = () => {
    const classes = useStyles();
    const [isDisplay, setIsDisplay] = useState("none");

    const handlerClick = () =>{
        setIsDisplay('flex');
    }

    return(
        <div className="body">
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h4" align="center">Nohellef Videoconference</Typography>
            </AppBar>

            <VideoPlayer isDisplay={isDisplay} />
            <Options onChildClick={handlerClick}/>
            <Notifications />
        </div>
        </div>
        )
   
}
export default VideoChat;