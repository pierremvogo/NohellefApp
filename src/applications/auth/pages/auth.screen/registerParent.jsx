import React, { useEffect, useState } from 'react';
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
import ins1 from '../../../../assets/images/home/ins1.png';
import ins2 from '../../../../assets/images/home/ins2.png';
import go1 from '../../../../assets/images/home/go1.png';
import mpay from '../../../../assets/images/dashboard/mpay.png';
import divid from '../../../../assets/images/dashboard/divid.png'
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';
import Select from 'react-select';
import ReactTooltip from 'react-tooltip';
import { authRegisterSuccess, authRegisterFailed, authShowMessage, authSetRegisterForm } from '../../../redux/reducer/actions/auth';
import authService from '../../../services/auth.service'; 

const RegisterParent = ({error,
                         user,
                         registersForm,
                         onChildCloseModal,
                         onChildLoading,
                         onChildClickLogin,
                         onChildLoginNewUser
                         }) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [registerParent, setRegisterParent] = useState(
           registersForm?registersForm:{name:"", 
            surname:"",
            email:"",
            username:"",
            phone:"",
            birthDay:"",
            ville:"",
            address:"",
            password:"",
            confirm_password:"",
            numCardNumber:"",
            cardExpireMonth:"1",
            cardExpireYear:"",
            cardCode:""})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
   
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [sm,setSm] = useState(12);
    const [md, setMd] = useState(4);
    const history = useHistory()
    const dispatch= useDispatch()

    useEffect(()=>{

    },[])
    const clickHandlerCloseModal=(e)=>{
            onChildCloseModal(e.target.name);
    }
    
    const clickHandlerConnectModal=(e)=>{
        onChildClickLogin(e.target.name);
    }
    const handleLoading = (isShow,type) => {
        onChildLoading(isShow,type);
    }
    const loginNewUser = (e) => {
        onChildLoginNewUser(e);
    }
    
    const options = [
    { value: 'chocolate', label: 'Niveau1' },
    { value: 'strawberry', label: 'Niveau2' },
    { value: 'vanilla', label:  'Niveau3'}
  ]
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
                     setSubmited(true)
                }
                break;
            case 'surname':
                if(!values[input]){
                    errorsValidation.surname = "Le Prénom est requis";

                }else if(values[input].length < 4){
                    errorsValidation.surname = "Le Prénom doit avoir au moins 4 lettres";
                }else{
                     setSubmited(true)
                }
                break;
            case 'email':
                if(!values[input]){
                    errorsValidation.email = "Adresse Email requise";
                }else if(!regexEmail.test(values[input])){
                    errorsValidation.email= "Adresse Email invalide";
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
                     setSubmited(true)
                }
                break;
            case 'phone':
                if(!values[input]){
                    errorsValidation.phone = "Numero de Téléphone requis";
                }else if(values[input].length === 13 || values[input].length === 9 ){
                        if(!regexPhoneNumber.test(values[input])){
                            errorsValidation.phone = "Numéro de Téléphone invalide";
                        }else{
                             setSubmited(true)
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
            case 'numCardNumber':
                if(!values[input]){
                    errorsValidation.numCardNumber = "Le numéro de la carte est requis";
                }else{

                }
                break;
            case 'cardExpireYear':
                if(!values[input]){
                    errorsValidation.cardExpireYear = "Année d'expiration requise";
                }else{
                    setSubmited(true)
                }
                break;
            case 'cardCode':
                if(!values[input]){
                    errorsValidation.cardCode = "code requis pour votre carte";
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
  const onChangeRegisterParent = (e) => {
        setRegisterParent({...registerParent,  [e.target.name]: e.target.value })
        setFormErrors(validateForm(registerParent));
        dispatch(authRegisterFailed(null)); 
        dispatch(authSetRegisterForm(registerParent));
        console.log(registerParent);
    }
   const onSubmit = (e) => {
    e.preventDefault();
        let parentRegister = {
            firstName: registerParent.name,
            lastName: registerParent.surname,
            email: registerParent.email,
            username: registerParent.username,
            password: registerParent.password,
            phoneNumber: registerParent.phone,
            city: registerParent.ville,
            address: registerParent.address,
            bankCardNumber: registerParent.numCardNumber,
            bankCardExpirationDate: registerParent.cardExpireYear+"-"+registerParent.cardExpireMonth,
            bankCardCode: registerParent.cardCode,
            parentId: "",
            birthDay: registerParent.birthDay,
            userType: "1",
    }
        setFormErrors(validateForm(registerParent));
        if(Object.keys(formErrors).length === 0 && submited){
            dispatch(authSetRegisterForm(registerParent));

            handleLoading(true,'rp');
            console.log("form Parent register");
            console.log(parentRegister);
            authService.registerUser(parentRegister)
            .then((response) => {
                if(!response.data.success){
                    dispatch(authRegisterFailed(response));
                    console.log("Response register parent  not success");
                    console.log(response);
                    handleLoading(false,'rp'); 
                }else{
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterSuccess(response.data));
                    dispatch(authRegisterFailed(null));

                    console.log("Response register parent success");
                    console.log(response.data);
                    handleLoading(false,'rp');
                    loginNewUser(e);
                    
                }   

            })
            .catch((error) => {
                handleLoading(false,'rp');
                console.log("Error  Register parent");
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
            handleLoading(false,'rp');
            return; 
        }
    }
    return(

        <div style={{backgroundColor:'#FBAB0D',
                     borderRadius:'25px 25px 25px 25px',
                     width:'50%',
                     position: 'fixed'
                     
                     }}>
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
                                width:'100%',
                                height:'100%',
                                backgroundColor:'#ffce52',
                                padding:'1% 5% 2% 5%'
                                
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'0% 0% 1% 0%',cursor:'pointer'}}>
                                         <span style={{float:'left',marginRight:'2%'}} onClick={(e)=>clickHandlerConnectModal(e)}>Se connecter</span>
                                         <span style={{color:'blue'}}><u>S'inscrire</u></span>
                                         <span className='close' style={{float:'right'}} onClick={(e)=>clickHandlerCloseModal(e)}>&times;</span>
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
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div>
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'blue',
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Informations personnelles</strong> 
                                                <img src={ins2} width='3%'/>
                                            </div>
                                        
                                        </div>
                                       
                                    </GridItem>
                                  </GridContainer>
                                  <GridContainer>
                                      {Object.keys(registerParent).map((input,index)=>{
                                        let id,label, type, name; 
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
                                      return(

                                       <GridItem xs={12} sm={input==="password"||input==="confirm_password"?6:4} md={4} key={index}>
                                        {input!="numCardNumber"&&input!="cardExpireMonth"&&input!="cardExpireYear"&&input!="cardCode"?
                                        <div style={{width:'100%',cursor:'pointer', fontSize:'90%'}}>
                                            {label}
                                         <input 
                                            type={type} 
                                            id={id}
                                            name={name} 
                                            placeholder={input==="birthDay"?"YYYY-MM-DD":""}
                                            value={registerParent[input]}
                                            onChange={onChangeRegisterParent}
                                            autoComplete="off"


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
                                        :""}
                                         
                                        </GridItem>
                                        )
                                        
                                      })} 
                                  </GridContainer>
                                  
                                   <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{
                                        margin:'2% 2% 0% 0%',
                                        color:'blue',
                                        fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Informations bancaire</strong>
                                         <img src={mpay} width='5%'/>
                                        </div>
                                            
                                    </GridItem>
                                  </GridContainer>
                                  <GridContainer>
                                  {Object.keys(registerParent).map((input,index)=>{
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
                                        <GridItem xs={12} sm={12} md={3} key={index} style={{fontSize:'90%'}}> 
                            
                                            {input==="numCardNumber"||input==="cardExpireMonth"||input==="cardExpireYear"||input==="cardCode"?
                                           
                                            input==="cardExpireMonth"?

                                                <div style={{fontSize:'90%'}}>
                                                  Mois d'expiration
                                                <select 
                                                    name={name} 
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
                                                <div style={{fontSize:'90%'}}>
                                                  Année d'expiration
                                                  <input 
                                                    type={type} 
                                                    id={id}
                                                    name={name}
                                                    value={registerParent[input]}
                                                    onChange={onChangeRegisterParent}
                                                    placeholder={label}
                                                    autoComplete="off"


                                                    style={{
                                                    border:`${
                                                        input==="cardExpireYear"&&formErrors.cardExpireYear?'2px solid #C84941':
                                                        '2px solid #002495'}`,
                                                    width:'100%',
                                                    height:'40px'}}
                                                /> 
                                                
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

                                            :<div style={{width:'100%',cursor:'pointer', fontSize:'90%'}}>
                                              {label}
                                                <input 
                                                    type={type} 
                                                    id={id}
                                                    name={name}
                                                    value={registerParent[input]}
                                                    onChange={onChangeRegisterParent}

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
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'5% 20% 0% 20%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4285f4',
                                          borderRadius: '15px',
                                          borderBottom: '3px solid #ff3838',
                                          borderRight:  '3px solid #ff3838',
                                          borderTop: '1px solid #ff3838',
                                          borderLeft:  '1px solid #ff3838',
                                          height: '55px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'2%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'20px',color:'white'}}>Continuer</span>
                                <span style={{marginLeft:'5%'}}><img src={go1} width='10%'/></span>
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
      isShowMessage: state.authReducer.isShowMessage,
      registersForm: state.authReducer.registersForm,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(RegisterParent);
