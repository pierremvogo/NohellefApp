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
import trash from '../../../assets/images/dashboard/trash.png';
import add from '../../../assets/images/dashboard/add.png';

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

const AddQro = ({error,
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
    const [isPreviewQuestion, setIsPreviewQuestion] = useState("");
    const [registerQuizForm, setRegisterQuizForm] = useState(registersForm?registersForm:[
                                            {
                                                id: "1",
                                                questionText:"",
                                                answers: [{id: "1",answerText: "", correct: false}]
                                            },
                                            ]);

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

    const onChangeRegisterQuiz = (e) => {
            for(var i=0; i<registerQuizForm.length; i++){
                 if(e.target.name===`question${e.target.id}`){
                  registerQuizForm[e.target.id].questionText = e.target.value;
                 }else if(e.target.name === `reponse-${e.target.id.split("-")[0]}-${e.target.id.split("-")[1]}`){
                        registerQuizForm[e.target.id.split("-")[0]].answers[e.target.id.split("-")[1]].answerText = e.target.value;
                    }else if(e.target.name === `check-${e.target.id.split("-")[0]}-${e.target.id.split("-")[1]}`){
                        registerQuizForm[e.target.id.split("-")[0]].answers[e.target.id.split("-")[1]].correct = e.target.checked;
                    }
                }
        setFormErrors(validateForm(registerQuizForm));
        dispatch(authRegisterFailed(null)); 
        dispatch(authSetRegisterForm(registerQuizForm));
        console.log(registerQuizForm); 
        }
        
    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(null)
    }

     const handleAddQuestion = (id) => {
            setRegisterQuizForm(registerQuizForm.concat(
            {
                id: (registerQuizForm.length+1).toString(),
                questionText:"",
                answers: [
                          {
                            id: "1",answerText: "", correct: false
                          }
                         ]
            }
            ));
    }

    const handleAddResponse = (id,id1) => {
        console.log(registerQuizForm[id].answers.length+1)
        registerQuizForm[id].answers = registerQuizForm[id].answers.concat([
                          {
                            id: (registerQuizForm[id].answers.length+1).toString(),answerText: "", correct: false
                          }
                         ])
        setRegisterQuizForm([...registerQuizForm])
    }

    const handleDeleteQuestion = (id) => {
        registerQuizForm.splice(id, 1)
        setRegisterQuizForm([...registerQuizForm])

    }
    const handleDeleteResponse = (id,id1) => {
        registerQuizForm[id].answers.splice(id1, 1);
        setRegisterQuizForm([...registerQuizForm])
    }

   
/*function removeDuplicateObjectFromArray(array, key) {
  var check = new Set();
  return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]));
}*/
    const onSubmit = (e) => {
       e.preventDefault();
       let quizPayload =  {
              title: "QuizQCM-"+courseData.title,
              duration: 0,
              levels: 
                courseData.levels.map((value,index)=>{return(value.level)})
              ,
              coursesIds: [
                courseData.id
              ],
              type: courseData.type,
              questions: registerQuizForm

        } 
        console.log("My register Quiz form");
        console.log(quizPayload); 
        handleLoading(true);
        adminService.createCourseExercice(quizPayload)
        .then((response)=>{
            console.log("Create Quiz QCM successfully")
            console.log(response.data);
            handleLoading(false);
        })
        .catch((error)=>{
            console.log("Error create quiz QCM")
            console.log(error)
            handleLoading(false);
        })
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
                                height:'650px',
                                fontSize:"80%",
                                margin:'4%',
                                padding:'2%',

                                
                                
                              }}>
                              <GridContainer>
                                  <GridItem xs={12} sm={12} md={12} style={{textAlign:'right'}}>
                                   <span style={{fontSize:'25px',cursor:'pointer', margin:'2%'}}  onClick={(e)=>closeModal(e)}>&times;</span>
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
                                    <GridItem xs={8} sm={8} md={8}>
                                      
                                     <div style={{margin:'2% 0% 1% 0%'}}>
                                         <div>
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'black',
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Nouveau Quiz QRO</strong> 
                                                <img src={ins2} width='10%'/>
                                            </div>
                                        
                                        </div>
                                     </div>
                                    </GridItem>

                                      <GridItem xs={4} sm={4} md={4}>
                                      
                                    
                                     </GridItem>

                                  </GridContainer>

                                  <div style={{ backgroundColor:"#EEEEEE", 
                                                padding:"1%", 
                                                overflowY:"scroll", 
                                                height:"400px"}}>
                                  <GridContainer>
                                      <GridItem xs={12} sm={12} md={12}>
                                            <GridContainer>
                                           
                                            <GridItem xs={12} sm={12} md={12}>
                           
                                              <GridContainer>
                                                  <GridItem xs={12} sm={12} md={12}>
                                                        {Object.keys(registerQuizForm).map((input,index)=>{
                                                          
                                                            return(
                                                            
                                                                    <GridContainer key={index}>
                                                                        <GridItem xs={12} sm={12} md={12} style={{margin:'2%'}}>
                                                                            <GridContainer>
                                                                                <GridItem xs={10} sm={10} md={10}>
                                                                                    <textarea
                                                                                        type={"text"}
                                                                                        id={index}
                                                                                        name={`question${index}`}
                                                                                        placeholder="Question"
                                                                                        onChange={onChangeRegisterQuiz}
                                                                                        value={registerQuizForm[input].questionText}   

                                                                                        style={{
                                                                                            width:'100%',
                                                                                            height:'40px'}}>
                                                                                                
                                                                                    </textarea>
                                                                                </GridItem>
                                                                                <GridItem xs={1} sm={1} md={1} style={{marginTop:"2%"}} onClick={()=>handleAddQuestion(index)}>
                                                                                         <img style={{cursor:'pointer'}} src={add} width="90%" />
                                                                                </GridItem>
                                                                                <GridItem xs={1} sm={1} md={1} style={{marginTop:"2%"}} onClick={()=>handleDeleteQuestion(index)}>
                                                                                         {index != 0? <img style={{cursor:'pointer'}} src={trash} width="50%" /> : ""}
                                                                                </GridItem>

                                                                            </GridContainer>
                                                                            {Object.keys(registerQuizForm[input].answers).map((input1,index1)=>{
                                                                            return(
                                                                                <GridContainer>
                                                                                <GridItem xs={12} sm={12} md={12}>
                                                                                    <GridContainer>
                                                                                        <GridItem xs={6} sm={6} md={6}>
                                                                                            <textarea
                                                                                                type={"text"}
                                                                                                id={`${index}-${index1}`}
                                                                                                name={`reponse-${index}-${index1}`}
                                                                                                placeholder="Réponse"
                                                                                                onChange={onChangeRegisterQuiz}
                                                                                                value={registerQuizForm[input].answers[input1].answerText}   

                                                                                                style={{
                                                                                                width:'90%',
                                                                                                height:'40px'}}>
                                                                                                    
                                                                                            </textarea>
                                                                                            <input 
                                                                                                style={{cursor:'pointer',margin:"1%"}}
                                                                                                type='checkbox'
                                                                                                name={`check-${index}-${index1}`}
                                                                                                onChange={onChangeRegisterQuiz}
                                                                                                id={`${index}-${index1}`}
                                                                                                value={"checkResponse"}
                                                                                                
                                                                                              />
                                                                                        </GridItem>
                                                                                            <GridItem xs={3} sm={3} md={3} style={{textAlign:"right", marginTop:"2%"}} onClick={()=>handleAddResponse(index,index1)}>
                                                                                                
                                                                                            </GridItem>

                                                                                            <GridItem xs={3} sm={3} md={3} style={{marginTop:"2%"}} onClick={()=>handleDeleteResponse(index,index1)}>
                                                                                                
                                                                                            </GridItem>

                                                                                    </GridContainer>
                                                                                </GridItem>
                                                                            </GridContainer>
                                                                                    )
                                  
                                                                            })}
                                               

                                                                        </GridItem>
                           
                                                                        </GridContainer>
                                                                )
                                                   
                                                        })}
                                                        
                                                  </GridItem>
                                              </GridContainer>
                     
                                            </GridItem>
                                            </GridContainer>
                                            </GridItem>
                                            
                                  </GridContainer>
                                    </div>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12} style={{textAlign:'right'}}>
                                    
                                    <div onClick={onSubmit} style={{cursor:'pointer',
                                          margin:'3% 0% 5% 0%',
                                          textAlign:'right'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '10px',
                                          borderBottom: '1px solid #002495',
                                          borderRight:  '1px solid #002495',
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
export default connect(mapStateToProps)(AddQro);
