import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import ROUTES from './path.routes';


/**
 * @description creates a normal route to any route.
 */

const ProtectedRoute = ({user, children, path, component, isRestricted = false, ...rest}) => {
    if(user && isRestricted){
        return <Redirect to={
                             user.role===0 ?ROUTES.STUDENT:
                             user.role===1 ?ROUTES.PARENT:
                             user.role===2 ?ROUTES.TUTOR:
                             user.role===3 ?ROUTES.ADMIN:
                             user.role===4 ?ROUTES.SUP_ADMIN:
                            ""}/>;
    }else{
     return <Route exact path={path} component={component ? component : ()=>children}/>; 
    }
    }


    
export default ProtectedRoute;
