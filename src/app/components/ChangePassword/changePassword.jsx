import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Button from '../buttons/button';
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardAvatar from "../Card/CardAvatar.js";
import CardFooter from "../Card/CardFooter.js";
import GridItem from "../Grid/GridItem.js";
import smileauth from '../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../assets/images/im10.png';
import GridContainer from "../Grid/GridContainer.js";
import Footer from "../footer/footer.jsx";
import forgotsmile from '../../../assets/images/dashboard/forgot.png';
import Avatar   from 'react-avatar';
import { authChangeSuccess,authChangeFailed,authSetChangeForm} from '../../../applications/redux/reducer/actions/auth';
import authService from '../../../applications/services/auth.service'; 
import Loader from 'react-loader-spinner';

const ChangePassword = ({error,
                        changePayload,
                        changesForm,
                        user,
                        onChildCloseModal}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [changeForm, setChangeForm] = useState(changesForm?changesForm:{
                                                 currentPassword: "",
                                                 newPassword: "",
                                                 newPasswordConfirmation: ""});
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

  const closeModal = (e) => {
    dispatch(authChangeFailed(null));
    onChildCloseModal(e.target.name);
  }


    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'currentPassword':
                if(!values[input]){
                    errorsValidation.currentPassword = "Le mot de passe actuel est requis";
                }else if(!regexPassword.test(values[input])){
                    errorsValidation.currentPassword = "mot de passe avec au moins 8 caractères,une majuscule,une minuscule et un chiffre";
                }else{
                    setSubmited(true)
                }
                break;
            case 'newPassword':
                if(!values[input]){
                    errorsValidation.newPassword = "L'Ancien mot de passe est requis";
                }else if(!regexPassword.test(values[input])){
                    errorsValidation.newPassword = "mot de passe avec au moins 8 caractères,une majuscule,une minuscule et un chiffre";
                }else{
                    setSubmited(true)
                }
                break;
            case 'newPasswordConfirmation':
                if(!values[input]){
                    errorsValidation.newPasswordConfirmation = "Le Nouveau mot de passe est requis";
                }else if(!regexPassword.test(values[input])){
                    errorsValidation.newPasswordConfirmation = "mot de passe avec au moins 8 caractères,une majuscule,une minuscule et un chiffre";
                }else{
                    setSubmited(true)
                }
                break;
                default:
                    break;
    }
    
    });

       return errorsValidation;       
  }
  const onChangePasswordForm = (e) => {
        setChangeForm({...changeForm,  [e.target.name]: e.target.value });
        setFormErrors(validateForm(changeForm));
        dispatch(authChangeFailed(null));
        dispatch(authSetChangeForm(changeForm));
        console.log(changeForm);

    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(changeForm));
        if(Object.keys(formErrors).length === 0 && submited){
            handleLoading(true);
            dispatch(authSetChangeForm(changeForm));
            console.log("form Change password");
            console.log(changeForm);
            authService.changePassword(user&&user.currentUser.id,changeForm)
            .then((response) => {
                if(!response.data.success){
                    dispatch(authChangeFailed(response));
                    console.log("Change not success");
                    console.log(response);
                    handleLoading(false); 
                }else{
                    dispatch(authSetChangeForm(null));
                    dispatch(authChangeFailed(null));
                    dispatch(authChangeSuccess(response.data.message));
                    console.log("Change success");
                    console.log(response.data);
                    handleLoading(false);
                    
                }   

            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error Change Password");
                if(error.response === undefined){
                    dispatch(authChangeFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authChangeFailed(error.response));
                }
            });
        }
        
    }
    
	return(

        <div style={{
                backgroundColor:'#ffce52',
                borderRadius:'15px 15px 15px 15px',
                width:'30%'}}>
                    {showModalLoading? <ModalLoading />: ''}
                    <GridContainer>
                    

                     <GridItem xs={12} sm={12} md={12}>

                     <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                          
                           <span className='close' style={{margin:'2%', cursor:'pointer'}} onClick={(e)=>closeModal(e)}>&times;</span>
                          
                          </GridItem>
                        </GridContainer>
                    
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                          
                            {changePayload&&
                                (<div className="alert alert-success" style={{width:"100%",fontSize:'1em',textAlign:'center'}} role="alert">
                                            {changePayload}
                                 </div>)
                            }
                          
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'15px 15px 15px 15px',
                                width:'100%',
                                height:'100%',
                                backgroundColor:'#ffce52',
                                margin:'5% 0% 0% 0%',
                                padding:'2%'
                              }}>

                              {Object.keys(changeForm).map((input,index)=>{
                                let id,label, type, name; 
                                     if(input==="currentPassword"){
                                          id="currentPassword"
                                          type="text"
                                          name="currentPassword"                             
                                          label="Votre Mot de passe actuel"
                                      }
                                      else if(input==="newPassword"){
                                          id="oldPassword"
                                          type="text"
                                          name="newPassword"                             
                                          label="Votre Nouveau Mot de passe"
                                      }
                                      else if(input==="newPasswordConfirmation"){
                                          id="newPassword"
                                          type="text"
                                          name="newPasswordConfirmation"                             
                                          label="Confirmez Nouveau mot de passe"
                                      }
                                    return(
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                           <div style={{margin:'0% 0% 1% 0%'}}>
                                          <input
                                            name={input}
                                            onChange={onChangePasswordForm}
                                            value={changeForm[input]}
                                            type={type} 
                                            placeholder={label} 

                                            style={{
                                            borderRadius:'10px',
                                            border:`${
                                                        input==="currentPassword"&&formErrors.currentPassword?'2px solid #C84941':
                                                        input==="newPassword"&&formErrors.newPassword?'2px solid #C84941':
                                                        input==="newPasswordConfirmation"&&formErrors.newPasswordConfirmation?'2px solid #C84941':
                                                        '2px solid #002495'}`,
                                            width:'100%',
                                            height:'40px'}}/>

                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="currentPassword"?formErrors.currentPassword:
                                                                         input==="newPassword"?formErrors.newPassword:
                                                                         input==="newPasswordConfirmation"?formErrors.newPasswordConfirmation:
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
                                          textAlign:'center'}} onClick={onSubmit}>
                                      <div  style={{
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
                                          paddingTop:'3%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Modifier</span>
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


                          </GridItem>
                        </GridContainer>
                      </GridItem>


                    </GridContainer>
                    
			 </div>
		)
}
const mapStateToProps=(state)=>{
  return{
      error: state.authReducer.error,
      changePayload: state.authReducer.changePayload,
      changesForm: state.authReducer.changesForm,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(ChangePassword);
