import React,{forwardRef,useImperativeHandle} from 'react';
import {NotificationManager,NotificationContainer} from 'react-notifications';


const Notifications = forwardRef(({title,message,ref}) => {

	useImperativeHandle(ref, () => ({

    createNotification (type)  {
    
      switch (type) {
        case 'info':
          NotificationManager.info({message},{title});
          break;
        case 'success':
          NotificationManager.success({message}, {title});
          break;
        case 'warning':
          NotificationManager.warning({message}, {title}, 3000);
          break;
        case 'error':
          NotificationManager.error({message}, {title}, 5000, () => {
            alert('callback');
          });
          break;
      }

}}));
  return(

		   <NotificationContainer />
		  
	);
});

export default Notifications;