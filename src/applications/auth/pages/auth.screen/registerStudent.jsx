import React, { useEffect, useRef, useState } from 'react';
import {connect, useSelector,useDispatch} from 'react-redux';
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
import ins1 from '../../../../assets/images/home/ins1.png';
import ins2 from '../../../../assets/images/home/ins2.png';
import backRegister from '../../../../assets/images/backRegister.jpg';
import mpay from '../../../../assets/images/dashboard/mpay.png';
import divid from '../../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';
import Select from 'react-select';
import ReCAPTCHA from "react-google-recaptcha";
import ReactTooltip from 'react-tooltip';
import CustomDatePicker from "../../../../app/components/DatePicker/datePicker.js";
import { authRegisterSuccess,
         authRegisterFailed,
         authShowMessage,
         authSetLoginForm,
         authSetRegisterForm } from '../../../redux/reducer/actions/auth';
import { getUserSuccess,getUserFailed } from '../../../redux/reducer/actions/users';
import authService from '../../../services/auth.service'; 
import Loader from 'react-loader-spinner';
import PartialLogin from '../../../auth/pages/auth.screen/partialLogin.jsx';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const RegisterStudent = ({  error,
                            user,
                            registersForm,
                            }) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    
    const [registerStudent, setRegisterStudent] = useState(registersForm?registersForm:
           {confirm_age:false, 
            level:"",
            name:"",
            surname:"",
            email:"",
            username:"",
            phone:"",
            birthDay:"",
            ville:"",
            address:"",
            password:"",
            confirm_password:"",
            recapchatCode:"",
            check_Condition:false});
    const [isLoginForm, setIsLoginForm] = useState(true);
     const [datePick, setDatePick] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [showModalPartial, setShowModalPartial] = useState(false);
    const [studentRegist, setStudentRegist] = useState({});
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [checkboxAge, setCheckboxAge] = useState(false);
    const [checkboxCondition, setCheckboxCondition] = useState(false);
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("flex");
    const [startDate, setStartDate] = useState(new Date());
    const [phoneValue, setPhoneValue] = useState("");
    const history = useHistory()
    const dispatch= useDispatch()
    const inputRef = useRef(null);


    useEffect(()=>{
        console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && submited){
        console.log(registerStudent);
    }
    },[formErrors]);


    const onChangeDate = (date) => {
        setStartDate(date);
        date = formatDate(date);
        console.log("MY DATE PICKER");
        registerStudent.birthDay = date;
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

    const onChangePhone = (number) => {
        setPhoneValue(number);
        console.log("my phone number");
        console.log(phoneValue);
        registerStudent.phone = phoneValue;
        console.log(registerStudent.phone);
    }
    
  const ModalPartialLogin = () => {
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
            bottom:'0px',
            right:'0'
            }}
      >
            <div className="containlog" id='myContain'>
                <div style={{display:'inline-block', fontSize:'100%', width:'100%'}}>
                    <span className='close' style={{fontSize:'30px'}} onClick={(e)=>closeModal(e)}>&times;</span>
                    <PartialLogin  
                            onChildLoading={handleLoading} 
                            onChildCloseModal={closeModal}
                            studentForRegister={studentRegist} />
                </div>
                
            </div>
          
      </div>
    )
  };
   
   const closeModal = (e) => {
    dispatch(authSetLoginForm(null));
    setShowModalPartial(false);
   }

   

     const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "10000%",
            display: displayAsk,
            zIndex: "900000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            right:"0px",
            bottom:"0px",
            }}
      >
            <div
                style={{
                    width: "10%",
                    height: "30%",
                    zIndex: "300000",
                    display: "flex",
                    position: "fixed",
                    top: "35%",
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

  const handleCancel = () => {
    dispatch(authSetRegisterForm(null));
    history.push("/");
  }
     
    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const regexPhoneNumber = /^(\++[0-9]{3}[\s.-]?)?([0-9]+)+\)?/;
    const regexBirthDay = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
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
            case 'username':
                if(!values[input]){
                    errorsValidation.username = "Nom d'utilisateur requis";

                }else if(values[input].length < 4){
                    errorsValidation.username = "Nom d'utilisateur avec au moins 4 lettres";
                }else{
                    setSubmited(true);
                }
                break;
            case 'phone':
                if(!values[input]){
                    errorsValidation.phone = "Numéro de Téléphone requis";
                }else if(values[input].length < 9){
                    errorsValidation.phone = "Format de Numéro invalide";           
                }else{
                    setSubmited(true)
                }
                break;
                break;
            case 'ville':
                if(!values[input]){
                    errorsValidation.ville = "La Ville est requise";

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
            case 'birthDay':
                if(!values[input]){
                    errorsValidation.birthDay = "Date de naissance requise";
                }else if(!regexBirthDay.test(values[input]) ){
                    errorsValidation.birthDay = "Format invalide";
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
            case 'level':
                if(!values[input]){
                    errorsValidation.level = "Votre Niveau est requis";
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

    
    function onChange(value) {
       console.log("Captcha value:", value);
    }

    const options = [
    { value: 'chocolate', label: 'Niveau1' },
    { value: 'strawberry', label: 'Niveau2' },
    { value: 'vanilla', label:  'Niveau3'}
    ]
    const onChangeRegisterStudent = (e) => {
        setRegisterStudent({...registerStudent, [e.target.name]: 
                    e.target.value==="checkAge"||
                    e.target.value==="checkCondition"?
                    e.target.checked:
                    e.target.value })
        setFormErrors(validateForm(registerStudent)); 
        dispatch(authRegisterFailed(null));  
        dispatch(authSetRegisterForm(registerStudent));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let studentRegister = {
            firstName: registerStudent.name,
            lastName: registerStudent.surname,
            email: registerStudent.email,
            username: registerStudent.username,
            password: registerStudent.password,
            phoneNumber: "+"+registerStudent.phone,
            city: registerStudent.ville,
            address: registerStudent.address,
            bankCardNumber: registerStudent.numCardNumber,
            bankCardExpirationDate: registerStudent.cardExpireYear+"-"+registerStudent.cardExpireMonth,
            bankCardCode: registerStudent.cardCode,
            parentId: "",
            birthDay: registerStudent.birthDay,
            userType: "0",
            level: registerStudent.level,
    }
        setFormErrors(validateForm(registerStudent));
        if(Object.keys(formErrors).length === 0 && submited){
            if(registerStudent.check_Condition){
            dispatch(authSetRegisterForm(registerStudent));
            if(registerStudent.confirm_age){
            handleLoading(true);
            console.log("form Student register");
            console.log(studentRegister);
            authService.registerUser(studentRegister)
            .then((response) => {
                if(!response.data.success){
                    dispatch(authRegisterFailed(response));

                    console.log("Response register student  not success");
                    console.log(response);
                    handleLoading(false); 
                    
                }else{
                    dispatch(authRegisterFailed(null));
                    dispatch(authRegisterSuccess(response));
                    dispatch(authSetRegisterForm(null));

                    console.log("Response register student success");
                    console.log(response.data);
                    handleLoading(false);
                    history.push("/?query=l");
                    
                } 
            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error  Register student");
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authRegisterFailed(error.response));
                }
            });
        }else{
            setShowModalPartial(true,setStudentRegist(studentRegister));
        }
            
        }else{
            dispatch(authRegisterFailed("Please Accept Terms and Conditions of confidentiality")) ;
        }}else{
            dispatch(authRegisterFailed(null));
            handleLoading(false);
            return; 
        }
            
        
    }
    return(
        <div>

        {showModalLoading? <ModalLoading />: ''}
        {showModalPartial? <ModalPartialLogin />: ''}
        <div style={{backgroundColor:'#FBAB0D',
                     borderRadius:'25px 25px 25px 25px',
                     width:'50%',
                     height:'100%',
                     margin: '5% 5% 0% 25%',
                     position: "relative"
                     
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
                                
                                borderRadius:'25px 25px 25px 25px',
                                width:'100%',
                                height:'100%',
                                backgroundColor:'#FBAB0D',
                                padding:'1% 5% 5% 5%'
                                
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'0% 0% 1% 0%',cursor:'pointer', fontSize:'100%'}}>
                                         <span style={{float:'left',marginRight:'2%'}} onClick={(e)=>history.push('/?query=login')}><u>Se connecter</u></span>
                     
                                         <span className='close' style={{float:'right',fontSize:'30px'}}></span>
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
                                  <GridContainer>
                                    <GridItem xs={12} sm={6} md={6}>
                                       <div style={{margin:'0% 0% 0% 0%',color:'blue'}}>
                                          <span style={{marginRight:'5%',fontSize:'90%'}}>Avez-vous 18 ans?</span>
                                          <img src={ins1} width='12%' />
                                      </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={6} md={6}>
                                       <div style={{margin:'0% 0% 5% 0%',fontSize:'90%'}}>
                                            <span style={{color:'blue'}}>Quel est votre niveau?</span>
                                          
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    {Object.keys(registerStudent).map((input,index)=>{
                                        return(
                                            <>
                                            {input==="confirm_age"?  
                                            <GridItem xs={12} sm={6} md={6} key={index} style={{fontSize:'90%'}}>
                                                <div>
                                                    <input 
                                                        type='checkbox' 
                                                        name="confirm_age"
                                                        id="confirm_age"
                                                        value={"checkAge"}
                                                        onChange={onChangeRegisterStudent}
                                                        autoComplete="off"

                                                        style={{
                                                        border:'2px solid #002495',
                                                        width:'15%',
                                                        height:'15px'}} /> 

                                                    <span id="confirm_age" style={{color:'blue',fontSize:'100%'}}>Je confirme avoir plus de 18 ans</span>
                                            
                                                </div>

                                            </GridItem>: 
                                            input==="level"? 
                                                <GridItem xs={12} sm={6} md={6} key={index}>
                                                    <div>
                                                      <select 
                                                         name="level" 
                                                         onChange={onChangeRegisterStudent}
                                                         value={registerStudent[input]}
                                                         id="level"

                                                         style={{
                                                            width:'60%',
                                                            height:'40px',
                                                            border:`${
                                                            input==="level"&&formErrors.level?'2px solid #C84941':
                                                            '2px solid #002495'}`
                                                            }}
                                                            >
                                                        <option value=""></option>
                                                        <option value="0">6ieme</option>
                                                        <option value="1">5ieme</option>
                                                        <option value="2">4ieme</option>
                                                        <option value="3">3ieme</option>
                                                        <option value="4">2nd</option>
                                                        <option value="5">1ere</option>
                                                        <option value="6">Tle</option>
                                                      </select>
                                                      {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="level"?formErrors.level:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                    </div>
                                                </GridItem>

                                            : ""}

                                        </>
                                        )
                                })}
                                   
                                   
                                  </GridContainer>


                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div>
                                            <div style={{
                                                margin:'0% 2% 0% 0%',
                                                color:'blue',
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Informations personnelles</strong> 
                                                <img src={ins2} width='5%'/>
                                            </div>
                                        
                                        </div>
                                       
                                    </GridItem>
                                  </GridContainer>




                                  <GridContainer>
                                      {Object.keys(registerStudent).map((input,index)=>{
                                        let id,label,type,name,keySite; 
                                        if(input==="name"){
                                          id="name"
                                          type="text"
                                          name="name"                                 
                                          label="Nom"
                                      }else if(input==='surname'){
                                          id="surname"
                                          type="text"
                                          name="surname"                            
                                          label="Prénom"
                                      }else if(input==="email"){
                                          id="email"
                                          type="email"
                                          name="email"                             
                                          label="Email"
                                      }else if(input==="username"){
                                          id="username"
                                          type="text"
                                          name="username"                             
                                          label="Nom d'utilisateur"
                                      }else if(input==="phone"){
                                          id="phone"
                                          type="text"
                                          name="phone"                            
                                          label="Téléphone"
                                      }else if(input==="birthDay"){
                                          id="birthDay"
                                          type="text"
                                          name="birthDay"                            
                                          label="Date de Naissance"
                                      }else if(input==="ville"){
                                          id="ville"  
                                          type="text"
                                          name="ville"                            
                                          label="Ville"
                                      }else if(input==='address'){
                                          id="address"
                                          type="text"
                                          name="address"                             
                                          label="Adresse"
                                      }else if(input==="password"){
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
                                      else if(input==="recapchatCode"){
                                          id="recapchat_Code"
                                          name="recapchat_Code" 
                                          keySite="125482"                            
                                      }else{
                                        return;
                                      }
                                      return(

                                       <GridItem xs={12} sm={input==="password"||input==="confirm_password"?6:4} md={4} key={index}>
                                        {input!="numCardNumber"&&input!="cardExpireMonth"&&input!="cardExpireYear"&&input!="cardCode"&&input!="check_Condition"?
                                        <div style={{width:'100%',cursor:'pointer',fontSize:'90%'}}>
                                            {label}
                                         {input==="recapchatCode"? 

                                         <div style={{
                                                margin:'9% 0% 0% 0%',
                                                width:'100%',
                                                height:'45px',
                                                backgroundColor:'#c7d0d8'}}>
                                            {/* <ReCAPTCHA
                                                sitekey={keySite}
                                                onChange={onChange}
                                            />*/}
                                         </div>
                                         : <div>{input==="birthDay"?
                                            <div>
                                            <style>
                                                {`.date-picker input {
                                                  width: 100%,
                                                  height: 40px
                                                }`}
                                            </style>
                                            <DatePicker
                                                selected={startDate} 
                                                onChange={(date) => onChangeDate(date)} 
                                                wrapperClassName="date-picker"
                                            /></div> : input==="phone"?
                                            <div>
                                            <PhoneInput
                                              country={'lu'}
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
                                            /></div>: 
                                            <input 
                                            type={type} 
                                            placeholder={""}
                                            id={id}
                                            name={name} 
                                            value={registerStudent[input]}
                                            onChange={onChangeRegisterStudent}
                                            autoComplete="off"

                                            style={{
                                                border:`${
                                                        input==="name"&&formErrors.name?'2px solid #C84941':
                                                        input==="surname"&&formErrors.surname?'2px solid #C84941':
                                                        input==="email"&&formErrors.email?'2px solid #C84941':
                                                        input==="username"&&formErrors.username?'2px solid #C84941':
                                                        input==="phone"&&formErrors.phone?'2px solid #C84941':
                                                        input==="ville"&&formErrors.ville?'2px solid #C84941':
                                                        input==="address"&&formErrors.address?'2px solid #C84941':
                                                        input==="birthDay"&&formErrors.birthDay?'2px solid #C84941':
                                                        input==="password"&&formErrors.password?'2px solid #C84941':
                                                        input==="confirm_password"&&formErrors.confirm_password?'2px solid #C84941':
                                                
                                                        '2px solid #002495'}`,
                                                width:'100%',
                                                height:'40px'}}
                                            />}

                                        
                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="name"?formErrors.name:
                                                                         input==="surname"?formErrors.surname:
                                                                         input==="email"?formErrors.email:
                                                                         input==="username"?formErrors.username:
                                                                         input==="phone"?formErrors.phone:
                                                                         input==="ville"?formErrors.ville:
                                                                         input==="address"?formErrors.address:
                                                                         input==="birthDay"?formErrors.birthDay:
                                                                         input==="password"?formErrors.password:
                                                                         input==="confirm_password"?formErrors.confirm_password:
                                                                         
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}




                                        </div>
                                        }

                                         
                                        </div>
                                        :""}
                                         
                                        </GridItem>
                                        )
                                        
                                      })} 
                                  </GridContainer>


                                   <GridContainer>
                                   {Object.keys(registerStudent).map((input,index)=>{
                                    return(
                                        <>
                                        {input==="check_Condition"? 
                                         <GridItem xs={12} sm={12} md={12} key={index}>
                                           <div style={{margin:'0%'}}>
                                              <input 
                                                  type='checkbox'
                                                  name="check_Condition"
                                                  value={"checkCondition"}
                                                  onChange={onChangeRegisterStudent}
                                                  autoComplete="off"

                                                   />
                                              <span style={{marginLeft:'2%',fontSize:'70%'}}>En cliquant sur "M'inscrire" je confirme avoir pris connaissance des termes et
                                                conditions d'utilisation de Online Nohellef</span>
                                          </div>
                                        </GridItem>
                                        : ""}
                                        
                                        </>
                                        )
                                   })}
                                    
                                  </GridContainer>

                                   <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={6} md={6}>
                                    
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'0% 0% 0% 0%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#5271ff',
                                          borderRadius: '15px',
                                          borderBottom: '5px solid #002495',
                                          borderRight:  '5px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'2%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'20px',color:'white'}}>M'inscrire</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={6}>
                                    
                                    <div onClick={handleCancel} style={{cursor:'pointer',
                                          margin:'0% 0% 0% 0%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#5271ff',
                                          borderRadius: '15px',
                                          borderBottom: '5px solid #002495',
                                          borderRight:  '5px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'2%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'20px',color:'white'}}>Annuler</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>
                                  </GridContainer>

                    
                              </div>


                          </GridItem>
                        </GridContainer>
                      </GridItem>


                    </GridContainer>
                    
             </div>
             </div>
        )
}
const mapStateToProps=(state)=>{
  return{
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      isShowMessage: state.authReducer.isShowMessage,
      registersForm: state.authReducer.registersForm,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(RegisterStudent);
