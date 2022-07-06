import React, { useState, useEffect,useContext  } from 'react';
import {Typography, AppBar, TextField} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from '../../components/VideoPlayer.jsx';
import Notifications from '../../components/Notifications.jsx';
import Options from '../../components/Options.jsx';
import imchat from '../../../../assets/images/chatvideo/imchat.jpg';
import Loader from 'react-loader-spinner';
import { SocketContext } from '../../../../SocketContext.js';


import './videoChat.css';

const useStyles = makeStyles((theme) => ({
     appBar: {
        margin: '0px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
    const { me, callAccepted,  call, name, setName, handleSetStream, callEnded, stream, leaveCall, callUser } = useContext(SocketContext);
    const [isDisplay, setIsDisplay] = useState("none");
    const [launchMeet, setLaunchMeet] = useState(false);
    const [showModalJoinMeet, setShowModalJoinMeet] = useState(false);
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayJoin, setDisplayJoin] = useState("flex");
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [idToCall, setIdToCall] = useState('');
    const [isInvited, setIsInvited] = useState(false);

    const handlerClick = () =>{
        setIsDisplay('flex');
    }

    useEffect(()=>{
        handleSetStream();
    },[])

    const clickHandler = (e) => {
        setIsInvited(true);
        setShowModalJoinMeet(false);
        callUser(idToCall);   
    }

    const handleLaunchMeet = () => {
        setLaunchMeet(true);
    }

    const JoinScreen = () => {
        return(
            <div className="container">
              <div className="row" style={{margin: "100px auto", width:"50%"}}>
                  <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <span style={{fontSize:'80px',color:"white", cursor:'pointer', margin:'2%', float:"right"}}  onClick={(e)=>closeModal(e)}>&times;</span>        
                        </div>
                    </div>
                    
                    <div className="row bg-white">
                         <div className="col-8 p-2"><TextField label="Identifiant de réunion" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth /></div>
                         <div className="col-4 p-2">
                            <div className="text-center">
                               <button onClick={clickHandler} className="btn btn-primary">Valider</button>    
                            </div>
                         </div>
                    </div>
                  </div>
              </div>
                
            </div>
            )
    }

    const closeModal = (e) => {
        setShowModalLoading(false);
        setShowModalJoinMeet(false);
    }

    const ModalJoinMeet = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            display: displayJoin,
            zIndex: "1000000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
            <JoinScreen />
          
      </div>
    )
  };

    const handleJoinMeet = () => {
        setShowModalJoinMeet(true)
    }

    return(
        <div className="body">
        {showModalJoinMeet? <ModalJoinMeet />: ''}
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h4" align="center">Nohellef Videoconference</Typography>
                <Typography variant="h4" align="right"> <button  onClick={handleJoinMeet} className="btn btn-primary">Rejoindre une Réunion</button></Typography>
            </AppBar>

            <VideoPlayer isDisplay={isDisplay} />
            <Options onChildClick={handlerClick} isInvited={isInvited}/>
            <Notifications />
        </div>
        </div>
        )
   
}
export default VideoChat;