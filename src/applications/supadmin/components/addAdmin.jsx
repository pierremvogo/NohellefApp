import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../../app/components/buttons/button';
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import GridItem from "../../../app/components/Grid/GridItem.js";
import smileauth from '../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../assets/images/im10.png';
import mpay from '../../../assets/images/dashboard/mpay.png';
import divid from '../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Footer from "../../../app/components/footer/footer.jsx";
import ins2 from '../../../assets/images/home/ins2.png';
import Avatar   from 'react-avatar';
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import Loader from 'react-loader-spinner';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess } from '../../redux/reducer/actions/auth';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const AddAdmin = ({error,
                    onChildGetAdminUser,
                    registersForm,
                    onChildCloseModal,
                    onchildOpenLoading,
                    createSuccessMessage}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [registerAdminForm, setRegisterAdminForm] = useState(
                            registersForm?registersForm:{
                            firstName: "",
                            lastName: "",
                            email: "",
                            username: "",
                            password: "",
                            confirm_password:"",
                            city: "",
                            phoneNumber: "",
                            birthDay: "",
                            address: "",
                            
                           
                        } );
    const [errorMessage, setErrorMessage] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [startDate, setStartDate] = useState(new Date());
    const [phoneValue, setPhoneValue] = useState("");
    const history = useHistory()
    const dispatch= useDispatch()

    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const regexPhoneNumber = /^(\++237[\s.-]?)+\(?6[5-9]{1}[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?([0-9]{3})\)?/;
    const regexBirthDay = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'firstName':
                if(!values[input]){
                    errorsValidation.firstName = "Le Nom est requis";

                }else if(values[input].length < 4){
                    errorsValidation.firstName = "Le nom doit avoir au moins 4 lettres";
                }else{
                    setSubmited(true);
                }
                break;
            case 'lastName':
                if(!values[input]){
                    errorsValidation.lastName = "Le Prénom est requis";

                }else if(values[input].length < 4){
                    errorsValidation.lastName = "Le Prénom doit avoir au moins 4 lettres";
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
            case 'phoneNumber':
                if(!values[input]){
                    errorsValidation.phoneNumber = "Numéro de Téléphone requis";
                }else if(values[input].length < 9){
                    errorsValidation.phoneNumber = "Format de Numéro invalide";           
                }else{
                    setSubmited(true)
                }
                break;
                break;
            case 'city':
                if(!values[input]){
                    errorsValidation.city = "La Ville est requise";

                }else{
                     setSubmited(true)
                }
                break;
            case 'address':
                if(!values[input]){
                    errorsValidation.address = "L'adresse' est requise";

                }else{
                     setSubmited(true)
                }
                break;
            case 'username':
                if(!values[input]){
                    errorsValidation.username = "Nom d'utilisateur requis";

                }else if(values[input].length < 4){
                    errorsValidation.username = "Nom d'utilisateur avec au moins 4 lettres";
                }else{
                    setSubmited(true);
                }
                break;
             case 'birthDay':
                if(!values[input]){
                    errorsValidation.birthDay = "Date de naissance requise";
                }else if(!regexBirthDay.test(values[input]) ){
                    errorsValidation.birthDay = "Format invalide";
                }else{
                    setSubmited(true);     
                }
                break;
            case 'specialities':
                console.log("SPECIALITIES VALUES");
                console.log(values);
                console.log("SPECIALITIES VALUES");
                for(var i of values[input]){
                    if(!i){
                        errorsValidation.specialities = "Spécialité Obligatoire";
                    }else{
                        setSubmited(true);     
                   }
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
                default:
                    break;
    }
    
    });

       return errorsValidation;       
  }

  const handleLoading = (isShow) => {
    onchildOpenLoading(isShow);
  }

  const handleGetAdminUser = (e) => {
      onChildGetAdminUser(e.target.name);
  }

  const onChangePhone = (number) => {
        setPhoneValue(number);
        console.log("my phone number");
        console.log(phoneValue);
        registerAdminForm.phoneNumber = phoneValue;
        console.log(registerAdminForm.phoneNumber);
    }

  function closeModal(e){
      handleGetAdminUser(e)
      dispatch(authCreateSuccess(null));
      onChildCloseModal(e.target.name);
  }

  const onChangeDate = (date) => {
        setStartDate(date);
        date = formatDate(date);
        console.log("MY DATE PICKER");
        registerAdminForm.birthDay = date;
        console.log(date);
    }

    function formatDate(date) {
        var month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    

    const onChangeRegisterAdmin = (e) => {
        setRegisterAdminForm({...registerAdminForm,  
                                [e.target.name]: e.target.name==="specialities"?
                                Array.from(e.target.selectedOptions, item => item.value):
                                e.target.value });
        setFormErrors(validateForm(registerAdminForm));
        dispatch(authRegisterFailed(null)); 
        console.log(registerAdminForm); 
        }
        

    

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(null)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let adminRegister = {
                            firstName: registerAdminForm.firstName,
                            lastName: registerAdminForm.lastName,
                            email: registerAdminForm.email,
                            username: registerAdminForm.username,
                            password: registerAdminForm.password,
                            phoneNumber: "+"+registerAdminForm.phoneNumber,
                            city: registerAdminForm.city,
                            birthDay: registerAdminForm.birthDay,
                            address: registerAdminForm.address,
                            userType: "3",
                            specialities: registerAdminForm.specialities
                        }
                         
       setFormErrors(validateForm(registerAdminForm));
       if(Object.keys(formErrors).length === 0 && submited){
            dispatch(authSetRegisterForm(registerAdminForm));
            handleLoading(true);
            console.log("form Tutor register");
            console.log(adminRegister);
            adminService.createUser(adminRegister)
            .then((response) => {
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Administrator Created Successfully, an Email has been sent to him"));
                    console.log("Response register tutor success");
                    console.log(response.data);
                    handleLoading(false);
            
            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error  Register tutor");
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                    dispatch(authRegisterFailed(error.response));
                console.log(error.response);
                
                }
            });
        }
        else{
            dispatch(authRegisterFailed(null));
            handleLoading(false);
            return; 
        }
        
       
    }
    return(

        <div style={{
                width: '50%',
                }}>
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={12}>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                        
                           
                          </GridItem>
                        </GridContainer>

                        

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                backgroundColor:'#ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'100%',
                                height:'100%',
                                
                                margin:'4%',
                                padding:'2%'
                              }}>
                              <GridContainer>
                                  <GridItem xs={12} sm={12} md={12} style={{textAlign:'right'}}>
                                   <span style={{fontSize:'20px',cursor:'pointer', marginRight:'2%'}}  onClick={(e)=>closeModal(e)}>&times;</span>
                                  </GridItem>
                              </GridContainer>
                              <GridContainer>
                                  <GridItem xs={12} sm={12} md={12}>
                                    {createSuccessMessage&&
                                        (<div className="alert alert-success" style={{width:"100%",fontSize:'1em',textAlign:'center'}} role="alert">
                                                    {createSuccessMessage}
                                         </div>)
                                    }
                                  
                                  </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 1% 0%',cursor:'pointer'}}>
                                         <div>
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'blue',
                                                fontSize:'1.2vw'}}><strong style={{marginRight:'2%'}}>Informations personnelles Administrateur</strong> 
                                                <img src={ins2} width='10%'/>
                                            </div>
                                        
                                        </div>
                                     </div>
                                    </GridItem>
                                  </GridContainer>
                                  <form onSubmit={onSubmit}>
                                  <GridContainer>
                                      {Object.keys(registerAdminForm).map((input,index)=>{
                                        let id,type,name,label
                                        if(input==="firstName"){
                                            id="firstName";
                                            type="text";
                                            name="firstName";
                                            label="Nom"
                                        }else if(input==="lastName"){
                                            id="lastName";
                                            type="text";
                                            name="lastName";
                                            label="Prénom";
                                        }else if(input==="email"){
                                            id="email";
                                            type="email";
                                            name="email";
                                            label="Email";
                                        }else if(input==="phoneNumber"){
                                            id="phoneNumber";
                                            type="text";
                                            name="phoneNumber";
                                            label="Téléphone";
                                        }
                                        else if(input==="username"){
                                            id="username";
                                            type="text";
                                            name="username";
                                            label="Nom d'utilisateur";
                                        }
                                        else if(input==="birthDay"){
                                            id="birthDay";
                                            type="text";
                                            name="birthDay";
                                            label="Date de Naissance";
                                        }
                                        else if(input==='address'){
                                          id="address"
                                          type="text"
                                          name="address"                             
                                          label="Adresse"
                                        }
                                        else if(input==='city'){
                                          id="city"
                                          type="text"
                                          name="city"                             
                                          label="Ville"
                                        }
                                        else if(input==="password"){
                                          id="password"
                                          type="password"
                                          name="password"                             
                                          label="Mot de passe"
                                        }
                                        else if(input==="confirm_password"){
                                          id="confirm_password"
                                          type="password"
                                          name="confirm_password"                             
                                          label="Confirmer mot de passe"
                                        }
                                        return(
                                            <>
                                            {input!="userType"?
                                                input==="specialities"?
                                                <GridItem xs={12} sm={6} md={4} key={index} style={{fontSize:'90%'}}>
                                                Spécialité
                                                    <div>
                                                      <select 
                                                         name="specialities" 
                                                         onChange={onChangeRegisterAdmin}
                                                         value={registerAdminForm[input]}
                                                         id="specialities"

                                                         style={{
                                                            width:'100%',
                                                            height:'41px',
                                                            border:`${
                                                            input==="specialities"&&formErrors.specialities?'2px solid #C84941':
                                                            '2px solid #002495'}`
                                                            }}
                                                            multiple>
                                                        <option value="fr">Français</option>
                                                        <option value="eng">Anglais</option>
                                                        <option value="maths">Mathématiques</option>
                                                        <option value="phy">Physiques</option>
                                                        <option value="info">Informatique</option>
                                                        <option value="ing">Science de l'ingénieur</option>
                                                      </select>
                                                      {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="specialities"?formErrors.specialities:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                    </div>
                                                </GridItem>
                                            :<GridItem xs={6} sm={6} md={4} key={index} style={{fontSize:'90%'}}>
                                            {label}
                                              <div style={{margin:'0% 0% 5% 0%',width:'100%'}}>
                                                  {input==="birthDay"?
                                                  <DatePicker
                                                    selected={startDate} 
                                                    onChange={(date) => onChangeDate(date)} 
                                                  />: input==="phoneNumber"?
                                                   <PhoneInput
                                                      country={'cm'}
                                                      value={phoneValue}
                                                      onChange={(phone) => onChangePhone(phone)}
                                                      inputStyle={{
                                                        width: "100%",
                                                        height:'40px',
                                                        color:'black',
                                                        border:`${
                                                            input==="phone"&&formErrors.phone?'2px solid #C84941':
                                                            '2px solid #002495'}`,
                                                        
                                                    }}
                                                    />:<input 
                                                        type={type}
                                                        id={id}
                                                        name={name}
                                                        onChange={onChangeRegisterAdmin}
                                                        value={registerAdminForm[input]}   

                                                        style={{
                                                            border:`${
                                                        input==="firstName"&&formErrors.firstName?'2px solid #C84941':
                                                        input==="lastName"&&formErrors.lastName?'2px solid #C84941':
                                                        input==="email"&&formErrors.email?'2px solid #C84941':
                                                        input==="username"&&formErrors.username?'2px solid #C84941':
                                                        input==="phoneNumber"&&formErrors.phoneNumber?'2px solid #C84941':
                                                        input==="city"&&formErrors.city?'2px solid #C84941':
                                                        input==="address"&&formErrors.address?'2px solid #C84941':
                                                        input==="birthDay"&&formErrors.birthDay?'2px solid #C84941':
                                                        input==="password"&&formErrors.password?'2px solid #C84941':
                                                        input==="confirm_password"&&formErrors.confirm_password?'2px solid #C84941':
                                                        
                                                        '2px solid #002495'}`,
                                                        width:'100%',
                                                        height:'40px'}}/> }
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
                                                                         {
                                                                         input==="firstName"?formErrors.firstName:
                                                                         input==="lastName"?formErrors.lastName:
                                                                         input==="email"?formErrors.email:
                                                                         input==="username"?formErrors.username:
                                                                         input==="phoneNumber"?formErrors.phoneNumber:
                                                                         input==="city"?formErrors.city:
                                                                         input==="address"?formErrors.address:
                                                                         input==="birthDay"?formErrors.birthDay:
                                                                         input==="password"?formErrors.password:
                                                                         input==="confirm_password"?formErrors.confirm_password:

                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                              </div>
                                            </GridItem>:""}
                                            
                                            </>
                                            )
                                      })}
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'5% 0% 5% 0%',
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
                                          paddingTop:'2%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Enregistrer</span>
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
                    
             </div>
        )
}
const mapStateToProps=(state)=>{
  return{
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      createSuccessMessage: state.authReducer.createSuccessMessage,
      isShowMessage: state.authReducer.isShowMessage,
      registersForm: state.authReducer.registersForm,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(AddAdmin);
