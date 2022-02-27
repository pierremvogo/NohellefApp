import React, { useEffect } from 'react';
import { Switch, Route, Router, Redirect, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './private.routes';
import PublicRoute from './public.routes';
import ProtectedRoute from './public.routes';
import ROUTES from './path.routes';
//import { ContextProvider } from '../../SocketContext.js';

import Home from '../../applications/home/pages/home.screen/home';
import StudentPage from '../../applications/student/pages/dashboard.screen/dashboard.jsx';
import AdminPage from '../../applications/admin/pages/dashboard.screen/dashboard.jsx';
import SupAdminPage from '../../applications/supadmin/pages/dashboard.screen/dashboard.jsx';
import ParentPage from '../../applications/parent/pages/dashboard.screen/dashboard.jsx';
import TutorPage from '../../applications/tutor/pages/dashboard.screen/dashboard.jsx';
import Login from '../../applications/auth/pages/auth.screen/login.screen.jsx';
import LoginOthers from '../../applications/auth/pages/auth.screen/loginOthers.screen.jsx';
import RegisterSupAdmin from '../../applications/auth/pages/auth.screen/registerSupAdmin.jsx';
import ForgotPassword from '../../applications/auth/pages/auth.screen/forgotPassword.screen.jsx';
import ResetPassword from '../../applications/auth/pages/auth.screen/resetPassword.screen.jsx';
//import VideoChat from '../../applications/videoChat/pages/videoChat.screen/videoChat.screen.jsx';

const MainRoute = ({user,redirect,isRestricted = false}) =>{
    const urlpath = window.location.pathname;
    const history = useHistory();
    console.log("user in Route System");
    console.log(user);

    console.log("My Locations");
    console.log(urlpath);
       
    useEffect(() => {
        if(user){
            if(user.currentUser.type != 0 && urlpath===ROUTES.STUDENT){
                history.push(ROUTES.HOME);
            }else if(user.currentUser.type != 1 && urlpath===ROUTES.PARENT){
                history.push(ROUTES.HOME);
            }else if(user.currentUser.type != 2 && urlpath===ROUTES.TUTOR){
                history.push(ROUTES.HOME);
            }else if(user.currentUser.type != 3 && urlpath===ROUTES.ADMIN){
                history.push(ROUTES.HOME);
            }else if(user.currentUser.type != 4 && urlpath===ROUTES.SUP_ADMIN){
                history.push(ROUTES.HOME);
            }
        }
        else{
            if(urlpath===ROUTES.STUDENT||
                urlpath===ROUTES.PARENT||
                urlpath===ROUTES.TUTOR||
                urlpath===ROUTES.ADMIN||
                urlpath===ROUTES.SUP_ADMIN){

                history.push(ROUTES.HOME);
            }else{
                return;
            }
           
        }
    }, []);
    return(
        <Switch>
         
        {user&&user.accessToken&&user.currentUser.type==="0" &&(
            <Route 
                exact
                path={ROUTES.STUDENT}> 
                <StudentPage />
            </Route>
        )}

        {user&&user.accessToken&&user.currentUser.type==="1" &&(
            <Route 
                exact
                path={ROUTES.PARENT}> 
                <ParentPage />
            </Route>
        )}

        {user&&user.accessToken&&user.currentUser.type==="2" &&(
            <Route 
                exact
                path={ROUTES.TUTOR}> 
                <TutorPage />
            </Route>
        )}

        {user&&user.accessToken&&user.currentUser.type==="3" &&(
            <Route 
                exact
                path={ROUTES.ADMIN}> 
                <AdminPage />
            </Route>
        )}

        {user&&user.accessToken&&user.currentUser.type==="4" &&(
            <Route 
                exact
                path={ROUTES.SUP_ADMIN}> 
                <SupAdminPage />
            </Route>
        )}

                    <Route 
                        exact
                        path={ROUTES.HOME}> 
                        <Home />
                    </Route>
     
                    <Route 
                        exact
                        component={LoginOthers}
                        path={ROUTES.LOGIN_OTHERS} 
                    />

                    <Route 
                        exact
                        component={RegisterSupAdmin}
                        path={ROUTES.REGISTER_SUPADMIN} 
                    />

                    <Route 
                        exact
                        component={ForgotPassword}
                        path={ROUTES.FORGOT_PASSWORD} 
                    /> 
                    
                    <Route 
                        exact
                        component={ResetPassword}
                        path={ROUTES.RESET_PASSWORD} 
                    />
                    {/*<ContextProvider>
                        <Route 
                            exact
                            component={VideoChat}
                            path={ROUTES.VIDEO_CHAT} 
                        />
                    </ContextProvider>*/}
          
        </Switch>

    )
}

const mapStateToProps = (state) =>({
    user: state.authReducer.user,
    redirect: state.authReducer.redirect,
    isRestricted: state.authReducer.isRestricted
});

export default connect(mapStateToProps)(MainRoute);