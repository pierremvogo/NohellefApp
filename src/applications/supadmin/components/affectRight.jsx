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
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess } from '../../redux/reducer/actions/auth';
import adminService from '../../services/admin.service';

const AffectRigth = ({error, 
                        adminData,
                        onChildCloseModal,
                        onchildOpenLoading,
                        createSuccessMessage}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [rightForm, setRightForm] = useState({adminName: adminData.firstName, rightContent: [null]})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()
    const [formErrors, setFormErrors] = useState({});

useEffect(()=>{
       console.log("My Admin data for assign permission");
       console.log(adminData);
        return function cleanup () {
            return;
        }
      
    },[])

    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const regexPhoneNumber = /^(\++237[\s.-]?)+\(?6[5-9]{1}[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?([0-9]{3})\)?/;
    const regexBirthDay = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'adminName':
                if(!values[input]){
                    errorsValidation.firstName = "Le Nom est requis";

                }else if(values[input].length < 4){
                    errorsValidation.adminName = "Le nom doit avoir au moins 4 lettres";
                }else{
                    setSubmited(true);
                }
                break;
            case 'rightContent':
                for(var i of values[input]){
                    if(!i){
                        errorsValidation.rightContent = "Veuillez définir une permission";
                    }else{
                        setSubmited(true);     
                   }
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

    

    const onChangeRight = (e) => {
        setRightForm({...rightForm,  
                            [e.target.name]: e.target.name==="rightContent"?
                            Array.from(e.target.selectedOptions, item => item.value):
                            e.target.value })
        setFormErrors(validateForm(rightForm));
        dispatch(authRegisterFailed(null)); 
        console.log(rightForm);
    }

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    function closeModal(e){
      onChildCloseModal(e.target.name);
      dispatch(authCreateSuccess(null));
      dispatch(authRegisterFailed(null));
  }

    const onSubmit = (e) => {
        e.preventDefault();
        let rightRegister = {
                              permissions: rightForm.rightContent
                            }
        setFormErrors(validateForm(rightForm)); 
       if(Object.keys(formErrors).length === 0 && submited){
            dispatch(authSetRegisterForm(rightForm));
            handleLoading(true);
            console.log("form Tutor register");
            console.log(rightRegister);
            adminService.assignAdminPermission(adminData.id,rightRegister)
            .then((response) => {
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Permission Assign Successfuly"));
                    console.log("Response Assign permission success");
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

        <div style={{borderRadius:'25px 25px 25px 25px'}}>
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
                                width:'160%',
                                height:'100%',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'2%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <span className='close' style={{fontSize:'35px',cursor:'pointer'}} onClick={(e)=>closeModal(e)}>&times;</span>
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
                                      
                                    
                                      
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'blue',
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Attribuer Des droits</strong> 
                                               
                                            </div>
                                      
                                    
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       {Object.keys(rightForm).map((input,index)=>{
                                        let label,name,type,id;
                                        if(input==="adminName"){
                                            label="Nom de l'administrateur";
                                            name="adminName";
                                            type="text";
                                            id="adminName";
                                        }else if(input==="rightContent"){
                                            label="Définir les Permissions";
                                            name="rightContent";
                                            type="text";
                                            id="rightContent";
                                        }
                                        return(
                                            <GridContainer key={index}>
                                                <GridItem xs={12} sm={12} md={12} style={{margin:'5% 0% 0% 0%'}}>
                                                {label}
                                             {input === "rightContent"? 
                                                <div>
                                                      <select 
                                                         name="rightContent" 
                                                         onChange={onChangeRight}
                                                         value={rightForm[input]}
                                                         id="rightContent"

                                                         style={{
                                                            width:'100%',
                                                            height:'41px',
                                                            border:`${
                                                            input==="rightContent"&&formErrors.rightContent?'2px solid #C84941':
                                                            '2px solid #002495'}`
                                                            }}
                                                            multiple>
                                                        <option value="0">MANAGE_ADMIN</option>
                                                        <option value="1">MANAGE_TUTOR</option>
                                                        <option value="2">MANAGE_PARENT</option>
                                                        <option value="3">MANAGE_ABONNEMENTS</option>
                                                        <option value="4">MANAGE_PUB</option>
                                                        <option value="5">LOGIN_IN_TUTOR_ACCOUNT</option>
                                    
                                                      </select>
                                                      {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="rightContent"?formErrors.rigthContent:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                    </div>

                                             : <div><input 
                                                 type={type}
                                                 value={rightForm[input]}  
                                                 name={name}
                                                 onChange={onChangeRight}

                                                 style={{
                                                    width:'100%',
                                                    height:'40px',
                                                    border:`${
                                                         input==="adminName"&&formErrors.adminName?'2px solid #C84941':
                                                            '2px solid #002495'}`

                                                }}/>
                                                    {formErrors && (
                                                            <div>
                                                                <div style={{color:"red",fontSize:"12px"}}>
                                                                    {
                                                                    input==="adminName"?formErrors.adminName:
                                                                    ""}
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>



                                            }
                                              
                                                
                                       
                                                </GridItem>
                                               
                                              
                                            </GridContainer>
                                            )
                                       })}
                                        

                                       
                                    </GridItem>
                                  </GridContainer>
                             
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'10% 0% 5% 0%',
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
      loading: state.authReducer.loading,
      createSuccessMessage: state.authReducer.createSuccessMessage,
      registersForm: state.authReducer.registersForm,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(AffectRigth);
