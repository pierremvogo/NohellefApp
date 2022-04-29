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
import meetingService from '../../services/meeting.service';

const ProgramConference = ({
							user,
				 		error,tutorData, 
                        registersForm,
                        onChildCloseModal,
                        createSuccessMessage, 
                        onchildOpenLoading}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [addProgrammForm, setAddProgrammForm] = useState(registersForm?registersForm:{
    												specialitie:"",
                                                    periodesNumbers:[null],
                                                    ownerId:"",
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
    	console.log("My tutor data in conference");
        console.log(tutorData);
    },[])

    const onChangeProgramm = (e) => {
        console.log("my name input------");
        console.log(e.target.name);
        setAddProgrammForm({...addProgrammForm, 
                                [e.target.name]: e.target.name==="periodesNumbers"?
                                Array.from(e.target.selectedOptions, item => parseInt(item.value)):
                                e.target.value
                        })
        setFormErrors(validateForm(addProgrammForm));
        console.log(addProgrammForm);
        console.log("close event form");
    }

    const validateForm = (values) => {
    const errorsValidation = {};
    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'day':
                if(!values[input]){
                    errorsValidation.day = "Le Jour est requis";

                }else{
                    setSubmited(true);
                }
                break;
            case 'specialitie':
                if(!values[input]){
                    errorsValidation.specialitie = "La Specialité est requise";

                }else{
                    setSubmited(true);
                }
                break;
            case 'periodesNumbers':
                for(var i of values[input]){
                    if(!i){
                        errorsValidation.periodesNumbers = "Période Obligatoire";
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
      onchildOpenLoading(isShow);
  }

    const onSubmit = (e) => {
        e.preventDefault();

        let ProgrammPayload = {
							  duration: 0,
							  status: "0",
							  ownerId: user&&user.currentUser.id,
							  specialityCode: addProgrammForm.specialitie,
							  guestsIds: [
							    tutorData.id
							  ],
							  horairesIds: 
							    tutorData&&tutorData.horaires&&tutorData.horaires.length != 0?
                                        tutorData.horaires.map((value,index)=>{
                                                return(
                                                        value.id
                                                    )
                                            })
                                    :""
							  
							}
        console.log(ProgrammPayload);
        if(submited){
            handleLoading(true);
            meetingService.createWebConference(ProgrammPayload)
                .then((response)=>{
                    console.log("web-conf response")
                    console.log(response.data)
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Web-Conference Programmed Successfully"));

                    handleLoading(false);
                })
                .catch((error)=>{
                    handleLoading(false);
                   
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                    dispatch(authRegisterFailed(error.response));
                    console.log("Error creating Web-Conference");
                    console.log(error.response); 
                }
                })
            }else{
                setFormErrors(validateForm(addProgrammForm));
                if(Object.keys(formErrors).length === 0 && submited){
                    handleLoading(true);
                	setSubmited(true);
                 meetingService.createWebConference(ProgrammPayload)
                .then((response)=>{
                    console.log("web-conf response")
                    console.log(response.data)
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Web-Conference Programmed Successfully"));

                    handleLoading(false);
                })
                .catch((error)=>{
                    handleLoading(false);
                   
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                    dispatch(authRegisterFailed(error.response));
                    console.log("Error creating Web-Conference");
                    console.log(error.response); 
                }
                })
            }else{
                setSubmited(false);
                dispatch(authRegisterFailed(null));
                handleLoading(false);
                return; 
        }
        
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
                                           <span><i>Programmez une Web-Conférence avec ce tuteur</i></span>
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
                                        {Object.keys(addProgrammForm).map((input,index)=> {
                                            let label,name,id;
                                            if(input==="day"){
                                                label="Jours disponible du tuteur"
                                                name="day"
                                                id="day"
                                            }
                                            else if(input==="periodesNumbers"){
                                                label="Horaires disponible du tuteur"
                                                name="periodesNumbers"
                                                id="periodesNumbers"
                                            }
                                            else if(input==="specialitie"){
                                                label="Choisir une spécialité"
                                                name="specialitie"
                                                id="specialitie"
                                            }
                                            else{return;}

                                        return(
                                            <GridContainer>
                                               
                                                <GridItem xs={12} sm={12} md={12} style={{margin:'0.5%'}}> 
                                                  
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={3} md={12}> 
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={4} md={12}> 
                                                                     <span><strong>{label}</strong></span>
                                                                </GridItem>
                                                            </GridContainer>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={4} md={12}> 
                                                                {input === "specialitie"?
                                                                	<div>
			                                                      <select 
			                                                         name="specialitie" 
			                                                         onChange={onChangeProgramm}
			                                                         value={addProgrammForm[input]}
			                                                         id="specialities"

			                                                         style={{
			                                                            width:'100%',
			                                                            height:'41px',
			                                                            border:`${
			                                                            input==="specialitie"&&formErrors.specialitie?'2px solid #C84941':
			                                                            '2px solid #002495'}`
			                                                            }}
			                                                            >
                                                                        <option key={index} value="">     </option>
			                                                            {tutorData&&tutorData.specialities&&tutorData.specialities.length != 0?
			                                                            	tutorData.specialities.map((value,index)=>{
			                                                            		return(
			                                                            			   <option key={index} value={value.code}>{value.name}</option>
			                                                            			  )
			                                                            	})
			                                                            :""}
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
                                                                :

                                                                <div><select 
                                                                     name={name} 
                                                                     onChange={onChangeProgramm}
                                                                     value={addProgrammForm[input]}
                                                                     id={id}

                                                                     style={{
                                                                        width:'100%',
                                                                        height:'110px',
                                                                        border:`${
                                                                                input==="periodesNumbers"&&formErrors.periodesNumbers?'2px solid #C84941':
                                                                                '2px solid #002495'}`
                                                                        }}
                                                                        multiple>
                                                                        {tutorData&&tutorData.horaires&&tutorData.horaires.length != 0?

                                                                            tutorData.horaires.map((value,index)=>{
                                                                                let day;
                                                                                    if(value.day === "0"){
                                                                                            day = "Lundi";
                                                                                        }else if(value.day === "1"){
                                                                                            day = "Mardi";
                                                                                        }else if(value.day === "2"){
                                                                                            day = "Mercredi";
                                                                                        }else if(value.day === "3"){
                                                                                            day = "Jeudi";
                                                                                        }else if(value.day === "4"){
                                                                                            day = "Vendredi";
                                                                                        }else if(value.day === "5"){
                                                                                            day = "Samedi";
                                                                                        }else if(value.day === "6"){
                                                                                            day = "Dimanche";
                                                                                        }
                                                                                return(
                                                                                    value.periodes.map((value1,index1)=>{

                                                                                    return(
                                                                                       <option key={index1} value={value1.number}>
                                                                                       {
                                                                                        value1.fromHour <10 || value1.toHour <10?
                                                                                        day+": "+"0"+value1.fromHour+"h00-"+value1.toHour+"h00":
                                                                                        day+": "+value1.fromHour+"h00-"+value1.toHour+"h00"
                                                                                       }</option>
                                                                                      )
                                                                                })
                                                                                )
                                                                                
                                                                            })
                                                                        :""}
                                        
                                                                  </select>
                                                                  {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="periodesNumbers"?formErrors.periodesNumbers:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                  </div>

                                                              }
                                                   
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
export default connect(mapStateToProps)(ProgramConference);
