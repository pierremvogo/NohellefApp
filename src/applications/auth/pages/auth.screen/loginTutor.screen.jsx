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
import './login.screen.css';
import AskRegister from '../../../auth/pages/auth.screen/askRegister.jsx';

const Login = ({error}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState({username: "", password: "", remember: false})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null)
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()
    const [showAskModal,setShowAskModal] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("flex");

    

    const onChangeLogin = (e) => {
        setLoginForm({...loginForm,  [e.target.name]: e.target.value })}

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (submited) { return } 
        if(isLoginForm) {
            if(loginForm.username.trim()=='admin'&&loginForm.password.trim()=='admin'){
              
                history.push('/admin/dashboard');
            }else if(loginForm.username.trim()=='stud'&&loginForm.password.trim()=='stud'){
             
                history.push('/student/dashboard');
            }else if(loginForm.username.trim()=='tutor'&&loginForm.password.trim()=='tutor'){
               
                history.push('/tutor/dashboard');
            }
               
             //dispatch(authSignIn({...loginForm, redirect: history.location.state?.pathname || 'dashboard'}));
        } 
        setSubmited(true);
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
        {showAskModal? <ModalAskInscription /> :''}
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
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'50%',
                                height:'420px',
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

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{margin:'0% 0% 5% 0%'}}>
                                      <input type='text' placeholder="Votre nom d'utilisateur" style={{
                                        borderRadius:'10px',
                                        border:'2px solid #002495',
                                        width:'100%',
                                        height:'40px'}}/>
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{margin:'0% 0% 5% 0%'}}>
                                      <input type='text' placeholder="Votre mot de passe"  style={{
                                        borderRadius:'10px',
                                        border:'2px solid #002495',
                                        width:'100%',
                                        height:'40px'}}/>
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'10% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '15px',
                                          borderBottom: '5px solid #002495',
                                          borderRight:  '5px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '55px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'3%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'1.2vw',color:'white'}}>Se connecter</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <div>
                                          <span style={{
                                            color:'blue',
                                            float:'left',
                                            cursor:'pointer'
                                        }} onClick={()=>history.push('/auth/forgot')}>Mot de passe oublié?</span>
                                          <span style={{
                                            color:'green',
                                            float:'right',
                                            cursor:'pointer'
                                        }} onClick={(e)=>outPutEventRegister(e)}>Pas de compte?</span>
                                      </div>
                                    </GridItem>
                                  </GridContainer>
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
export default Login;
