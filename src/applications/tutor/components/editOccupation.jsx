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
import horaireService from '../../services/horaire.service';

const EditOccupation = ({user, 
                        error,
                        occupationData, 
                        registersForm,
                        onChildCloseModal,
                        createSuccessMessage, 
                        onchildOpenLoading}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [addEventForm, setAddEventForm] = useState(registersForm?registersForm:{
                                                    day:occupationData?occupationData.day: "",
                                                    periodesNumbers:occupationData.periodes?occupationData.periodes.map((value,index)=>{return(value.number)}):[null],
                                                    ownerId:occupationData?occupationData.id:"",
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
        console.log(user);
        console.log("My occupation data")
        console.log(occupationData);
    },[])

    const onChangeHoraires = (e) => {
        console.log("my name input------");
        console.log(e.target.name);
        setAddEventForm({...addEventForm, 
                                [e.target.name]: e.target.name==="periodesNumbers"?
                                Array.from(e.target.selectedOptions, item => parseInt(item.value)):
                                e.target.value
                        })
        setFormErrors(validateForm(addEventForm));
        console.log(addEventForm);
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
            case 'periodesNumbers':
                console.log("periodNumber");
                console.log(values[input]);
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

        let horairePayload = {
                day: addEventForm.day,
                periodesNumbers: addEventForm.periodesNumbers,
                ownerId:user&&user.currentUser.id
        }
        console.log(horairePayload);
        if(submited){
            handleLoading(true);
            horaireService.editUserHoraire(occupationData&&occupationData.id,horairePayload)
                .then((response)=>{
                    console.log(response.data)
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Disponibility Updated Successfully"));

                    handleLoading(false);
                })
                .catch((error)=>{
                    handleLoading(false);
                   
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                    dispatch(authRegisterFailed(error.response));
                    console.log("Error Updated Disponibility");
                    console.log(error.response); 
                }
                })
            }else{
                setFormErrors(validateForm(addEventForm));
                if(Object.keys(formErrors).length === 0 && submited){
                    handleLoading(true);
                setSubmited(true);
                horaireService.editUserHoraire(occupationData&&occupationData.id,horairePayload)
                .then((response)=>{
                    console.log(response.data)
                    dispatch(authSetRegisterForm(null));
                    dispatch(authRegisterFailed(null));
                    dispatch(authCreateSuccess("Disponibility Updated Successfully"));

                    handleLoading(false);
                })
                .catch((error)=>{
                    handleLoading(false);
                   
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                    dispatch(authRegisterFailed(error.response));
                    console.log("Error Updated Disponibility");
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
                                           <span><i>Définissez vos heures de disponibilité</i></span>
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
                                        {Object.keys(addEventForm).map((input,index)=> {
                                            let label,name,id;
                                            if(input==="day"){
                                                label="Jour"
                                                name="day"
                                                id="day"
                                            }
                                            else if(input==="periodesNumbers"){
                                                label="Vos Horaires "
                                                name="periodesNumbers"
                                                id="periodesNumbers"
                                            }else{return;}

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
                                                                {input==="day"? 
                                                                <div>
                                                                <select 
                                                                     name={name} 
                                                                     onChange={onChangeHoraires}
                                                                     value={addEventForm[input]}
                                                                     id={id}

                                                                     style={{
                                                                        width:'100%',
                                                                        height:'41px',
                                                                        border:`${
                                                                                input==="day"&&formErrors.day?'2px solid #C84941':
                                                                                '2px solid #002495'}`
                                                                        
                                                                        }}
                                                                        >
                                                                    <option value=""></option>
                                                                    <option value="0">Lundi</option>
                                                                    <option value="1">Mardi</option>
                                                                    <option value="2">Mercredi</option>
                                                                    <option value="3">Jeudi</option>
                                                                    <option value="4">Vendredi</option>
                                                                    <option value="5">Samedi</option>
                                                                    <option value="6">Dimanche</option>
                                                                  </select>
                                                                  {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="day"?formErrors.day:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                  </div>
                                                                :<div><select 
                                                                     name={name} 
                                                                     onChange={onChangeHoraires}
                                                                     value={addEventForm[input]}
                                                                     id={id}

                                                                     style={{
                                                                        width:'100%',
                                                                        height:'60px',
                                                                        border:`${
                                                                                input==="periodesNumbers"&&formErrors.periodesNumbers?'2px solid #C84941':
                                                                                '2px solid #002495'}`
                                                                        }}
                                                                        multiple>
                                                                    <option value="1">07h00-08h00</option>
                                                                    <option value="2">08h00-09h00</option>
                                                                    <option value="3">09h00-10h00</option>
                                                                    <option value="4">10h00-11h00</option>
                                                                    <option value="5">11h00-12h00</option>
                                                                    <option value="6">12h00-13h00</option>
                                                                    <option value="7">13h00-14h00</option>
                                                                    <option value="8">14h00-15h00</option>
                                                                    <option value="9">15h00-16h00</option>
                                                                    <option value="10">16h00-17h00</option>
                                                                    <option value="11">17h00-18h00</option>
                                                                    <option value="12">18h00-19h00</option>
                                                                    <option value="13">19h00-20h00</option>
                                                                    <option value="14">20h00-21h00</option>
                                                                    <option value="15">21h00-22h00</option>
                                                                    <option value="16">22h00-23h00</option>
                                                                    <option value="17">23h00-24h00</option>
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
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Mettre à Jour</span>
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
export default connect(mapStateToProps)(EditOccupation);
