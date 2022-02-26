import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import authService from '../../../services/auth.service'; 
import Button from '../../../../app/components/buttons/button';
import Card from "../../../../app/components/Card/Card.js";
import CardHeader from "../../../../app/components/Card/CardHeader.js";
import CardBody from "../../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../../app/components/Card/CardFooter.js";
import GridItem from "../../../../app/components/Grid/GridItem.js";
import smileauth from '../../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../../assets/images/im10.png';
import forgotsmile from '../../../../assets/images/dashboard/forgot.png';
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';
import { authgetResetTokenSuccess,authgetResetTokenFailed } from '../../../redux/reducer/actions/auth';
import Loader from 'react-loader-spinner';
import './login.screen.css';

const ForgotPassword = ({error}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [forgotPasswordForm, setForgotPasswordForm] = useState({email: ""});
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const history = useHistory();
    const dispatch= useDispatch();

    
    const validateForm = (values) => {
        const errorsValidation = {};
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'email':
                if(!values[input]){
                    errorsValidation.email = "Adresse Email requise";
                }else if(!regexEmail.test(values[input])){
                    errorsValidation.email= "Adresse Email invalide";
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
                    top: "20%",
                    left: "44%"
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


   const onChangeForgotPassword = (e) => {
        setForgotPasswordForm({...forgotPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(validateForm(forgotPasswordForm));
        }


   const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(forgotPasswordForm));
        if(Object.keys(formErrors).length === 0 && submited){
            setFormErrors({});
            setErrorMessage(true);
            handleLoading(true);
            console.log("MY FORGOT PASSWORD FORM");
            console.log(forgotPasswordForm.email);
            authService.getForgotPasswordToken(forgotPasswordForm.email)
            .then((response) => {
                console.log("Reset password Token");
                console.log(response);
                handleLoading(false);
                dispatch(authgetResetTokenFailed(response)); 
            })
            .catch((error) => {
                handleLoading(false);
                if(error.response === undefined){
                    console.log("Network Error");
                    dispatch(authgetResetTokenFailed("Network Error, possible you are not connected"));
                }else{
                    console.log("Error Getting Token");
                    console.log(error.response);
                    dispatch(authgetResetTokenFailed(error.response));
                 
                }
                
            });
        }else{
            handleLoading(false);
            return; 
        }
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
                                margin:'5% 0% 0% 20%'
                            }}>
                                 <img src={forgotsmile} width='10%' />

                            </div>
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                          
                            <div style={{
                                fontSize:'100%',
                                margin:'0%',
                                }}><p style={{marginLeft:'5%'}}>Avez-vous perdu ou oublié votre mot de passe?</p>
									<p style={{marginLeft:'7%'}}><strong>sans inquiétude nous gérons le problème</strong></p>
                            </div>
                          
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'40%',
                                height:'260px',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'1%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 15% 2%'}}>
                                         <span style={{color:'blue',float:'left'}}><strong><u>mot de passe oublier?</u></strong></span>
                                     </div>
                                    </GridItem>
                                  </GridContainer>
                                  
                                  {Object.keys(forgotPasswordForm).map((input,index)=>{
                                    return(
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                           <div style={{margin:'0% 0% 1% 0%'}}>
                                          <input
                                            name={input}
                                            onChange={onChangeForgotPassword}
                                            value={forgotPasswordForm[input]}
                                            type={input} 
                                            placeholder="Entrer votre adresse Email" 
                                            style={{
                                            borderRadius:'10px',
                                            border:`${
                                                        input==="email"&&formErrors.email?'2px solid #C84941':
                                                        '2px solid #002495'}`,
                                            width:'100%',
                                            height:'40px'}}/>

                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="email"?formErrors.email:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                          </div>
                                        </GridItem>
                                    </GridContainer>
                                        )
                                  })}
                            
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'20% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div onClick={onSubmit} style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '15px',
                                          borderBottom: '4px solid #002495',
                                          borderRight:  '4px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '55px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'8%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Envoyer</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'20% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '15px',
                                          borderBottom: '4px solid #002495',
                                          borderRight:  '4px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '55px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'8%'
                                        }}>
                                
                                <span className="text" onClick={()=>{history.push("/")}} style={{fontSize:'100%',color:'white'}}>Annuler</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>
                                  </GridContainer>
                                  <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            {errorMessage && error && (
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
    error: state.authReducer.error,
    resetToken: state.authReducer.resetToken,
  };
};
export default connect(mapStateToProps)(ForgotPassword);

