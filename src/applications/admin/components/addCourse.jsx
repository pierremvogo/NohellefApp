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

const AddCourse = ({error,
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
    const [registerCourseForm, setRegisterCourseForm] = useState(
                            registersForm?registersForm:{
                            courseName:courseData?courseData.title:"",
                            courseSpeciality:"",
                            courseLevel:"",
                            courseDescription:courseData?courseData.description:"",
                        } );
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
            case 'courseName':
                if(!values[input]){
                    errorsValidation.courseName = "Le Nom du Cours est requis";
                }else{
                    setSubmited(true);
                }
                break;
            case 'courseDescription':
                if(!values[input]){
                    errorsValidation.courseDescription = "La Description du cours est requis";

                }else{
                    setSubmited(true);
                }
                break;
            case 'courseSpeciality':
                if(!values[input]){
                    errorsValidation.courseSpeciality = "La Spécialité est requise";
                }else{
                    setSubmited(true);
                }
                break;
            case 'courseLevel':
                for(var i of values[input]){
                    if(!i){
                        errorsValidation.courseLevel = "Le niveau est requis";
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

  const handleUpdateCourse = (e) => {
       e.preventDefault(); 
       setFormErrors(validateForm(registerCourseForm));
       if(Object.keys(formErrors).length === 0 && submited){
                dispatch(authSetRegisterForm(registerCourseForm));
                handleLoading(true);
                console.log("form Course register");
                adminService.editCourse(courseData.id,{
                                          title: registerCourseForm.courseName,
                                          description: registerCourseForm.courseDescription,
                                          type: todoList.name.split('.').pop()==='pdf'?"0":"1",
                                          specialityCode: registerCourseForm.courseSpeciality,
                                          mediaId: "",
                                          levels: registerCourseForm.courseLevel
                                        })
                .then((response) => {
                        dispatch(authSetRegisterForm(null));
                        dispatch(authRegisterFailed(null));
                        dispatch(authCreateSuccess("Course has been edit Successfully"));
                        console.log("Response register course success");
                        console.log(response.data);
                        handleLoading(false);
                
                })
                .catch((error) => {
                    handleLoading(false);
                    console.log("Error  Register Course");
                    if(error.response === undefined){
                        dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                    }else{
                        dispatch(authRegisterFailed(error.response));
                        console.log(error.response);
                    
                    }
                });

                
            }else{
                dispatch(authRegisterFailed(null));
                handleLoading(false);
                return; 
            }
  }

  useEffect(()=>{
    
    },[])

  const handleLoading = (isShow) => {
    onchildOpenLoading(isShow);
  }

  const handleGetAdminUser = (e) => {
      onChildGetAdminUser(e.target.name);
  }

  function closeModal(e){
      dispatch(authCreateSuccess(null));
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

  

    function formatDate(date) {
        var month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    

    const onChangeRegisterCourse = (e) => {
        setRegisterCourseForm({...registerCourseForm,  
                                [e.target.name]:e.target.name==="courseLevel"?
                                Array.from(e.target.selectedOptions, item => item.value):
                                e.target.value });
        setFormErrors(validateForm(registerCourseForm));
        dispatch(authRegisterFailed(null)); 
        dispatch(authSetRegisterForm(registerCourseForm));
        console.log(registerCourseForm); 
        }
        
    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(null)
    }

    const handleCreateMedia = (e) => {
       let mediaData =  {
          subDir: null,
          name: todoList.name.split('.').shift(),
          hashname: todoList.contentRaw,
          extension: todoList.name.split('.').pop(),
          size: todoList.size,
          type: todoList.name.split('.').pop()==='pdf'?"0":"1"
        }
        console.log("my todo list Media");
        console.log(mediaData);
        handleLoading(true);
        mediaService.createMedia(mediaData)
        .then((response) => {
            console.log("Successful create Media");
            dispatch(authMediaId(response.data.id))
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
    }

    const onSubmit = (e) => {
        let mediaData =  {
          subDir: null,
          name: todoList.name.split('.').shift(),
          hashname: todoList.contentRaw,
          extension: todoList.name.split('.').pop(),
          size: todoList.size,
          type: todoList.name.split('.').pop()==='pdf'?"0":"1"
        }
       e.preventDefault(); 
       setFormErrors(validateForm(registerCourseForm));
       if(Object.keys(formErrors).length === 0 && submited){
            if(todoList.name != ""){
                dispatch(authSetRegisterForm(registerCourseForm));
                handleLoading(true);
                console.log("form Course register");

                mediaService.createMedia(mediaData)
                .then((response) => {
                    console.log("Successful create Media");
                   // dispatch(authMediaId(response.data.id))
                    console.log(response.data);
                    adminService.createCourse({
                                          title: registerCourseForm.courseName,
                                          description: registerCourseForm.courseDescription,
                                          type: todoList.name.split('.').pop()==='pdf'?"0":"1",
                                          specialityCode: registerCourseForm.courseSpeciality,
                                          mediaId: response.data.id,
                                          levels: registerCourseForm.courseLevel
                                        })
                .then((response) => {
                        dispatch(authSetRegisterForm(null));
                        dispatch(authRegisterFailed(null));
                        dispatch(authCreateSuccess("Course Created Successfully"));
                        console.log("Response register course success");
                        console.log(response.data);
                        handleLoading(false);
                
                })
                .catch((error) => {
                    handleLoading(false);
                    console.log("Error  Register Course");
                    if(error.response === undefined){
                        dispatch(authRegisterFailed("Network Error, possible you are not connected"));
                    }else{
                        dispatch(authRegisterFailed(error.response));
                        console.log(error.response);
                    
                    }
                });
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
                dispatch(authRegisterFailed("You have to add lesson for this Course"));
            }

            }
            
        else{
            dispatch(authRegisterFailed(null));
            handleLoading(false);
            return; 
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
                                                color:'blue',
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Nouveau Cours</strong> 
                                                <img src={ins2} width='10%'/>
                                            </div>
                                        
                                        </div>
                                     </div>
                                    </GridItem>
                                  </GridContainer>

                                  

                                  <form onSubmit={onSubmit}>
                                  <GridContainer>
                                      {Object.keys(registerCourseForm).map((input,index)=>{
                                        let id,type,name,label
                                        if(input==="courseName"){
                                            id="courseName";
                                            type="text";
                                            name="courseName";
                                            label="Nom du cours"
                                        }else if(input==="courseDescription"){
                                            id="courseDescription";
                                            type="text";
                                            name="courseDescription";
                                            label="Description du cours";
                                        }
                                        else if(input==="courseLevel"){
                                            id="courseLevel";
                                            type="text";
                                            name="courseLevel";
                                            label="Niveau du cours";
                                        }else if(input==="courseSpeciality"){
                                            id="courseSpeciality";
                                            type="text";
                                            name="courseSpeciality";
                                            label="Spécialité du cours";
                                        }else{return;}
                                        return(
                                            <>
                                            {
                                                input==="courseSpeciality"?
                                                <GridItem xs={12} sm={6} md={6} key={index} style={{fontSize:'90%'}}>
                                                {label}
                                                    <div>
                                                      <select 
                                                         name={name} 
                                                         onChange={onChangeRegisterCourse}
                                                         value={registerCourseForm[input]}
                                                         id={id}

                                                         style={{
                                                            width:'100%',
                                                            height:'41px',
                                                            border:`${
                                                            input==="courseSpeciality"&&formErrors.courseSpeciality?'2px solid #C84941':
                                                            '2px solid #002495'}`
                                                            }}
                                                            >
                                                        <option value=""></option>
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
                                                                         input==="courseSpeciality"?formErrors.courseSpeciality:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                    </div>
                                                </GridItem>
                                            :input==="courseLevel"?
                                            <GridItem xs={12} sm={6} md={6} key={index}>
                                                {label}
                                                    <div>
                                                      <select 
                                                         name={name} 
                                                         onChange={onChangeRegisterCourse}
                                                         value={registerCourseForm[input]}
                                                         id={id}

                                                         style={{
                                                            width:'100%',
                                                            height:'40px',
                                                            border:`${
                                                            input==="courseLevel"&&formErrors.courseLevel?'2px solid #C84941':
                                                            '2px solid #002495'}`
                                                            }}
                                                            multiple>
                                                        <option value="0">6ieme</option>
                                                        <option value="1">5ieme</option>
                                                        <option value="2">4ieme</option>
                                                        <option value="3">3ieme</option>
                                                        <option value="4">2nd</option>
                                                        <option value="5">1ere</option>
                                                        <option value="6">Tle</option>
                                                      </select>
                                                      {formErrors && (
                                                                    <div>
                                                                        <div style={{color:"red",fontSize:"12px"}}>
                                                                         {
                                                                         input==="courseLevel"?formErrors.courseLevel:
                                                                         ""}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                    </div>
                                                </GridItem>:
                                            <GridItem xs={6} sm={6} md={6} key={index} style={{fontSize:'90%'}}>
                                            {label}
                                              <div style={{margin:'0% 0% 5% 0%',width:'100%'}}>
                                              {input==="courseDescription"?                          
                                                     <textarea 
                                                        type={type}
                                                        id={id}
                                                        name={name}
                                                        onChange={onChangeRegisterCourse}
                                                        value={registerCourseForm[input]}   

                                                        style={{
                                                            border:`${
                                                                input==="courseName"&&formErrors.courseName?'2px solid #C84941':
                                                                input==="courseDescription"&&formErrors.courseDescription?'2px solid #C84941':
                                                                '2px solid #002495'}`,
                                                        width:'100%',
                                                        height:'40px'}}/> :                     
                                                        <input 
                                                            type={type}
                                                            id={id}
                                                            name={name}
                                                            onChange={onChangeRegisterCourse}
                                                            value={registerCourseForm[input]}   

                                                            style={{
                                                                border:`${
                                                                    input==="courseName"&&formErrors.courseName?'2px solid #C84941':
                                                                    input==="courseDescription"&&formErrors.courseDescription?'2px solid #C84941':
                                                                    '2px solid #002495'}`,
                                                                width:'100%',
                                                                height:'40px'}}/>}
                           


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
                                                                         input==="courseName"?formErrors.courseName:
                                                                         input==="courseDescription"?formErrors.courseDescription:
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
                                    <GridItem xs={12} sm={12} md={12} style={{
                                        textAlign:'center',
                                        }}>
                                      
                                    <div>
                                            <div  style={{borderRadius:"5px 5px 5px 5px",cursor:'pointer'}}>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                       
                                                        <div>
                                                                <div onClick={handleClickFileInput} class="text-xs font-weight-bold text-center" style={{fontSize:'100%',color:"blue"}}>
                                                                 <u>Ajouter une Leçon</u>
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
                                                        {todoList.name.length <= 24? 
                                                            todoList.name.split(".").shift():todoList.name.substr(0,24)+"..." }
                                                    </td>
                                                    <td>{ todoList.size != 0? toFixedIfNecessary(todoList.size/1000/1000, 2) + ' MB' : ''} </td>
                                                    <td>{ todoList.type === "mp4"? <img src={videoIcon} width='20%' />: todoList.type === "pdf"? <img src={pdfIcon} width='20%' />:""} </td>
                                                    <td><i className="far fa-window-close" style={{ fontSize:25+'px',color:'#17879C',cursor:'pointer' }}/></td>
                                                </tr>
                                          
                                </tbody>
                            </table>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                   {!isAdd?
                                    <div onClick={handleUpdateCourse} style={{cursor:'pointer',
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
                                
                                        <span className="text" style={{fontSize:'100%',color:'white'}}>Update Course</span>
                                     </div>
                                    </div>:
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
                                    </div>}
                                      
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
export default connect(mapStateToProps)(AddCourse);
