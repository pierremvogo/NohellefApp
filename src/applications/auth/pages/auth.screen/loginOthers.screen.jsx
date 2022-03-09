import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../../../app/components/buttons/button';
import Card from "../../../../app/components/Card/Card.js";
import CardHeader from "../../../../app/components/Card/CardHeader.js";
import CardBody from "../../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../../app/components/Card/CardFooter.js";
import GridItem from "../../../../app/components/Grid/GridItem.js";
import smileauth from '../../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../../assets/images/im10.png';
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';
import { authgetCodeAdminSuccess,authgetCodeAdminFailed,authSetLoginForm } from '../../../redux/reducer/actions/auth';
import { getUserSuccess,getUserFailed } from '../../../redux/reducer/actions/users';
import userService from '../../../services/user.service';
import authService from '../../../services/auth.service'; 
import adminService from '../../../services/admin.service'; 
import './login.screen.css';
import AskRegister from '../../../auth/pages/auth.screen/askRegister.jsx';
import Loader from 'react-loader-spinner';

const LoginOthers = ({error,loginsForm,adminPayload}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState(loginsForm?loginsForm:{login: "", password: ""})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null)
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()
    const [showAskModal,setShowAskModal] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("flex");
    const [formErrors, setFormErrors] = useState({});
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");

    

   const onChangeLoginForm = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value});
    setFormErrors(validateForm(loginForm));
    dispatch(authgetCodeAdminFailed(null));
    console.log(loginForm);
  };

  const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "150%",
            display: displayLoading,
            zIndex: "900000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
            <div
                style={{
                    width: "10%",
                    height: "30%",
                    zIndex: "300000",
                    display: "flex",
                    position: "absolute",
                    top: "30%",
                    left: "48%"
                }}
                >
                <Loader type="Oval" color="#2BAD60" height="100" width="70" />
            </div>
          
      </div>
    )
  };
  const handleLoading = (isShow) => {
    setShowModalLoading(isShow);
  }

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'login':
                if(!values[input]){
                    errorsValidation.login = "Le Nom d'utilisateur est requis";

                }else if(values[input].length < 4){
                    errorsValidation.login = "Le nom d'utilisateur doit avoir au moins 4 lettres";
                }else{
                    setSubmited(true);
                }
               
                break;
            case 'password':
                if(!values[input]){
                    errorsValidation.password = "Le mot de passe est requis";
                }else if(!regexPassword.test(values[input])){
                    errorsValidation.password = "Le mot de passe doit avoir au moins 8 caractères,une majuscule,une minuscule et un chiffre";
                }else{
                    setSubmited(true);
                }
                break;
                default:
                    break;
    }
    
    });

       return errorsValidation;       
  }

     const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(loginForm));
        if(Object.keys(formErrors).length === 0 && submited){
            dispatch(authSetLoginForm(loginForm));
            handleLoading(true,'login');
            adminService.login(loginForm)
            .then((response) => {
                handleLoading(false,'login'); 
                dispatch(authgetCodeAdminFailed(null));
                dispatch(authSetLoginForm(null));
                response.data.message = response.data.message + ",Please Confirm it for Safe Login";
                dispatch(authgetCodeAdminSuccess(response.data.message));
                    
            })
            .catch((error) => {
                handleLoading(false,'login');
                console.log("Error login admin");
                console.log(error);
                if(error.response === undefined){
                    dispatch(authgetCodeAdminFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authgetCodeAdminFailed(error.response));
                }
                
            });
        }else{
            console.log(submited);
            dispatch(authgetCodeAdminFailed(null));
            handleLoading(false,'login');
            return; 
        }
    }
    const ModalAskInscription = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "4000px",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
            <div className="contain" id='myContain'>
                <div style={{display:'inline-block', fontSize:'1.5vw'}}>
                   
                </div><span className='close' onClick={()=>closeModal()}>&times;</span>
                <AskRegister /> 
            </div>
          
      </div>
    )
  };

  function closeModal(){
    setDisplayAsk("none",setShowAskModal(false))
  }

    const outPutEventConnexion=(e)=> {
        history.push('/auth/login')
    }

  const outPutEventRegister=(e)=> {
   setDisplayAsk("flex",setShowAskModal(true))
    }
	return(

        <div style={{backgroundColor:'#eeeeee'}}>
        {showModalLoading? <ModalLoading />: ''}
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={4} style={{textAlign:'center'}}>
                        <div style={{margin:'10% 0% 0% 0%'}}>
                           <Avatar 
                                        size="150"
                                        round={true}
                                        src={logoImage}
                                        name='logo'
                                    />
                        </div>
                     </GridItem>

                     <GridItem xs={12} sm={12} md={8}>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div style={{
                                margin:'5% 0% 2% 25%'
                            }}>
                                 <img src={smileauth} width='10%' />

                            </div>
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div style={{
                                fontSize:'1.6vw',
                                margin:'0% 0% 0% 18%'
                                }}>Continuons l'aventure</div>
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                          
                            {adminPayload&&
                                (<div className="alert alert-success" style={{width:"60%",fontSize:'1em',textAlign:'center'}} role="alert">
                                            {adminPayload}
                                 </div>)
                            }
                          
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'50%',
                                height:'80%',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'2%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 15% 2%'}} onClick={()=>history.push('/auth/register')}>
                                         <span style={{color:'blue',float:'left'}}><strong><u>Se Connecter</u></strong></span>
                                     </div>
                                    </GridItem>
                                  </GridContainer>




                                 <form onSubmit={onSubmit}>
                                  <>
                                  {Object.keys(loginForm).map((input,index)=>{
                                        let type, id, idTooltip, name, placeholder;                                     
                                        if (input === "login") {
                                            name="login";
                                            id = "login";
                                            type = "text";
                                            placeholder = "Votre nom d'utilisateur"
                                          }else if (input === 'password') {
                                            name="password";
                                            id = "password";
                                            type = 'password';                             
                                            placeholder = "Votre mot de passe";
                                          } else { return }
                                          return(
                                            <GridContainer key={index}>
                                                <GridItem xs={12} sm={12} md={12}>
                                                   <div style={{margin:'0% 20% 5% 20%'}}>
                                                    
                                                  <input 
                                                    name={name}
                                                    id={id}
                                                    type={type}
                                                    onChange={onChangeLoginForm}
                                                    value={loginForm[input]} 
                                                    placeholder={placeholder}
                                                    autoComplete="off"
                                                    required

                                                    style={{
                                                    borderRadius:'10px',
                                                    border:`${input==="login"&&formErrors.login?'2px solid #C84941':
                                                            input==="password"&&formErrors.password?'2px solid #C84941':'2px solid #002495'}`,
                                                    width:'100%',
                                                    height:'40px'}}/>
                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {input==="login"?formErrors.login:
                                                                         input==="password"?formErrors.password:""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                  </div>
                                                </GridItem>
                                            </GridContainer>
                                        )
                                  })}
                                  </>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'10% 20% 5% 20%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '15px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '55px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'4%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}} ><strong>Se connecter</strong></span>
                                    </div>
                                    </div>
                                      
                                    </GridItem>
                                  </GridContainer>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      {error && (
                                            <div className="form-group">
                                                {error.data&&(<div className="alert alert-danger" style={{width:"50%",fontSize:'0.7em',margin:'0% 25% 0% 25%'}} role="alert">
                                                        {error.data.message}
                                                </div>)}
                                                {!error.data&&(<div className="alert alert-danger" style={{width:"50%",fontSize:'0.7em',margin:'0% 25% 0% 25%'}} role="alert">
                                                        {error}
                                                </div>)}
                                            </div>
                                        )}
                                    </GridItem>
                                  </GridContainer>
                                  </form>

                                 
                              </div>


                          </GridItem>
                        </GridContainer>

                      </GridItem>


                    </GridContainer>
                    <div className="row">
                        <Footer />
                    </div>
			 </div>
		)
}
const mapStateToProps=(state)=>{

  return{
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      loginsForm: state.authReducer.loginsForm,
      adminPayload: state.authReducer.adminPayload,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(LoginOthers);
