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
import adminService from '../../services/admin.service';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess } from '../../redux/reducer/actions/auth';

const Adress = ({error,
                tutorName,
                tutorId,
                createSuccessMessage,
                onChildGetTutor,
                onChildCloseModal,
                onChildModalLoading}) => {

    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [modeConnectForm, setModeConnectForm] = useState({tutorName: tutorName, connectionMode: ""});
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()

    

    const onChangeModeConnect = (e) => {
        setModeConnectForm({...modeConnectForm,  [e.target.name]: e.target.value })}
        console.log(modeConnectForm);

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    const handleLoading = (isShow) => {
    onChildModalLoading(isShow);
  }

    const onSubmit = (e) => {
        e.preventDefault();
        let payloadMode = {
                  mode: modeConnectForm.connectionMode,
                }
        handleLoading(true);
        console.log("MY CONNECTION MODE");
        console.log(modeConnectForm);
        adminService.changeUserConnectionMode(tutorId, payloadMode)
        .then((response)=> {
                dispatch(authSetRegisterForm(null));
                dispatch(authRegisterFailed(null));
                dispatch(authCreateSuccess("Connection Mode has been Change Successfully"));
                console.log("Response Mode success");
                console.log(response.data);
                handleLoading(false);
        })
        .catch((error)=> {
            handleLoading(false);
                console.log("Error Mode ");
                if(error.response === undefined){
                    dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                }else{
                    dispatch(authRegisterFailed(error.response));
                    console.log(error.response);
                
                }

        })
        
    }
    const handleGetTutor = (e) => {
        onChildGetTutor(e.target.name);
    }
     function closeModal(e){
     handleGetTutor(e);
      dispatch(authRegisterFailed(null));
      dispatch(authCreateSuccess(null));
      onChildCloseModal(e.target.name);
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
                           
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                
                                borderRadius:'25px 25px 25px 25px',
                                width:'100%',
                                height:'100%',
                                backgroundColor:'#ffce52',
                                margin:'10%',
                                padding:'2%'
                              }}>
                              <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <span className='close' style={{fontSize:'20px',cursor:'pointer'}} onClick={(e)=>closeModal(e)}>&times;</span>
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
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Définir un Mode de connexion</strong> 
                                               
                                            </div>
                                 
                                     
                                    </GridItem>
                                  </GridContainer>


                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       {Object.keys(modeConnectForm).map((input,index)=>{
                                        let label,name,type,id;
                                        if(input==="tutorName"){
                                            label="Nom du Tuteur";
                                            name="tutorName";
                                            type="text";
                                            id="tutorName";
                                        }else if(input==="connectionMode"){
                                            label="Mode de connection";
                                            name="connectionMode";
                                            type="text";
                                            id="connectionMode";
                                        }
                                        return(
                                            <GridContainer key={index}>
                                                <GridItem xs={12} sm={12} md={12} style={{margin:'5% 0% 0% 0%'}}>
                                                {label}
                                              {input==="connectionMode"? <select 
                                                        name={name}
                                                        onChange={onChangeModeConnect}
                                                        value={modeConnectForm[input]} 
                                                        id={id}

                                                        style={{
                                                                width:'100%',
                                                                height:'40px',
                                                                border:`${
                                                                '2px solid #002495'}`
                                                                }}

                                                        >
                                                        <option value=""></option>
                                                        <option value="0">Mac Adress</option>
                                                        <option value="1">Email</option>
                                                        </select>:
                                                        <input 
                                                         type={type}
                                                         value={modeConnectForm[input]}  
                                                         name={name}
                                                         onChange={onChangeModeConnect}

                                                         style={{
                                                            border:'2px solid #002495',
                                                            width:'100%',
                                                            height:'40px'}}/>}
                              
                                       
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
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      createSuccessMessage: state.authReducer.createSuccessMessage,
      isShowMessage: state.authReducer.isShowMessage,
      registersForm: state.authReducer.registersForm,
      user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(Adress);
