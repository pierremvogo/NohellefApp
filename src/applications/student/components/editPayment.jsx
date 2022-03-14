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
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess } from '../../redux/reducer/actions/auth';
import Avatar   from 'react-avatar';
import userService from '../../services/user.service';

const EditPayment = ({user,error,
                        onChildCloseModal,
                        registersForm,
                        onchildOpenLoading,
                        createSuccessMessage,
                        onChildGetPayment}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [paymentForm, setPaymentForm] = useState(
                                        registersForm?registersForm:{
                                          numCardNumber:"",
                                          cardExpireMonth:"",
                                          cardExpireYear:"",
                                          cardCode:"",
                                        })
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [formErrors, setFormErrors] = useState({});
    const history = useHistory()
    const dispatch= useDispatch()

    useEffect(()=>{
        console.log("my payment data", registersForm);
    },[])



    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const regexPhoneNumber = /^(\++237[\s.-]?)+\(?6[5-9]{1}[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?([0-9]{3})\)?/;
    const regexBirthDay = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'numCardNumber':
                if(!values[input]){
                    errorsValidation.numCardNumber = "Le Numéro de la Carte est requis";
                }else{
                    setSubmited(true);
                }
                break;
            case 'cardExpireMonth':
                if(!values[input]){
                    errorsValidation.cardExpireMonth= "Mois d'expiration requis";

                }else{
                    setSubmited(true);
                }
                break;
            case 'cardExpireYear':
                if(!values[input]){
                    errorsValidation.cardExpireYear = "Année d'expiration requise";
                }{
                    setSubmited(true);
                }
                break
            case 'cardCode':
                if(!values[input]){
                    errorsValidation.cardCode = "Code Requis";
                }{
                    setSubmited(true);
                }
                break
                default:
                    break;
    }
    
    });

       return errorsValidation;       
  }
  const handleGetPaymentRessource = (e) => {
      onChildGetPayment(e.target.name);
  }

    const closeModal = (e) => {
        handleGetPaymentRessource(e);
        dispatch(authCreateSuccess(null));
        dispatch(authSetRegisterForm(null));
        onChildCloseModal(e.target.name);
    }

    const handleLoading = (isShow) => {
        onchildOpenLoading(isShow);
    }
    const onChangePaymentForm = (e) => {
        setPaymentForm({...paymentForm,  [e.target.name]: e.target.value })
        setFormErrors(validateForm(paymentForm));
        dispatch(authRegisterFailed(null)); 
        console.log(paymentForm);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let paymentRegister = {
                              bankCardNumber: paymentForm.numCardNumber,
                              bankCardExpirationDate: paymentForm.cardExpireYear+"-"+paymentForm.cardExpireMonth,
                              bankCardCode: paymentForm.cardCode
                              }
                         
       setFormErrors(validateForm(paymentForm));
       if(Object.keys(formErrors).length === 0 && submited){
            dispatch(authSetRegisterForm(paymentForm));
            handleLoading(true);
            console.log("form Tutor register");
            console.log(paymentRegister);
            userService.addNewPaymentCard(user&&user.currentUser.id, paymentRegister)
            .then((response) => {
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Payment Card Added Successfully"));
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

        <div style={{margin:'0% 5% 0% 30%'}}>
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
                                width:'50%',
                                height:'85%',
                                backgroundColor:'#ffce52',
                                margin:'5%',
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
                                <form onSubmit={onSubmit}>
                                  <GridContainer>
                                    {Object.keys(paymentForm).map((input,index)=> {
                                        return(
                                                <>
                                                  {input==="numCardNumber"? 
                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <span style={{float:'left',marginRight:'5%'}}>Numéro de carte</span>
                                                        <span><img src={mpay} width='10%' /></span>
                                                       <div style={{margin:'2% 0% 5% 0%'}}>
                                                      <input 
                                                            type={"text"}
                                                            id={input}
                                                            name={input}
                                                            onChange={onChangePaymentForm}
                                                            value={paymentForm[input]}  

                                                            style={{
                                                                border:`${
                                                                    input==="numCardNumber"&&formErrors.numCardNumber?'2px solid #C84941':
                                                                    '2px solid #002495'}`,
                                                                width:'100%',
                                                                height:'40px'}}
                                                            />
                                                            {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="numCardNumber"?formErrors.numCardNumber:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                      </div>
                                                    </GridItem>
                                                  : input==="cardExpireMonth"? 
                                                    <GridItem xs={6} sm={6} md={6}>
                                                        <span style={{float:'left',marginRight:'5%'}}>Mois d'expiration</span>
                                                        
                                                       <div style={{margin:'0% 0% 5% 0%'}}>
                                                      <select 
                                                        name={input}
                                                        onChange={onChangePaymentForm}
                                                        value={paymentForm[input]} 
                                                        id={input}

                                                        style={{
                                                                width:'100%',
                                                                height:'40px',
                                                                border:`${
                                                                input==="cardExpireMonth"&&formErrors.cardExpireMonth?'2px solid #C84941':
                                                                '2px solid #002495'}`
                                                                }}

                                                        >
                                                        <option value=""></option>
                                                        <option value="janvier">Janvier</option>
                                                        <option value="fevrier">Février</option>
                                                        <option value="mars">Mars</option>
                                                        <option value="avril">Avril</option>
                                                        <option value="mai">Mai</option>
                                                        <option value="juin">Juin</option>
                                                        <option value="juillet">Juillet</option>
                                                        <option value="aout">Août</option>
                                                        <option value="septembre">Septembre</option>
                                                        <option value="octobre">Octobre</option>
                                                        <option value="novembre">Novembre</option>
                                                        <option value="decembre">Décembre</option>
                                                        </select>
                                                                {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="cardExpireMonth"?formErrors.cardExpireMonth:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                      </div>
                                                    </GridItem>

                                                  : input==="cardExpireYear"? 
                                                    <GridItem xs={6} sm={6} md={6}>
                                                        <span style={{float:'left',marginRight:'5%'}}>Année d'expiration</span>
                                                        
                                                       <div style={{margin:'0% 0% 5% 0%'}}>
                                                      <input 
                                                            type={"text"}
                                                            id={input}
                                                            name={input}
                                                            onChange={onChangePaymentForm}
                                                            value={paymentForm[input]} 

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
                                                    </GridItem>

                                                  : <GridItem xs={12} sm={12} md={12}>
                                                        <span style={{float:'left',marginRight:'5%'}}>Code de votre carte</span>
                                                        
                                                       <div style={{margin:'0% 0% 5% 0%'}}>
                                                      <input 
                                                            type={"text"}
                                                            id={input}
                                                            name={input}
                                                            onChange={onChangePaymentForm}
                                                            value={paymentForm[input]} 

                                                            style={{
                                                                border:`${
                                                                    input==="cardCode"&&formErrors.cardCode?'2px solid #C84941':
                                                                    '2px solid #002495'}`,
                                                                width:'100%',
                                                                height:'40px'}}
                                                            />
                                                            {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="cardCode"?formErrors.cardCode:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                      </div>
                                                    </GridItem>}
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
                                          borderRadius: '25px',
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
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Ajouter</span>
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
export default connect(mapStateToProps)(EditPayment);
