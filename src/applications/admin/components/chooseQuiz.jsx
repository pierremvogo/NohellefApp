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
import Loader from 'react-loader-spinner';
import AddQuiz from './addQuiz.jsx';
import AddQro from './qro.jsx';
import AddQuizImage from './addQuizImage.jsx';

import quiz from '../../../assets/images/dashboard/quiz.png';
import quizm from '../../../assets/images/dashboard/quizm.png';
import qro from '../../../assets/images/dashboard/qro.png';
import './chooseQuiz.css';



import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Footer from "../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';



const ChooseQuiz = ({  error,
                       onChildClickStudentRegister,
                       onChildClickParentRegister,
                       onChildClickLogin,
                       onChildCloseModal,
                       courseData,
                       onChildOpenQuiz,
   }) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState({username: "", password: "", remember: false})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()

    const [selectUserId, setSelectUserId] = useState('');
    const [showModalLoading, setShowModalLoading] = useState(false);
    const [showRegisterStudent, setShowRegisterStudent] = useState(false);
    const [showRegisterParent, setShowRegisterParent] = useState(false);
    const [showRegisterTutor, setShowRegisterTutor] = useState(false);
    const [showAskRegister, setShowAskRegister] = useState(true);
    const [display, setDisplay] = useState("flex");
    const [showModalAddQuiz, setShowModalAddQuiz] = useState(false);
    const [showModalAddQro, setShowModalAddQro] = useState(false);
    const [showModalAddQuizImage, setShowModalAddQuizImage] = useState(false);

    const [isTutor, setIsTutor] = useState(false);



  useEffect(()=>{
      
    },[])

    function closeModal(e){
        if(e){
             onChildCloseModal(e.target.name);}
        else{
            setShowModalAddQuiz(false,
                setShowModalAddQuizImage(false),
                setShowModalAddQro(false),);
        }
              
                
     

    }


  
  
    const ModalAddQuiz  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            
            display: display,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            //overflowY: "scroll",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
        
          <AddQuiz
                      onChildCloseModal={closeModal} 
                      courseData={courseData}
                      onchildOpenLoading={handleLoading} /> 
              
      
      </div>
    )
  };

  const ModalAddQro  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            
            display: display,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            //overflowY: "scroll",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
        
          <AddQro
                      onChildCloseModal={closeModal} 
                      courseData={courseData}
                      onchildOpenLoading={handleLoading} /> 
              
      
      </div>
    )
  };

  const ModalAddQuizImage  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            
            display: display,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            //overflowY: "scroll",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
        
          <AddQuizImage
                      onChildCloseModal={closeModal} 
                      courseData={courseData}
                      onchildOpenLoading={handleLoading} /> 
              
      
      </div>
    )
  };
  const openModalQuiz = (type) => {
    onChildOpenQuiz(type);
  }
   const openModalQro = (type) => {
    onChildOpenQuiz(type);
  }
   const openModalQuizImage = (type) => {
    onChildOpenQuiz(type)
  }

   const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            display: display,
            zIndex: "900000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
            <div
                style={{
                    width: "10%",
                    height: "30%",
                    zIndex: "300000",
                    display: "flex",
                    position: "absolute",
                    top: "30%",
                    left: "48%"
                }}
                >
                <Loader type="Oval" color="#2BAD60" height="100" width="70" />
            </div>
          
      </div>
    )
  };
  const handleLoading = (isShow) => {
    setShowModalLoading(isShow);
  }


     function changeStyle(id){
        let element = document.getElementById(id);
        if(id=="myDiv1"){
            element.style.backgroundColor = "#dd1b16";
            setSelectUserId(id);
            let tab = [
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
            ];
            for(var i of tab){
                i.style.backgroundColor = ""
            }
            
        }
        else if(id=="myDiv2"){
            element.style.backgroundColor = "#dd1b16";
            setSelectUserId(id);
            setIsTutor(true);
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv3'),
            
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv3"){
            element.style.backgroundColor = "#dd1b16";
            setSelectUserId(id);
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
               
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        
    }
    return(

    <div style={{
                backgroundColor:'#ffce52',
                borderRadius:'25px 25px 25px 25px',
                margin:"15% 0% 0% 0%",
                position:"absolute"
                }}>
                {showModalAddQuiz? <ModalAddQuiz /> :'' } 
                {showModalAddQro? <ModalAddQro /> :'' } 
                {showModalAddQuizImage? <ModalAddQuizImage /> :'' } 
                   
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={12}>
                     <GridContainer>
                                  <GridItem xs={12} sm={12} md={12} style={{textAlign:'right'}}>
                                   <span style={{fontSize:'25px',cursor:'pointer', margin:'2%'}}  onClick={(e)=>closeModal(e)}>&times;</span>
                                  </GridItem>
                              </GridContainer>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                
                                borderRadius:'25px 25px 25px 25px',
                                width:'400px',
                                height:'200px',
                                backgroundColor:'#ffce52',
                                
                                padding:'2%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{margin:'0% 0% 5% 0%'}}>
                                     
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12} style={{margin:'0% 10% 1% 10%'}}>
                                      <div className="side-content" id="myDiv1" onClick={()=>openModalQuiz("qcm")}>
                                            <div style={{padding:'3%',display:'inline-block'}}>
                                                <img src={quiz} width='25%' />
                                                <span className="text" style={{marginLeft:'15%'}}>Quiz QCM</span>
                                            </div>
                                           
                                    </div>
                                    </GridItem>
                                  </GridContainer>

             
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12} style={{margin:'0% 10% 1% 10%'}}>
                                    
                                     <div className="side-content" id="myDiv3" onClick={()=>openModalQro("qro")}>
                                            <div style={{padding:'3%',display:'inline-block'}}>
                                               <img src={qro} width='25%' />
                                               <span className="text" style={{marginLeft:'15%'}}>Quiz QRO</span>
                                            </div>
                                            
                                     </div>
                                      
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
export default ChooseQuiz;
