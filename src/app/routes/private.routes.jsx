import React from 'react';
import ROUTES from './path.routes';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({user,children,path,component,...rest}) => {
    if(user && user.accessToken){
           return <Redirect to={ROUTES.LOGIN}/>;
    }
   
    return <Route exact path={path} component={component ? component : ()=>children}/>;
    
     
}

export default PrivateRoute;