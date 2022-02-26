import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
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
import forgotsmile from '../../../../assets/images/dashboard/forgot.png';
import Avatar   from 'react-avatar';
import './login.screen.css';
import { authResetSuccess,authResetFailed } from '../../../redux/reducer/actions/auth';
import authService from '../../../services/auth.service'; 
import Loader from 'react-loader-spinner';

const ResetPassword = ({error}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [resetForm, setResetForm] = useState({password: "", confirm_password: "",});
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({})
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [showModalLoading, setShowModalLoading] = useState(false);
    const history = useHistory()
    const dispatch= useDispatch()

    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');

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
                    left: "42%"
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


    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'password':
                if(!values[input]){
                    errorsValidation.password = "Le mot de passe est requis";
                }else if(!regexPassword.test(values[input])){
                    errorsValidation.password = "mot de passe avec au moins 8 caractères,une majuscule,une minuscule et un chiffre";
                }else{
                    setSubmited(true)
                }
                break;
            case 'confirm_password':
                if(!values[input]){
                    errorsValidation.confirm_password = "Veuillez confirmer le mot de passe";
                }else if(values['password'] != values[input]){
                    errorsValidation.confirm_password = "Confirmation de mot de passe invalide";
                }else{
                     setSubmited(true)
                }
                break;
    }
    
    });

       return errorsValidation;       
  }
  const onChangeResetForm = (e) => {
        setResetForm({...resetForm,  [e.target.name]: e.target.value });
        setFormErrors(validateForm(resetForm));
        console.log(resetForm);

    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(resetForm));
         let resetPassword = {
            password: resetForm.password,
            confirmation: resetForm.confirm_password,
        }
        if(Object.keys(formErrors).length === 0 && submited){
            setErrorMessage(true);
            handleLoading(true);
            console.log("form reset");
            console.log(resetPassword);
            authService.resetPassword(token,resetPassword)
            .then((response) => {
                if(!response.data.success){
                    dispatch(authResetFailed(response));
                    console.log("Reset not success");
                    console.log(response);
                    handleLoading(false); 
                }else{
                    dispatch(authResetFailed(response));
                    console.log("Reset success");
                    console.log(response.data);
                    handleLoading(false);
                    
                }   

            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error  Register parent");
                if(error.response === undefined){
                    dispatch(authResetFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authResetFailed(error.response));
                }
            });
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
                                margin:'5% 0% 2% 25%'
                            }}>
                                 <img src={forgotsmile} width='10%' />

                            </div>
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div style={{
                                fontSize:'1.6vw',
                                margin:'0% 0% 0% 16%'
                                }}>Dernière étape pour vous !</div>
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'50%',
                                height:'350px',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'2%'
                              }}>
                              <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 15% 1%'}}>
                                         <span style={{color:'blue',float:'left'}}><u>mot de passe oublié?</u></span>
                                     </div>
                                    </GridItem>
                              </GridContainer>

                              {Object.keys(resetForm).map((input,index)=>{
                                let id,label, type, name; 
                                     if(input==="password"){
                                          id="password"
                                          type="password"
                                          name="password"                             
                                          label="Nouveau mot de passe"
                                      }
                                      else if(input==="confirm_password"){
                                          id="confirm_password"
                                          type="password"
                                          name="confirm_password"                             
                                          label="Confirmer Nouveau mot de passe"
                                      }
                                    return(
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                           <div style={{margin:'0% 0% 1% 0%'}}>
                                          <input
                                            name={input}
                                            onChange={onChangeResetForm}
                                            value={resetForm[input]}
                                            type={type} 
                                            placeholder={label} 

                                            style={{
                                            borderRadius:'10px',
                                            border:`${
                                                        input==="password"&&formErrors.password?'2px solid #C84941':
                                                        input==="confirm_password"&&formErrors.confirm_password?'2px solid #C84941':
                                                        '2px solid #002495'}`,
                                            width:'100%',
                                            height:'40px'}}/>

                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="password"?formErrors.password:
                                                                         input==="confirm_password"?formErrors.confirm_password:
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
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'10% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div onClick={onSubmit} style={{
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
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Modifier</span>
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
  };
};
export default connect(mapStateToProps)(ResetPassword);
