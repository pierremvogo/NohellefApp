import React, { useEffect,useRef,useState } from 'react';
import {connect,useDispatch, useSelector} from 'react-redux';
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
import {    authLoginSuccess,
            authRegisterFailed,
            authRegisterSuccess,
            authLoginFailed,
            authSetLoginForm,
            authSetRegisterForm } from '../../../redux/reducer/actions/auth';
import { getUserSuccess,getUserFailed } from '../../../redux/reducer/actions/users';
import userService from '../../../services/user.service';
import authService from '../../../services/auth.service'; 
import Avatar   from 'react-avatar';
import './login.screen.css';
import AskRegister from '../../../auth/pages/auth.screen/askRegister.jsx';
import ReactTooltip from 'react-tooltip';
import Loader from 'react-loader-spinner';


const PartialLogin = ({error,
                       user,
                      loginsForm,
                      onChildLoading,
                      onChildCloseModal,
                      studentForRegister,
                      
                    }) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState(loginsForm?loginsForm:{login: "", password: ""})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory();
    const dispatch= useDispatch();
    const [showAskModal,setShowAskModal] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [displayAsk, setDisplayAsk] = useState("flex");
    const [formErrors, setFormErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState(false);
    const [showModalLoading, setShowModalLoading] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(studentForRegister);
    }, [formErrors]);

  
  const handleLoading = (isShow) => {
    onChildLoading(isShow);
  }
  const closePartialModal = (e) => {
    onChildCloseModal(e.target.name);
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

  const onChangeLoginForm = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value});
    setFormErrors(validateForm(loginForm));
    dispatch(authLoginFailed(null));  
    dispatch(authSetLoginForm(loginForm));
    console.log(loginForm);
  };

   
    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(null)
    }
    const handleRegisterStudent = (e,studentForm) => {
        authService.registerUser(studentForm)
            .then((response) => {
                if(!response.data.success){
                    dispatch(authRegisterFailed(response));
                    console.log("Response partial not success");
                    console.log(response);
                    handleLoading(false); 
                  
                }else{
                    dispatch(authRegisterFailed(null));
                    dispatch(authRegisterSuccess(response.data)); 
                    
                    console.log("Response partial success");
                    console.log(response);
                    handleLoading(false);  
                    history.push("/?query=l");
                     
                }   
            })
            .catch((error) => {
                dispatch(authRegisterFailed(error.response));
                handleLoading(false);
                console.log("Error register partial");
                console.log(error.response);
               
                
            });
    }


    const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(loginForm));
        if(Object.keys(formErrors).length === 0 && submited){
            dispatch(authSetLoginForm(loginForm));
            handleLoading(true);
            console.log(loginForm);
            authService.loginUser(loginForm)
            .then((response) => {
                dispatch(authLoginFailed(null));
                dispatch(authSetLoginForm(null));
                studentForRegister.parentId = response.data.currentUser.id;
                console.log("Register student with parent ID");
                console.log(studentForRegister);
                handleRegisterStudent(e,studentForRegister);
                
            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error Partial login");
                if(error.response === undefined){
                    dispatch(authLoginFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authLoginFailed(error.response));
                }
            });
        }else{
            dispatch(authLoginFailed(null));
            handleLoading(false);
            return; 
        }
    }

  
    return(

        <div style={{
                backgroundColor:'#ffce52',
                borderRadius:'25px 25px 25px 25px',
                }}>
                     <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 15% 2%'}}>
                                         <span style={{color:'blue',textAlign:'center'}}><strong><u>Moins de 18 ans? Veuillez renseigner les indentifiants de votre parent</u></strong></span>
                                     </div>
                                    </GridItem>
                                  </GridContainer>
                                  <>
                                  {Object.keys(loginForm).map((input,index)=>{
                                        let type, id, idTooltip, name, placeholder;                                     
                                        if (input === "login") {
                                            name="login";
                                            id = "login";
                                            type = "text";
                                            placeholder = "nom d'utilisateur du Parent"
                                          }else if (input === 'password') {
                                            name="password";
                                            id = "password";
                                            type = 'password';                             
                                            placeholder = "Mot de passe du Parent";
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
                                                    required

                                                    style={{
                                                    borderRadius:'10px',
                                                    border:`${input==="login"&&formErrors.username?'2px solid #C84941':
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
                                    <GridItem xs={12} sm={12} md={6}>
                
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'10% 20% 5% 20%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '10px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '45px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}} ><strong>Valider</strong></span>
                                    </div>
                                    </div>
                                      
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                
                                    <div onClick={(e)=>closePartialModal(e)} style={{cursor:'pointer',
                                          margin:'10% 20% 5% 20%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '10px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '45px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}} ><strong>Annuler</strong></span>
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
                     
             </div>
        )
}
const mapStateToProps=(state)=>{
  return{
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      loginsForm: state.authReducer.loginsForm,
      registersForm: state.authReducer.registersForm,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(PartialLogin);
