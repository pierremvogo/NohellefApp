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
import videoIcon from '../../../assets/icons/videoIcon.png';
import pdfIcon from '../../../assets/icons/pdfIcon.png';
import mpay from '../../../assets/images/dashboard/mpay.png';
import divid from '../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Footer from "../../../app/components/footer/footer.jsx";
import ins2 from '../../../assets/images/home/ins2.png';
import Avatar   from 'react-avatar';

import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import mediaService from '../../services/media.service';

import Loader from 'react-loader-spinner';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            authMediaId } from '../../redux/reducer/actions/auth';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const AddLesson = ({error,
                    onChildGetAdminUser,
                    isAdd,
                    registersForm,
                    media_Id,
                    courseData,
                    onChildCloseModal,
                    onchildOpenLoading,
                    createSuccessMessage}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [registerLessonForm, setRegisterLessonForm] = useState(
                            registersForm?registersForm:{
                            courseChapter:courseData?courseData.chapters:"", 
                            courseUnderChapter:courseData?courseData.underChapters:""
                         });
    const [errorMessage, setErrorMessage] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [displayLoading, setDisplayLoading] = useState("flex");
    const [startDate, setStartDate] = useState(new Date());
    const [phoneValue, setPhoneValue] = useState("");
    const [todoList,setTodoList] = useState({name: '', contentRaw: '', type: '', size: '' });
    const [fileDoc,setFileDoc] = useState(null); 
    const history = useHistory()
    const dispatch= useDispatch()

    const validateForm = (values) => {
    const errorsValidation = {};
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const regexPhoneNumber = /^(\++237[\s.-]?)+\(?6[5-9]{1}[0-9]{1}[\s.-]?[0-9]{3}[\s.-]?([0-9]{3})\)?/;
    const regexBirthDay = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

    Object.keys(values).map((input,index)=>{
        switch(input) {
            case 'courseChapter':
                    if(!values[input]){
                        errorsValidation.courseChapter = "Le Titre du Chapitre est requis";
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
  

  useEffect(()=>{
    console.log("My course data");
    console.log(courseData);
    },[])

  const handleLoading = (isShow) => {
    onchildOpenLoading(isShow);
  }

  const handleGetAdminUser = (e) => {
      onChildGetAdminUser(e.target.name);
  }

  function closeModal(e){
      dispatch(authCreateSuccess(null));
      dispatch(authSetRegisterForm(null));
      dispatch(authRegisterFailed(null));
      onChildCloseModal(e.target.name);
  }

    const hiddenFileInput = React.useRef(null);

    const handleClickFileInput = (event) => {
        hiddenFileInput.current.click();
        
    };

    function toFixedIfNecessary( value, dp ){
       return +parseFloat(value).toFixed( dp );
    }

    const onChangeUploadFile = (e) => {
        courseData.media = null;
        const reader = new FileReader();
        const file = e.target.files[0];
        console.log("my file video");
        console.log(file.name);
        console.log(file.name.length);
        if(file && file.type === "video/mp4"){
              console.log('myvideo file',file); 
              reader.readAsDataURL(file)
              reader.onloadend = () =>{
                setTodoList({
                          name: file.name,
                          contentRaw: reader.result,
                          type: file.name.split('.').pop(),
                          size: file.size});
                
              }
              console.log("TODOLIST---",todoList)


        }else if(file &&  file.type === "application/pdf"){
               console.log('mypdffile',file); 
               reader.readAsDataURL(file) 
               reader.onloadend = () =>{
                setTodoList({
                            name: file.name,
                            contentRaw: reader.result,
                            type: file.name.split('.').pop(),
                            size: file.size});
              }
              console.log("TODOLIST---",todoList)
        }else{setFileDoc(null)}      
      }

    

    const onChangeRegisterLesson = (e) => {
        setRegisterLessonForm({...registerLessonForm,  
                                [e.target.name]:e.target.value });
        setFormErrors(validateForm(registerLessonForm));
        dispatch(authRegisterFailed(null)); 
        dispatch(authSetRegisterForm(registerLessonForm));
        console.log(registerLessonForm); 
        }
        

    const onSubmit = (e) => {
        e.preventDefault(); 
        let mediaData =  {
          subDir: null,
          name: todoList.name.split('.').shift(),
          hashname: todoList.contentRaw,
          extension: todoList.name.split('.').pop(),
          size: todoList.size,
          type: todoList.name.split('.').pop()==='pdf'?"0":"1"
        }

        if(submited){
            if(todoList.name != ""){
                handleLoading(true);
                console.log("form Course register");
                console.log(registerLessonForm);
                mediaService.createMedia(mediaData)
                .then((response) => {
                    console.log("Successful create Media");
                    console.log(response.data);
                   
                })
                .catch((error) => {
                   handleLoading(false);
                        console.log("Error Register Media");
                        if(error.response === undefined){
                            dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                        }else{
                            dispatch(authRegisterFailed(error.response));
                            console.log(error.response);
                        
                        }
                })

                
            }else{
                dispatch(authRegisterFailed("Please Choose file lesson"));
            }
        }else{
            setFormErrors(validateForm(registerLessonForm));
            if(Object.keys(formErrors).length === 0 && submited){
            if(todoList.name != ""){
                handleLoading(true);
                console.log("form Course register");
                console.log(registerLessonForm);

                mediaService.createMedia(mediaData)
                .then((response) => {
                    console.log("Successful create Media");
                   // dispatch(authMediaId(response.data.id))
                    console.log(response.data);
                })
                .catch((error) => {
                   handleLoading(false);
                        console.log("Error Register Media");
                        if(error.response === undefined){
                            dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                        }else{
                            dispatch(authRegisterFailed(error.response));
                            console.log(error.response);
                        
                        }
                })
            }else{
                dispatch(authRegisterFailed("Please Choose file lesson"));
            }
            }else{
                setSubmited(false);
                dispatch(authRegisterFailed(null));
                handleLoading(false);
                return;
            }
            
        } 
    }

    return(

        <div style={{
                width: '50%',
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
                                backgroundColor:'#ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'100%',
                                height:'100%',
                                fontSize:"80%",
                                margin:'4%',
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
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 1% 0%'}}>
                                         <div>
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'black',
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Nouvelle Leçon</strong> 
                                                <img src={ins2} width='10%'/>
                                            </div>
                                        
                                        </div>
                                     </div>
                                    </GridItem>
                                  </GridContainer>

                                  

                                  <form onSubmit={onSubmit}>
                                  

                             

                                  <GridContainer>
                                  {Object.keys(registerLessonForm).map((input,index)=>{
                                    console.log("my add input");
                                    console.log(registerLessonForm[input]);
                                        let id,type,name,label
                                        if(input==="courseChapter"){
                                            id="courseChapter";
                                            type="text";
                                            name="courseChapter";
                                            label="Titre du Chapitre"
                                        }else if(input==="courseUnderChapter"){
                                            id="courseUnderChapter";
                                            type="text";
                                            name="courseUnderChapter";
                                            label="Titre du Sous Chapitre(Optionnel)";
                                        }else{return;}
                                    return(
                                            <>
                                            {input==="courseChapter" || input==="courseUnderChapter"?
                                            <GridItem xs={12} sm={6} md={6} key={index}>
                                            <div>
                                                {label}
                                                <input 
                                                    type={type}
                                                    id={id}
                                                    name={name}
                                                    onChange={onChangeRegisterLesson}
                                                    value={registerLessonForm[input]}   

                                                    style={{
                                                        border:`${
                                                            input==="courseChapter"&&formErrors.courseChapter?'2px solid #C84941':
                                                            input==="courseUnderChapter"&&formErrors.courseUnderChapter?'2px solid #C84941':
                                                            '2px solid #002495'}`,
                                                        width:'100%',
                                                        height:'40px'}}/>
                                                    {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="courseChapter"?formErrors.courseChapter:
                                                                         input==="courseUnderChapter"?formErrors.courseUnderChapter:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                            
                                            </div>
                                            </GridItem>
                                                :""}
                                            </>
                                        )
                                  })}
                                      
                                  </GridContainer>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12} style={{
                                        textAlign:'center',
                                        }}>
                                      
                                    <div>
                                            <div  style={{borderRadius:"5px 5px 5px 5px"}}>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                       
                                                        <div>
                                                                <div onClick={handleClickFileInput} class="text-xs font-weight-bold text-center" style={{fontSize:'100%',color:"blue",cursor:'pointer'}}>
                                                                 <u>Choisir un fichier</u>
                                                                <input 
                                                                  type="file" 
                                                                  accept="application/pdf, video/*"
                                                                  ref={hiddenFileInput} 
                                                                  style={{display:'none'}}
                                                                  onChange={onChangeUploadFile}
                                                                />
                                                                </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    </GridItem>

                                  </GridContainer>
                                  
                                    <GridContainer>
                                      <GridItem xs={12} sm={12} md={12} style={{marginTop:'2%'}}>
                                      <table className='table'>
                                <thead>
                                    <tr>
                                        <th>File Name</th>
                                        <th>Size</th>
                                        <th>Type</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                          
                                             <tr>
                                                    <td>
                                                        {courseData.media?courseData.media.name<=24?
                                                            courseData.media.name.split(".").shift():courseData.media.name.substr(0,24)+"...":""}
                                                        {todoList.name.length <= 24? 
                                                            todoList.name.split(".").shift():todoList.name.substr(0,24)+"..."}
                                                    </td>
                                                    <td>{courseData.media?toFixedIfNecessary(courseData.media.size/1000/1000, 2) + ' MB':""}
                                                        {todoList.size != 0? toFixedIfNecessary(todoList.size/1000/1000, 2) + ' MB' : ''} 

                                                    </td>
                                                    <td>{courseData.media?courseData.media.type==="0"?<img src={pdfIcon} width='20%' />:
                                                                                                <img src={videoIcon} width='20%' />:""}
                                                         { todoList.type === "mp4"?<img src={videoIcon} width='20%' />: 
                                                           todoList.type === "pdf"? <img src={pdfIcon} width='20%' />:""} 

                                                    </td>
                                                    <td><i className="far fa-window-close" style={{ fontSize:25+'px',color:'#17879C',cursor:'pointer' }}/></td>
                                            </tr>
                                          
                                </tbody>
                            </table>
                                    </GridItem>
                                  </GridContainer>
                                  
                                  
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                   
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'0% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div style={{
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
                                          paddingTop:'2%'
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
      isLoggedIn: state.authReducer.isLoggedIn,
      error: state.authReducer.error,
      loading: state.authReducer.loading,
      createSuccessMessage: state.authReducer.createSuccessMessage,
      isShowMessage: state.authReducer.isShowMessage,
      registersForm: state.authReducer.registersForm,
      media_Id: state.authReducer.media_Id,
      user: state.authReducer.user
  };
};
export default connect(mapStateToProps)(AddLesson);
