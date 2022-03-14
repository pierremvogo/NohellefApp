import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../../../app/components/buttons/button';
import Card from "../../../../app/components/Card/Card.js";
import CardHeader from "../../../../app/components/Card/CardHeader.js";
import CardBody from "../../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../../app/components/Card/CardFooter.js";
import GridItem from "../../../../app/components/Grid/GridItem.js";
import smileauth from '../../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../../assets/images/im10.png';
import mpay from '../../../../assets/images/dashboard/mpay.png';
import divid from '../../../../assets/images/dashboard/divid.png';
import './auth.screen.css';

import ask1 from '../../../../assets/images/home/ask1.png';
import ask2 from '../../../../assets/images/home/ask2.png';
import ask3 from '../../../../assets/images/home/ask3.png';

import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';

import RegisterStudent from './registerStudent.jsx';
import RegisterParent from './registerParent.jsx';
import RegisterTutor from './registerTutor.jsx';


const AskRegister = ({error,
   onChildClickStudentRegister,
   onChildClickParentRegister,
   onChildClickLogin,
   onChildCloseModal
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

    const [showRegisterStudent, setShowRegisterStudent] = useState(false);
    const [showRegisterParent, setShowRegisterParent] = useState(false);
    const [showRegisterTutor, setShowRegisterTutor] = useState(false);
    const [showAskRegister, setShowAskRegister] = useState(true);

    const [isTutor, setIsTutor] = useState(false);



    const outPutCloseModal=(e)=> {
        setShowAskRegister(true,setShowRegisterStudent(false));
    }

    const clickCloseModal = (content) => {
        onChildCloseModal(content);
    }

    const onChangeLogin = (e) => {
        setLoginForm({...loginForm,  [e.target.name]: e.target.value })}

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }


     const clickHandlerStudentRegister=(e)=>{
            changeStyle("myDiv1");
            onChildClickStudentRegister(e.target.name);
    }
    const clickHandlerParentRegister=(e)=>{
            changeStyle("myDiv3")
            onChildClickParentRegister(e.target.name);
    }

    const clickHandlerLogin=(e)=>{
            onChildClickLogin(e.target.name);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (submited) { return } 
        if(isLoginForm) {
            if(loginForm.username.trim()=='admin'&&loginForm.password.trim()=='admin'){
              
                history.push('/admin/dashboard');
            }else if(loginForm.username.trim()=='stud'&&loginForm.password.trim()=='stud'){
             
                history.push('/student/dashboard');
            }else if(loginForm.username.trim()=='tutor'&&loginForm.password.trim()=='tutor'){
               
                history.push('/tutor/dashboard');
            }
               
             //dispatch(authSignIn({...loginForm, redirect: history.location.state?.pathname || 'dashboard'}));
        } 
        setSubmited(true);
    }
    useEffect(()=>{
        /*var element1 = document.getElementById("myDiv1");
        if(element1){
              element1.style.backgroundColor = "#DD1B16";
             let tab1 = [
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
            ];
            for(var i of tab1){
                i.style.backgroundColor = ""
            }
        }*/
      
    },[])

    function openRegisterUser(e){
        if(selectUserId == "myDiv1"){
            clickHandlerStudentRegister(e);
        }else if(selectUserId == "myDiv3"){
            clickHandlerParentRegister(e);
    }}

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
                marginLeft:"-10%",
                position:"fixed"
                }}>
                   
                    <GridContainer>
                     <GridItem xs={12} sm={12} md={12}>
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                
                                borderRadius:'25px 25px 25px 25px',
                                width:'160%',
                                height:'250px',
                                backgroundColor:'#ffce52',
                                
                                padding:'2%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'2% 0% 5% 0%',cursor:'pointer'}}>
                                         <span onClick={(e)=>clickHandlerLogin(e)} style={{float:'left',marginRight:'5%'}}><u>Se connecter</u></span>
                                         <span className='close' style={{fontSize:"1.5em"}} onClick={()=>clickCloseModal('ask')}>&times;</span>
                                     </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{margin:'0% 0% 5% 0%'}}>
                                      Qui êtes vous ?
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12} style={{margin:'0% 10% 1% 10%'}}>
                                      <div className="side-content" id="myDiv1" onClick={()=>history.push('/auth/student/register')}>
                                            <div style={{padding:'3%',display:'inline-block'}}>
                                                <img src={ask1} width='10%' />
                                                <span className="text" style={{marginLeft:'25%'}}>Je suis Apprenant</span>
                                            </div>
                                           
                                    </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <div id="myDiv2" >
                                            
                                           
                                          </div>
                                    </GridItem>
                                  </GridContainer>


        

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12} style={{margin:'0% 10% 1% 10%'}}>
                                    
                                     <div className="side-content" id="myDiv3" onClick={()=>history.push('/auth/parent/register')}>
                                            <div style={{padding:'3%',display:'inline-block'}}>
                                               <img src={ask3} width='10%' />
                                               <span className="text" style={{marginLeft:'30%'}}>Je suis Parent</span>
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
export default AskRegister;
