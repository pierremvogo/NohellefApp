import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateRoute from './private.routes';
import PublicRoute from './public.routes';
import ROUTES from './path.routes';


import Home from '../../applications/home/pages/home.screen/home';
import StudentPage from '../../applications/student/pages/dashboard.screen/dashboard.jsx';
import AdminPage from '../../applications/admin/pages/dashboard.screen/dashboard.jsx';
import SupAdminPage from '../../applications/supadmin/pages/dashboard.screen/dashboard.jsx';
import ParentPage from '../../applications/parent/pages/dashboard.screen/dashboard.jsx';
import TutorPage from '../../applications/tutor/pages/dashboard.screen/dashboard.jsx';
import Login from '../../applications/auth/pages/auth.screen/login.screen.jsx';
import ForgotPassword from '../../applications/auth/pages/auth.screen/forgotPassword.screen.jsx';
import ResetPassword from '../../applications/auth/pages/auth.screen/resetPassword.screen.jsx';

const MainRoute = ({user,isRestricted}) =>{
    
    return(
        <Switch> 

            <PublicRoute exact>
                <Route 
                    exact
                    component={Home}
                    path={ROUTES.HOME} 
                />  

                 <Route 
                    exact
                    component={Login}
                    path={ROUTES.LOGIN} 
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
                    component={StudentPage}
                    path={ROUTES.STUDENT}
                />
                <Route
                    exact
                    component={AdminPage}
                    path={ROUTES.ADMIN}
                />
                <Route
                    exact
                    component={SupAdminPage}
                    path={ROUTES.SUP_ADMIN}
                />
                <Route
                    exact
                    component={ParentPage}
                    path={ROUTES.PARENT}
                />
                <Route
                    exact
                    component={TutorPage}
                    path={ROUTES.TUTOR}
                />

            </PublicRoute>
        </Switch>
    )
}

const mapStateToProps = (state) =>({
    user: state.user,
    isRestricted: state.isRestricted
});

export default connect(mapStateToProps)(MainRoute);