import React from 'react';
import {Route,Redirect} from 'react-router-dom';


/**
 * @description creates a normal route to any route.
 */

const ProtectedRoute = ({user, children, path, component, isRestricted = false, ...rest}) => {
    if(user && isRestricted){
        return <Redirect to='/dashboard'/>;
    }
     return <Route exact path={path} component={component ? component : ()=>children}/>; 
    }


    
export default ProtectedRoute;
