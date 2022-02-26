import React from 'react';
import ROUTES from './path.routes';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({user,children,path,component,...rest}) => {
    if(user && user.accessToken){
           return <Route exact path={path} component={component ? component : ()=>children}/>;
           
    }else{
        return <Redirect to={ROUTES.HOME}/>;
   
    }
    
    
    
     
}

export default PrivateRoute;