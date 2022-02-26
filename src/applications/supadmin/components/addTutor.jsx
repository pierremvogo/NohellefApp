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

const AddTutor = ({error}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [registerTutorForm, setRegisterTutorForm] = useState(
                        {
                            name: "", 
                            surname: "", 
                            email: "",
                            phone: "",
                            macAddress: ""
                        }   );
    const [errorMessage, setErrorMessage] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
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
                    
                }
                break;
            case 'surname':
                if(!values[input]){
                    errorsValidation.surname = "Le Prénom est requis";

                }else if(values[input].length < 4){
                    errorsValidation.surname = "Le Prénom doit avoir au moins 4 lettres";
                }else{
                    
                }
                break;
            case 'email':
                if(!values[input]){
                    errorsValidation.email = "Adresse Email requise";
                }else if(!regexEmail.test(values[input])){
                    errorsValidation.email= "Adresse Email invalide";
                }else{
                    
                }
                break;
            case 'phone':
                if(!values[input]){
                    errorsValidation.phone = "Numero de Téléphone requis";
                }else if(values[input].length === 13 || values[input].length === 9 ){
                        if(!regexPhoneNumber.test(values[input])){
                            errorsValidation.phone = "Numéro de Téléphone invalide";
                        }else{
                            
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
                    
                }
                break;
                default:
                    break;
    }
    
    });

       return errorsValidation;       
  }

    

    const onChangeRegisterTutor = (e) => {
        setRegisterTutorForm({...registerTutorForm,  [e.target.name]: e.target.value });
        setFormErrors(validateForm(registerTutorForm));
        console.log(registerTutorForm);

    }

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(null)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(registerTutorForm));
        if (submited) { return } 
        
        setSubmited(true);
    }
	return(

        <div style={{backgroundColor:'#ffce52',borderRadius:'25px 25px 25px 25px'}}>
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
                                height:'360px',
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
                                      {Object.keys(registerTutorForm).map((input,index)=>{
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
                                                    onChange={onChangeRegisterTutor}
                                                    value={registerTutorForm[input]}   

                                                    style={{
                                                        border:`${
                                                        input==="name"&&formErrors.name?'2px solid #C84941':
                                                        input==="surname"&&formErrors.surname?'2px solid #C84941':
                                                        input==="email"&&formErrors.email?'2px solid #C84941':
                                                        input==="phone"&&formErrors.phone?'2px solid #C84941':
                                                        input==="macAddress"&&formErrors.macAddress?'2px solid #C84941':
                                                        
                                                        '2px solid #002495'}`,
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
                                                                         {
                                                                         input==="name"?formErrors.name:
                                                                         input==="surname"?formErrors.surname:
                                                                         input==="email"?formErrors.email:
                                                                         input==="phone"?formErrors.phone:
                                                                         input==="macAddress"?formErrors.macAddress:
                                                                         
                                                                         
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
                                          margin:'5% 0% 5% 0%',
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
                                
                                <span className="text" style={{fontSize:'1.2vw',color:'white'}}>Enregistrer</span>
                              </div>
                                    </div>
                                      
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
export default AddTutor;
