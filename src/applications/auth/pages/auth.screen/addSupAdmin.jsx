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
import mpay from '../../../../assets/images/dashboard/mpay.png';
import divid from '../../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import ins2 from '../../../../assets/images/home/ins2.png';
import Avatar   from 'react-avatar';
import { authRegisterSuccess,authRegisterFailed } from '../../../redux/reducer/actions/auth';
import authService from '../../../services/auth.service'; 
import Loader from 'react-loader-spinner';

const AddSupAdmin = ({error}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [registerSupAdminForm, setRegisterSupAdminForm] = useState(
                        {
                            name: "", 
                            surname: "", 
                            email: "",
                            phone: "",
                            password: "",
                            confirm_password:"",
                        }   );
    const [errorMessage, setErrorMessage] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()

    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const regexPhoneNumber = /^(\++237[\s.-]?)+\(?6[5-9]{1}[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?([0-9]{3})\)?/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'name':
                if(!values[input]){
                    errorsValidation.name = "Le Nom est requis";

                }else if(values[input].length < 4){
                    errorsValidation.name = "Le nom doit avoir au moins 4 lettres";
                }else{
                    setSubmited(true);
                }
                break;
            case 'surname':
                if(!values[input]){
                    errorsValidation.surname = "Le Prénom est requis";

                }else if(values[input].length < 4){
                    errorsValidation.surname = "Le Prénom doit avoir au moins 4 lettres";
                }else{
                    setSubmited(true);
                }
                break;
            case 'email':
                if(!values[input]){
                    errorsValidation.email = "Adresse Email requise";
                }else if(!regexEmail.test(values[input])){
                    errorsValidation.email= "Adresse Email invalide";
                }else{
                    setSubmited(true);
                }
                break;
            case 'password':
                if(!values[input]){
                    errorsValidation.password = "Le mot de passe est requis";
                }else if(!regexPassword.test(values[input])){
                    errorsValidation.password = "mot de passe avec au moins 8 caractères,une majuscule,une minuscule et un chiffre";
                }else{
                    setSubmited(true);
                }
                break;
            case 'confirm_password':
                if(!values[input]){
                    errorsValidation.confirm_password = "Veuillez confirmer le mot de passe";
                }else if(values['password'] != values[input]){
                    errorsValidation.confirm_password = "Confirmation de mot de passe invalide";
                }else{
                    setSubmited(true);
                }
                break;
            case 'phone':
                if(!values[input]){
                    errorsValidation.phone = "Numero de Téléphone requis";
                }else if(values[input].length === 13 || values[input].length === 9 ){
                        if(!regexPhoneNumber.test(values[input])){
                            errorsValidation.phone = "Numéro de Téléphone invalide";
                        }else{
                            setSubmited(true);
                        }
                }
                else{
                   errorsValidation.phone = "Format de Numéro invalide"; 
                }
                break;
            case 'macAddress':
                if(!values[input]){
                    errorsValidation.macAddress = "L'Adresse MAC est requise";
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

    

    const onChangeRegisterSupAdmin = (e) => {
        setRegisterSupAdminForm({...registerSupAdminForm,  [e.target.name]: e.target.value });
        setFormErrors(validateForm(registerSupAdminForm));
        console.log(registerSupAdminForm);

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

    const onSubmit = (e) => {
        e.preventDefault();
        let supAdminRegister = {
            firstName: registerSupAdminForm.name,
            lastName: registerSupAdminForm.surname,
            email: registerSupAdminForm.email,
            username: registerSupAdminForm.name,
            password: registerSupAdminForm.password,
            phoneNumber: registerSupAdminForm.phone,
            city: "",
            address: "",
            bankCardNumber: "",
            bankCardExpirationDate: "",
            bankCardCode: "",
            parentId: "",
            birthDay: "1995-10-12",
            userType: "4",
    }  
    setFormErrors(validateForm(registerSupAdminForm));
    if(Object.keys(formErrors).length === 0 && submited){
        handleLoading(true);
        authService.registerUser(supAdminRegister)
            .then((response) => {
                if(!response.data.success){
                    dispatch(authRegisterFailed(response));
                    console.log("Response register sup not success");
                    console.log(response);
                    handleLoading(false); 
                }else{
                    dispatch(authRegisterSuccess(response));
                    console.log("Response register sup success");
                    console.log(response.data);
                    handleLoading(false);
                  
                    
                }   

            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error  Register sup");
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authRegisterFailed(error.response));
                }
            });
        
      }
    }
	return(

        <div style={{backgroundColor:'#ffce52',borderRadius:'25px 25px 25px 25px'}}>
        {showModalLoading? <ModalLoading />: ''}
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={12}>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                        
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                
                                borderRadius:'25px 25px 25px 25px',
                                width:'90%',
                                height:'450px',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'2%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 1% 0%',cursor:'pointer'}}>
                                         <div>
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'blue',
                                                fontSize:'1.2vw'}}><strong style={{marginRight:'2%'}}>Informations personnelles</strong> 
                                                <img src={ins2} width='10%'/>
                                            </div>
                                        
                                        </div>
                                     </div>
                                    </GridItem>
                                  </GridContainer>
                                  <form onSubmit={onSubmit}>
                                  <GridContainer>
                                      {Object.keys(registerSupAdminForm).map((input,index)=>{
                                        let id,type,name,label
                                        if(input==="name"){
                                            id="name";
                                            type="text";
                                            name="name";
                                            label="Nom"
                                        }else if(input==="surname"){
                                            id="surname";
                                            type="text";
                                            name="surname";
                                            label="Prénom";
                                        }else if(input==="email"){
                                            id="email";
                                            type="email";
                                            name="email";
                                            label="Email";
                                        }else if(input==="phone"){
                                            id="phone";
                                            type="text";
                                            name="phone";
                                            label="Téléphone";
                                        }else if(input==="password"){
                                            id="password";
                                            type="password";
                                            name="password";
                                            label="Mot de Passe";
                                        }
                                        else if(input==="confirm_password"){
                                          id="confirm_password"
                                          type="password"
                                          name="confirm_password"                             
                                          label="Confirmer mot de passe"
                                      }
                                        else if(input==="macAddress"){
                                            id="macAddress";
                                            type="text";
                                            name="macAddress";
                                            label="Adresse MAC";
                                        }
                                        return(
                                            <GridItem xs={12} sm={12} md={input==="macAddress"?12:6} key={index}>
                                            {label}
                                              <div style={{margin:'0% 0% 5% 0%',width:'100%'}}>
                                                  <input 
                                                    type={type}
                                                    id={id}
                                                    name={name}
                                                    onChange={onChangeRegisterSupAdmin}
                                                    value={registerSupAdminForm[input]}   

                                                    style={{
                                                        border:`${
                                                        input==="name"&&formErrors.name?'2px solid #C84941':
                                                        input==="surname"&&formErrors.surname?'2px solid #C84941':
                                                        input==="email"&&formErrors.email?'2px solid #C84941':
                                                        input==="phone"&&formErrors.phone?'2px solid #C84941':
                                                        input==="password"&&formErrors.password?'2px solid #C84941':
                                                        input==="confirm_password"&&formErrors.confirm_password?'2px solid #C84941':
                                                        input==="macAddress"&&formErrors.macAddress?'2px solid #C84941':
                                                        
                                                        '2px solid #002495'}`,
                                                        width:'100%',
                                                        height:'40px'}}/>
                
                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="name"?formErrors.name:
                                                                         input==="surname"?formErrors.surname:
                                                                         input==="email"?formErrors.email:
                                                                         input==="phone"?formErrors.phone:
                                                                         input==="macAddress"?formErrors.macAddress:
                                                                         input==="password"?formErrors.password:
                                                                         input==="confirm_password"?formErrors.confirm_password:
                                                                         
                                                                         
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                              </div>
                                            </GridItem>
                                            )
                                      })}
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'2% 0% 5% 0%',
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
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Enregistrer</span>
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
                                  </form>
                    
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
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(AddSupAdmin);
