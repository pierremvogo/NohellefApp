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

const EditOffre = ({error,offreData}) => {
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

    useEffect(()=>{
       console.log('offredata',offreData)
    },[])

    const onChangeLogin = (e) => {
        setLoginForm({...loginForm,  [e.target.name]: e.target.value })}

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
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
	return(

        <div style={{backgroundColor:'#ffce52',borderRadius:'25px 25px 25px 25px', width:'120%'}}>
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
                                width:'150%',
                                height:'360px',
                                backgroundColor:'#ffce52',
                                margin:'20% 0% 0% 0%',
                                padding:'2%'
                              }}>
                                




                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                               
                                         <span style={{float:'left',marginRight:'5%'}}>Offre d'abonnement</span>
                                         <span></span>
                                   
                                    </GridItem>
                                  </GridContainer>



                                  
                                    <GridContainer>
                                   
                                        
                                            <GridItem xs={12} sm={12} md={12}>
			                                  <select name="pets" id="pet-select">
			                                    Offres
			                                    <option value="dog">Offre Basique</option>
			                                    <option value="cat">Offre Chat</option>
			                                    <option value="hamster">Offre Web-Conférence</option>
			                                  </select>
                                            </GridItem>
                                        
                                           
                                     
                               
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                  
                                         <span>Prix</span>
                                        
                                    
                                    </GridItem>
                                  </GridContainer>
									<GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                       <input type='text'  value={offreData.offrePrix} style={{
                                        border:'2px solid #002495',
                                        width:'100%',
                                        height:'40px'}}/>
                                    
                                    </GridItem>
                                  </GridContainer>

                                




                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                   
                                         <span >Type d'abonnement</span>
                                         
                                  
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       
                                     <select name="pets" id="pet-select">
                                                Offres
                                                <option value="dog">Mensuel</option>
                                                <option value="cat">Annuel</option>
                                               
                                              </select>
                                  
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'10% 0% 5% 0%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '15px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '45px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'3%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Ajouter</span>
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
export default EditOffre;
