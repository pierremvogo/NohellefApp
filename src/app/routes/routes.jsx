import React, { useEffect ,Suspense, lazy} from 'react';
import { Switch, Route, Router, Redirect, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './private.routes';
import PublicRoute from './public.routes';
import ProtectedRoute from './public.routes';
import ROUTES from './path.routes';
import LoadingApp from '../components/loadingApp/loading.jsx';
//import { ContextProvider } from '../../SocketContext.js';

const Home = lazy(() => import('../../applications/home/pages/home.screen/home'));
const StudentPage = lazy(() => import('../../applications/student/pages/dashboard.screen/dashboard.jsx'));
const AdminPage = lazy(() => import('../../applications/admin/pages/dashboard.screen/dashboard.jsx'));
const SupAdminPage = lazy(() => import('../../applications/supadmin/pages/dashboard.screen/dashboard.jsx'));
const ParentPage = lazy(() => import('../../applications/parent/pages/dashboard.screen/dashboard.jsx'));
const TutorPage = lazy(() => import('../../applications/tutor/pages/dashboard.screen/dashboard.jsx'));
const Login = lazy(() => import('../../applications/auth/pages/auth.screen/login.screen.jsx'));
const LoginOthers = lazy(() => import('../../applications/auth/pages/auth.screen/loginOthers.screen.jsx'));
const RegisterSupAdmin = lazy(() => import('../../applications/auth/pages/auth.screen/registerSupAdmin.jsx'));
const ForgotPassword = lazy(() => import('../../applications/auth/pages/auth.screen/forgotPassword.screen.jsx'));
const ResetPassword = lazy(() => import('../../applications/auth/pages/auth.screen/resetPassword.screen.jsx'));
const ConfirmEmail = lazy(() => import('../../applications/auth/pages/auth.screen/confirmEmail.jsx'));
const ConfirmChangeEmail = lazy(() => import('../../applications/auth/pages/auth.screen/confirmChangeEmail.jsx'));

const RegisterStudent = lazy(() => import('../../applications/auth/pages/auth.screen/registerStudent.jsx'));
const RegisterParent = lazy(() => import('../../applications/auth/pages/auth.screen/registerParent.jsx'));

//import VideoChat from '../../applications/videoChat/pages/videoChat.screen/videoChat.screen.jsx';



const MainRoute = ({user,redirect,isRestricted = false}) =>{
    const urlpath = window.location.pathname;
    const history = useHistory();
    console.log("user in Route System");
    console.log(user);

    console.log("My Locations");
    console.log(urlpath);
       
    useEffect(() => {
        if(user&&user.currentUser){
            if(user.currentUser.type != 1 && urlpath===ROUTES.PARENT){
                history.push(ROUTES.HOME);
            }else if(user.currentUser.type != 2 && urlpath===ROUTES.TUTOR){
                history.push(ROUTES.HOME);
            }else if(user.currentUser.type != 3 && urlpath===ROUTES.SUP_ADMIN){
                history.push(ROUTES.HOME);
            }else if(user.currentUser.type != 4 && urlpath===ROUTES.ADMIN){
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
        <Suspense fallback={<LoadingApp isShow={'flex'} />}>
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
                path={ROUTES.SUP_ADMIN}> 
                 <SupAdminPage />
            </Route>
        )}

        {user&&user.accessToken&&user.currentUser.type==="4" &&(
            <Route 
                exact
                path={ROUTES.ADMIN}> 
                <AdminPage />
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
                        component={Login}
                        path={ROUTES.LOGIN} 
                    />

                    <Route 
                        exact
                        component={RegisterSupAdmin}
                        path={ROUTES.REGISTER_SUPADMIN} 
                    />

                    <Route 
                        exact
                        component={RegisterStudent}
                        path={ROUTES.REGISTER_STUDENT} 
                    />

                    <Route 
                        exact
                        component={RegisterParent}
                        path={ROUTES.REGISTER_PARENT} 
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

                    <Route 
                        exact
                        component={ConfirmEmail}
                        path={ROUTES.CONFIRM_EMAIL} 
                    />

                    <Route 
                        exact
                        component={ConfirmChangeEmail}
                        path={ROUTES.CONFIRM_CHANGE_EMAIL} 
                    />
                    {/*<ContextProvider>
                        <Route 
                            exact
                            component={VideoChat}
                            path={ROUTES.VIDEO_CHAT} 
                        />
                    </ContextProvider>*/}
          
        </Switch>
        </Suspense>

    )
}

const mapStateToProps = (state) =>({
    user: state.authReducer.user,
    redirect: state.authReducer.redirect,
    isRestricted: state.authReducer.isRestricted
});

export default connect(mapStateToProps)(MainRoute);