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
import Avatar   from 'react-avatar';
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import DatePicker from 'react-datepicker';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess } from '../../redux/reducer/actions/auth';
import adminService from '../../services/admin.service';

const AddSpecialitie = ({user, 
                        error,
                        occupationData, 
                        tutorId,
                        registersForm,
                        onChildCloseModal,
                        createSuccessMessage, 
                        onChildOpenLoading}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [addSpecialitieForm, setAddSpecialitieForm] = useState({
                                                    specialities: [""],
                                                    })
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [formError, setformError] = useState(null);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()
    const [inputDay, setInputDay] = useState("");



    useEffect(()=>{
        console.log(tutorId);
    },[])

    const onChangeAddSpecialitie = (e) => {
        setAddSpecialitieForm({...addSpecialitieForm, 
                                [e.target.name]: 
                                Array.from(e.target.selectedOptions, item => item.value)
                              
                        })
        setFormErrors(validateForm(addSpecialitieForm));
        console.log(addSpecialitieForm);
        console.log("close event form");
        console.log("my error VALIDATION");
        console.log(validateForm(addSpecialitieForm));
         console.log("my error VALIDATION");
    }

    const validateForm = (values) => {
    const errorsValidation = {};
    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'specialities':
                console.log("Spécialité");
                console.log(values[input]);
                for(var i of values[input]){
                    if(!i){
                        errorsValidation.specialities = "Spécialité Obligatoire";
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

    const closeModal = (e) => {
        dispatch(authCreateSuccess(null));
        onChildCloseModal(e.target.name);
    }
    const handleLoading = (isShow) => {
      onChildOpenLoading(isShow);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(addSpecialitieForm.specialitie);
        //setFormErrors(validateForm(addSpecialitieForm));
            console.log(submited);
            if(addSpecialitieForm.specialities.length != 0){
                handleLoading(true);
                adminService.addSpecialitiesToTutor(tutorId, addSpecialitieForm)
                .then((response)=>{
                    console.log(response.data)
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Specialities add Successfully"));

                    handleLoading(false);
                })
                .catch((error)=>{
                    handleLoading(false);
                   
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                    dispatch(authRegisterFailed(error.response));
                    console.log("Error Specialities add ");
                    console.log(error.response); 
                }
                })
            }else{
                dispatch(authRegisterFailed("Please verify your input"));
                handleLoading(false);
          
        }
        
        
        
        
    }

	return(

        <div style={{margin:"1% 20% 0% 0%"}}>
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={12}>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12} style={{margin:"2%"}}>
                           
                           
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
                                width:'150%',
                                height:'100%',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'2%'
                              }}>
                                  <GridContainer>
                                        <GridItem  xs={12} sm={12} md={8}  style={{textAlign:'left'}}>
                                           <span><i>Ajoutez une spécialité à ce tuteur</i></span>
                                        </GridItem>
                                      
                                      	<GridItem  xs={12} sm={12} md={4}  style={{textAlign:'right',cursor:'pointer'}}>
                                           <span  className='close' onClick={(e)=>closeModal(e)}>&times;</span>
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

                                  </GridContainer>
                                  <form>
                                  <GridContainer>
                                    <GridItem xs={12} sm={6} md={12} style={{fontSize:"100%"}}>
                                        {Object.keys(addSpecialitieForm).map((input,index)=> {
                                            
                                        return(
                                            <GridContainer>
                                               
                                                <GridItem xs={12} sm={12} md={12} style={{margin:'0.5%'}}> 
                                                  
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={3} md={12}> 
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={4} md={12}> 
                                                                     <span><strong>Spécialités</strong></span>
                                                                </GridItem>
                                                            </GridContainer>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={4} md={12}> 
                                                                <div>
                                                                  <select 
                                                                     name="specialities" 
                                                                     onChange={onChangeAddSpecialitie}
                                                                     value={addSpecialitieForm[input]}
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
                                                            </GridContainer>
                                                        </GridItem>
 
                                                    </GridContainer>

                                                </GridItem>
                                            </GridContainer>
                                                )
                                        })}
                              
                                    </GridItem>

                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'2% 0% 5% 0%',
                                          textAlign:'center'}} onClick={onSubmit}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '15px',
                                          borderBottom: '2px solid #002495',
                                          borderRight:  '2px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '45px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'1%'
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
      error: state.authReducer.error,
      registersForm: state.authReducer.registersForm,
      createSuccessMessage: state.authReducer.createSuccessMessage,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(AddSpecialitie);
