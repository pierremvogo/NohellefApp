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
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import mediaService from '../../services/media.service';
import add from '../../../assets/images/dashboard/add.png';
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

const AddQuiz = ({error,
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
    const [registerQuizForm, setRegisterQuizForm] = useState(
                            registersForm?registersForm:{
                            courseName:courseData?courseData.title:"",
                            courseSpeciality:courseData.speciality?courseData.speciality.code:"",
                            courseLevel:courseData.levels? courseData.levels.map((value,index) =>{return(value.level)}):[null],
                            courseDescription:courseData?courseData.description:"",
                            courseChapter:courseData?courseData.chapters:"", 
                            courseUnderChapter:courseData?courseData.underChapters:""
                        } );

    const [addInput, setAddInput] = useState([
                                            {
                                                question:"",
                                                reponses: [{reponse: "", isReponse: false}]
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

    

    const onChangeRegisterQuiz = (e) => {
        setRegisterQuizForm({...registerQuizForm,  
                                [e.target.name]:e.target.name==="courseLevel"
                                ?
                                Array.from(e.target.selectedOptions, item => item.value):
                                e.target.value });
        setFormErrors(validateForm(registerQuizForm));
        dispatch(authRegisterFailed(null)); 
        dispatch(authSetRegisterForm(registerQuizForm));
        console.log(registerQuizForm); 
        }
        
    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setFormErrors(null)
    }

     const handleAddQuestion = (e) => {
        e.preventDefault();
        setAddInput(addInput.concat(
            {
                question:"", 
                reponses:
                        [
                            {
                                reponse:"", isReponse: false
                            }
                        ]
            }
            ));

        console.log("My FINAL INPUT");
        console.log(addInput);
    }

    const handleAddResponse = (id) => {
        console.log("add Response TO >>>>>");
        console.log(addInput[id].reponses);

        addInput[id].reponses = addInput[id].reponses.concat([
                            {
                                reponse:"", isReponse: false
                            }
                        ])
 
    }

    const handleDeleteResponse = (id) => {
        
    }

    const handleDeleteQuestion = (id) => {
     
    }

    const onSubmit = (e) => {
       e.preventDefault();
       console.log("Submit Quiz");
       console.log(addInput);
   
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
                                height:'600px',
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
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Nouveau Quiz</strong> 
                                                <img src={ins2} width='10%'/>
                                            </div>
                                        
                                        </div>
                                     </div>
                                    </GridItem>

                                     <GridItem xs={4} sm={4} md={4}>
                                      
                                     <div onClick={handleAddQuestion} style={{cursor:'pointer',
                                          margin:'0% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '10px',
                                          borderBottom: '1px solid #002495',
                                          borderRight:  '1px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '45px',
                                          width: '80%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }}>
                                
                                        <span className="text" style={{fontSize:'100%',color:'white'}}>Ajouter</span>
                                     </div>
                                    </div>
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
                                                        {Object.keys(addInput).map((input,index)=>{
                                                           
                                                            return(
                                                                 
                                                                    <GridContainer key={index}>
                                                                        <GridItem xs={12} sm={12} md={12} style={{margin:'2%'}}>
                                                                            <GridContainer>
                                                                                <GridItem xs={11} sm={11} md={11}>
                                                                                    <textarea
                                                                                        type={"text"}
                                                                                        id={`question${index}`}
                                                                                        name={`question${index}`}
                                                                                        placeholder="Question"
                                                                                        onChange={onChangeRegisterQuiz}
                                                                                        value={addInput[input].question}   

                                                                                        style={{
                                                                                            width:'100%',
                                                                                            height:'40px'}}>
                                                                                                
                                                                                    </textarea>
                                                                                </GridItem>
                                                                                <GridItem xs={1} sm={1} md={1} style={{marginTop:"2%"}} onClick={()=>handleDeleteQuestion(index)}>
                                                                                            {index != 0? <img style={{cursor:'pointer'}} src={trash} width="50%" /> : ""} 
                                                                                </GridItem>

                                                                            </GridContainer>
                                                                            {Object.keys(addInput[input].reponses).map((input1,index1)=>{
                                                                                console.log("////////*********  "+ JSON.stringify(addInput[input].reponses[input1]));
                                                                                return(
                                                                                <GridContainer>
                                                                                <GridItem xs={12} sm={12} md={12}>
                                                                                    <GridContainer>
                                                                                        <GridItem xs={6} sm={6} md={6}>
                                                                                            <textarea
                                                                                                type={"text"}
                                                                                                id={`reponse${index1}`}
                                                                                                name={`reponse${index1}`}
                                                                                                placeholder="Réponse"
                                                                                                onChange={onChangeRegisterQuiz}
                                                                                                value={addInput[input].reponses[input1].reponse}   

                                                                                                style={{
                                                                                                width:'90%',
                                                                                                height:'40px'}}>
                                                                                                    
                                                                                            </textarea>
                                                                                            <input 
                                                                                                style={{cursor:'pointer',margin:"1%"}}
                                                                                                type='checkbox'
                                                                                                onChange={onChangeRegisterQuiz}
                                                                                                id="checktrue"
                                                                                                value={addInput[input].reponses[input1].isReponse}
                                                                                                
                                                                                              />
                                                                                        </GridItem>
                                                                                            <GridItem xs={3} sm={3} md={3} style={{textAlign:"right", marginTop:"2%"}} onClick={()=>handleAddResponse(index)}>
                                                                                                <img style={{cursor:'pointer'}} src={add} width="18%" />
                                                                                            </GridItem>

                                                                                            <GridItem xs={3} sm={3} md={3} style={{marginTop:"2%"}} onClick={()=>handleDeleteResponse(index)}>
                                                                                                 {index1 != 0 ?<img style={{cursor:'pointer'}} src={trash} width="10%" />: ""}
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
export default connect(mapStateToProps)(AddQuiz);
