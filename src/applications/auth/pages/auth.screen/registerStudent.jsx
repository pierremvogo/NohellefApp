import React, { useEffect, useRef, useState } from 'react';
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
import ins1 from '../../../../assets/images/home/ins1.png';
import ins2 from '../../../../assets/images/home/ins2.png';
import mpay from '../../../../assets/images/dashboard/mpay.png';
import divid from '../../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';
import Select from 'react-select';
import ReCAPTCHA from "react-google-recaptcha";
import useForm from "../../../../hooks/useForm";
import ReactTooltip from 'react-tooltip';
import { authRegisterSuccess,authRegisterFailed } from '../../../redux/reducer/actions/auth';
import { getUserSuccess,getUserFailed } from '../../../redux/reducer/actions/users';
import authService from '../../../services/auth.service'; 

const RegisterStudent = ({  error,
                            user,
                            onChildCloseModal,
                            onChildLoading,
                            onChildClickLogin,
                            onChildRequireParent,
                            onChildLoginNewUser
                            }) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    
   const [registerStudent, setRegisterStudent] = useState(
           {confirm_age:false, 
            level:"sixieme",
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
            numCardNumber:"",
            cardExpireMonth:"1",
            cardExpireYear:"",
            cardCode:"",
            check_Condition:false});
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [checkboxAge, setCheckboxAge] = useState(false);
    const [checkboxCondition, setCheckboxCondition] = useState(false);
    const history = useHistory()
    const dispatch= useDispatch()
    const inputRef = useRef(null);

    useEffect(()=>{
        console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && submited){
        console.log(registerStudent);
    }
    },[formErrors]);
    
    const clickHandlerCloseModal=(e)=>{
            onChildCloseModal(e.target.name);
    }
    const clickHandlerConnectModal=(e)=>{
        onChildClickLogin(e.target.name);
    }
    const clickHandlerRequireParent=(student)=>{
        onChildRequireParent(student);
    }
    const handleLoading = (isShow,result,type) => {
        onChildLoading(isShow,result,type);
    }
    const loginNewUser = (e) => {
        onChildLoginNewUser(e.target.name);
    }
     
    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const regexPhoneNumber = /^(\++237[\s.-]?)+\(?6[5-9]{1}[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?([0-9]{3})\)?/;
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
            case 'numCardNumber':
                if(!values[input]){
                    errorsValidation.numCardNumber = "Le numéro de la carte est requis";
                }else{
                    setSubmited(true);
                }
                break;
            case 'cardExpireYear':
                if(!values[input]){
                    errorsValidation.cardExpireYear = "Année d'expiration requise";
                }else{
                    setSubmited(true);
                }
                break;
            case 'cardCode':
                if(!values[input]){
                    errorsValidation.cardCode = "code requis pour votre carte";
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
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let studentRegister = {
            firstName: registerStudent.name,
            lastName: registerStudent.surname,
            email: registerStudent.email,
            username: registerStudent.username,
            password: registerStudent.password,
            phoneNumber: registerStudent.phone,
            city: registerStudent.ville,
            address: registerStudent.address,
            bankCardNumber: registerStudent.numCardNumber,
            bankCardExpirationDate: registerStudent.cardExpireYear+"-"+registerStudent.cardExpireMonth,
            bankCardCode: registerStudent.cardCode,
            parentId: "",
            birthDay: registerStudent.birthDay,
            userType: "0",
    }
        setFormErrors(validateForm(registerStudent));
        if(Object.keys(formErrors).length === 0 && submited){
            if(registerStudent.confirm_age){
            setErrorMessage(true);
            handleLoading(true,'rs');
            console.log("form Student register");
            console.log(studentRegister);
            authService.registerUser(studentRegister)
            .then((response) => {
                if(!response.data.success){
                    dispatch(authRegisterFailed(response));
                    console.log("Response register student  not success");
                    console.log(response);
                    handleLoading(false,'rs'); 
                    
                }else{
                    dispatch(authRegisterSuccess(response));
                    console.log("Response register student success");
                    console.log(response.data);
                    handleLoading(false,'rs');
                    loginNewUser(e);
                    
                } 
            })
            .catch((error) => {
                handleLoading(false,'rs');
                console.log("Error  Register student");
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authRegisterFailed(error.response));
                }
            });
        }else{
            clickHandlerRequireParent(studentRegister);
        }
            
        }else{
            handleLoading(false,'rs');
            return; 
        }
        
    }
    return(

        <div style={{backgroundColor:'#FBAB0D',
                     borderRadius:'25px 25px 25px 25px',
                     position:'absolute',
                     width:'110%',
                     top:'-300px'
                     
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
                                height:'675px',
                                backgroundColor:'#FBAB0D',
                                padding:'1% 5% 2% 5%'
                                
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'0% 0% 1% 0%',cursor:'pointer', fontSize:'100%'}}>
                                         <span style={{float:'left',marginRight:'2%'}} onClick={(e)=>clickHandlerConnectModal(e)}>Se connecter</span>
                                         <span style={{color:'blue'}}><u>S'inscrire</u></span>
                                         <span className='close' style={{float:'right'}} onClick={(e)=>clickHandlerCloseModal(e)}>&times;</span>
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
                                  <GridContainer>
                                    <GridItem xs={12} sm={6} md={6}>
                                       <div style={{margin:'0% 0% 0% 0%',color:'blue'}}>
                                          <span style={{marginRight:'5%',fontSize:'100%'}}>Avez-vous 18 ans?</span>
                                          <img src={ins1} width='12%' />
                                      </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={6} md={6}>
                                       <div style={{margin:'0% 0% 5% 0%',fontSize:'100%'}}>
                                            <span style={{color:'blue'}}>Quel est votre niveau?</span>
                                          
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    {Object.keys(registerStudent).map((input,index)=>{
                                        return(
                                            <>
                                            {input==="confirm_age"?  
                                            <GridItem xs={12} sm={6} md={6} key={index}>
                                                <div>
                                                    <input 
                                                        type='checkbox' 
                                                        name="confirm_age"
                                                        id="confirm_age"
                                                        value={"checkAge"}
                                                        onChange={onChangeRegisterStudent}

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
                                                         id="level">
                                                   
                                                        <option value="sixieme">6ieme</option>
                                                        <option value="cinquieme">5ieme</option>
                                                        <option value="quatrieme">4ieme</option>
                                                        <option value="troisieme">3ieme</option>
                                                        <option value="seconde">2nd</option>
                                                        <option value="premiere">1ere</option>
                                                        <option value="terminale">Tle</option>
                                                      </select>
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
                                        <div style={{width:'100%',cursor:'pointer'}}>
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
                                         : <div><input 
                                            type={type} 
                                            placeholder={input==="birthDay"?"YYYY-MM-DD":""}
                                            id={id}
                                            name={name} 
                                            value={registerStudent[input]}
                                            onChange={onChangeRegisterStudent}
                                            style={{
                                                border:`${
                                                        input==="name"&&formErrors.name?'2px solid #C84941':
                                                        input==="surname"&&formErrors.surname?'2px solid #C84941':
                                                        input==="email"&&formErrors.email?'2px solid #C84941':
                                                        input==="username"&&formErrors.username?'2px solid #C84941':
                                                        input==="phone"&&formErrors.phone?'2px solid #C84941':
                                                        input==="birthDay"&&formErrors.birthDay?'2px solid #C84941':
                                                        input==="password"&&formErrors.password?'2px solid #C84941':
                                                        input==="confirm_password"&&formErrors.confirm_password?'2px solid #C84941':
                                                
                                                        '2px solid #002495'}`,
                                                width:'100%',
                                                height:'40px'}}
                                            />

                                        
                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="name"?formErrors.name:
                                                                         input==="surname"?formErrors.surname:
                                                                         input==="email"?formErrors.email:
                                                                         input==="username"?formErrors.username:
                                                                         input==="phone"?formErrors.phone:
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
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{
                                        margin:'0% 2% 0% 0%',
                                        color:'blue',
                                        fontSize:'1.5vw'}}><strong style={{marginRight:'2%'}}>Informations bancaire</strong>
                                         <img src={mpay} width='5%'/>
                                        </div>
                                            
                                    </GridItem>
                                  </GridContainer>




                                  <GridContainer>
                                  {Object.keys(registerStudent).map((input,index)=>{
                                    let id,label, type, name; 
                                        if(input==="numCardNumber"){
                                          id="numCardNumber"
                                          type="text"
                                          name="numCardNumber"                                 
                                          label="Numéro de carte"
                                      }else if(input==='cardExpireMonth'){
                                          id="cardExpireMonth"
                                          type="text"
                                          name="cardExpireMonth"                            
                                          label="MM"
                                      }else if(input==="cardExpireYear"){
                                          id="cardExpireYear"
                                          type="text"
                                          name="cardExpireYear"                             
                                          label="YY"
                                      }
                                      else if(input==="cardCode"){
                                          id="cardCode"
                                          type="text"
                                          name="cardCode"                             
                                          label="Code"
                                      }else{
                                        return;
                                      }
                                      return(
                                        <GridItem xs={12} sm={6} md={3} key={index}> 
                            
                                            {input==="numCardNumber"||input==="cardExpireMonth"||input==="cardExpireYear"||input==="cardCode"?
                                           
                                            input==="cardExpireMonth"?

                                                <div>
                                                  Mois d'expiration
                                                <select 
                                                    name={name}
                                                    onChange={onChangeRegisterStudent}
                                                    value={registerStudent[input]} 
                                                    id={id}>
                                                    <option value="1">Janvier</option>
                                                    <option value="2">Février</option>
                                                    <option value="3">Mars</option>
                                                    <option value="4">Avril</option>
                                                    <option value="5">Mai</option>
                                                    <option value="6">Juin</option>
                                                    <option value="7">Juillet</option>
                                                    <option value="8">Août</option>
                                                    <option value="9">Septembre</option>
                                                    <option value="10">Octobre</option>
                                                    <option value="11">Novembre</option>
                                                    <option value="12">Décembre</option>
                                                </select>
                                                </div>: input==="cardExpireYear"?
                                                <div>
                                                  Année d'expiration
                                                  <input 
                                                    type={type} 
                                                    id={id}
                                                    name={name}
                                                    value={registerStudent[input]}
                                                    onChange={onChangeRegisterStudent}
                                                    placeholder={label}
                                                    style={{
                                                    border:`${
                                                        input==="cardExpireYear"&&formErrors.cardExpireYear?'2px solid #C84941':
                                                        '2px solid #002495'}`,
                                                    width:'100%',
                                                    height:'40px'}}
                                                /> 
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
                                                                         input==="cardExpireYear"?formErrors.cardExpireYear:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                </div>

                                            :<div style={{width:'100%',cursor:'pointer'}}>
                                              {label}
                                                <input 
                                                    type={type} 
                                                    id={id}
                                                    name={name}
                                                    value={registerStudent[input]}
                                                    onChange={onChangeRegisterStudent}

                                                    style={{
                                                    border:`${
                                                        input==="numCardNumber"&&formErrors.numCardNumber?'2px solid #C84941':
                                                        input==="cardCode"&&formErrors.cardCode?'2px solid #C84941':
                                                        '2px solid #002495'}`,
                                                    width:'100%',
                                                    height:'40px'}}
                                                /> 
                                               
                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="numCardNumber"?formErrors.numCardNumber:
                                                                         input==="cardCode"?formErrors.cardCode:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )} 
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
                                                  onChange={onChangeRegisterStudent} />
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
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'0% 20% 0% 20%',
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
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(RegisterStudent);
