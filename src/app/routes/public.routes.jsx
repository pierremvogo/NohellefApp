import React from 'react';
import {Route,Redirect} from 'react-router-dom';


/**
 * @description creates a normal route to any route.
 */

const PublicRoute = ({user, children, path, component, ...rest}) => {
        return <Route exact path={path} component={component ? component : ()=>children}/>; 
    }

export default PublicRoute;
