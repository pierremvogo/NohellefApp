import React, { useEffect,useRef,useState } from 'react';
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
import './login.screen.css';
import AskRegister from '../../../auth/pages/auth.screen/askRegister.jsx';
import ReactTooltip from 'react-tooltip';

const Login = ({error,onChildClick}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState({username: "", password: ""})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()
    const [showAskModal,setShowAskModal] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("flex");
    const [formErrors, setFormErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && submited){
        console.log(loginForm);
    }
    }, [formErrors]);


  const handlerChildClick =(e) => {
        onChildClick(e.target.name);
  }
  const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'username':
                if(!values[input]){
                    errorsValidation.username = "Le Nom d'utilisateur est requis";

                }else if(values[input].length < 4){
                    errorsValidation.username = "Le nom d'utilisateur doit avoir au moins 4 lettres";
                }else{
                    
                }
               
                break;
            case 'password':
                if(!values[input]){
                    errorsValidation.password = "Le mot de passe est requis";
                }else if(!regexPassword.test(values[input])){
                    errorsValidation.password = "Le mot de passe doit avoir au moins 8 caractères,une majuscule,une minuscule et un chiffre";
                }else{
                    
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
    console.log(loginForm);
  };
   
    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(null)
    }

    const tooltipStyles = {
        main:{
            backgroundColor: "red",
            color: "black",
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(loginForm));
        console.log("Login form text....");
        if (submited) { return }       
             //dispatch(authSignIn({...loginForm, redirect: history.location.state?.pathname || 'dashboard'}));
       
        setSubmited(true);
    }

    const ModalAskInscription = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "transparent",
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

        <div style={{
                backgroundColor:'#ffce52',
                borderRadius:'25px 25px 25px 25px',
                }}>
                   
                     <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 15% 2%'}}>
                                         <span style={{color:'blue',float:'left'}}><strong><u>Connexion</u></strong></span>
                                     </div>
                                    </GridItem>
                                  </GridContainer>
                                  <form onSubmit={onSubmit}>
                                  <>
                                  {Object.keys(loginForm).map((input,index)=>{
                                        let type, id, idTooltip, name, placeholder;                                     
                                        if (input === "username") {
                                            id = "username";
                                            type = "text";
                                            placeholder = "Votre nom d'utilisateur"
                                          }else if (input === 'password') {
                                            id = "password";
                                            type = 'password';                             
                                            placeholder = "Votre mot de passe";
                                          } else { return }
                                          return(
                                            <GridContainer key={index}>
                                                <GridItem xs={12} sm={12} md={12}>
                                                   <div style={{margin:'0% 20% 5% 20%'}}>
                                                    
                                                  <input 
                                                    name={input}
                                                    id={id}
                                                    type={type}
                                                    onChange={onChangeLoginForm}
                                                    value={loginForm[input]} 
                                                    placeholder={placeholder}
                                                    required

                                                    style={{
                                                    borderRadius:'10px',
                                                    border:`${input==="username"&&formErrors.username?'2px solid #C84941':
                                                            input==="password"&&formErrors.password?'2px solid #C84941':'2px solid #002495'}`,
                                                    width:'100%',
                                                    height:'40px'}}/>

                                                    {errorMessage && error && (
                                                        <div className="form-group">
                                                              <div style={{color:"red"}}>
                                                                  {error.message}
                                                              </div>
                                                        </div>
                                                                )}
                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {input==="username"?formErrors.username:
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
                                  </form>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <div style={{margin:'0% 5% 15% 5%'}}>
                                          <span style={{
                                            color:'blue',
                                            float:'left',
                                            cursor:'pointer'
                                        }} onClick={()=>history.push('/auth/forgot')}>Mot de passe oublié?</span>
                                          <span style={{
                                            color:'green',
                                            float:'right',
                                            cursor:'pointer'
                                        }} onClick={(e)=>handlerChildClick(e)}>Pas de compte?</span>
                                      </div>
                                    </GridItem>
                                  </GridContainer>
                     
             </div>
		)
}
export default Login;
