import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Button from '../../../app/components/buttons/button';
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import GridItem from "../../../app/components/Grid/GridItem.js";
import smileauth from '../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../assets/images/im10.png';
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Footer from "../../../app/components/footer/footer.jsx";
import forgotsmile from '../../../assets/images/dashboard/forgot.png';
import Avatar   from 'react-avatar';
import { authConfirmEmailSuccess,authConfirmEmailFailed } from '../../redux/reducer/actions/auth';
import horaireService from '../../services/horaire.service';
import Loader from 'react-loader-spinner';

const DeleteHour = ({error,
                        confirmEmail,
                        onChildCloseModal,
                        onchildOpenLoading,
                        idHoraire,
                        }) => {
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
  

   const closeModal = (e) => {
        dispatch(authConfirmEmailFailed(null));
        authConfirmEmailSuccess(null);
        onChildCloseModal(e.target.name);
    }

    const handleLoading = (isShow) => {
        onchildOpenLoading(isShow);
    }
    useEffect(()=>{
        console.log("My Horaire Id");
        console.log(idHoraire);
    },[])



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
        handleLoading(true);
          horaireService.deleteHoraire(idHoraire)
            .then((response) => {
                    dispatch(authConfirmEmailFailed(null));
                    dispatch(authConfirmEmailSuccess(response.data.message));
                    console.log("Delete Hour successfully");
                    console.log(response.data);
                    handleLoading(false);
                    closeModal(e);
            })
            .catch((error) => {
                handleLoading(false);
                console.log("Error Confirm Email");
                if(error.response === undefined){
                    dispatch(authConfirmEmailFailed("Network Error, possible you are not connected"));
                }else{
                console.log(error.response);
                dispatch(authConfirmEmailFailed(error.response));
                }
            })
        
    }
    
    return(

        <div style={{
                        backgroundColor:'#ffce52',
                        borderRadius:'25px 25px 25px 25px',
                        }}>
                    <GridContainer>

                     <GridItem xs={12} sm={12} md={12}>
                    

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div style={{
                                fontSize:'100%',
                                margin:'5%',
                                textAlign:'center',
                                }}>Voulez vous vraiment Supprimer le planning de ce Jour?
                                </div>
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                          
                            {confirmEmail&&
                                (<div className="alert alert-success" style={{width:"50%",fontSize:'1em',textAlign:'center'}} role="alert">
                                            {confirmEmail}
                                 </div>)
                            }
                          
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'100%',
                                height:'100%',
                                backgroundColor:'#ffce52',
                                margin:'0%',
                                padding:'2%'
                              }}>
                             
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'10% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div onClick={onSubmit} style={{
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
                                          paddingTop:'5%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Supprimer</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'10% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div onClick={(e)=>closeModal(e)} style={{
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
                                          paddingTop:'5%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Annuler</span>
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
      confirmEmail: state.authReducer.confirmEmail,
  };
};
export default connect(mapStateToProps)(DeleteHour);
