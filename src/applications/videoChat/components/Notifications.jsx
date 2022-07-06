import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../../../SocketContext.js';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ 
                width: "100%",
                height: "100%",
                display: "flex",
                zIndex: "900000",
                position: "absolute",
                overflow: "hidden",
                backgroundColor: "rgb(0, 0, 0)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                top:"0px",
                left:"0px",}}>
                    <div className="container">
                      <div className="row" style={{margin: "150px auto", width:"50%"}}>
                        <div className="col-12">
                          <span style={{color:"white"}}>{call.name} Demande d'invitation en cours  </span>
                          <Button variant="contained" color="primary" onClick={answerCall}>
                              Accepter
                          </Button>
                        </div>
                      </div>
                      
                    </div>     
        </div>
      )}
    </>
  );
};

export default Notifications;
