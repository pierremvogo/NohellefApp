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
import ins1 from '../../../../assets/images/home/ins1.png';
import ins2 from '../../../../assets/images/home/ins2.png';
import mpay from '../../../../assets/images/dashboard/mpay.png';
import divid from '../../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import Avatar   from 'react-avatar';
import Select from 'react-select';

const RegisterStudent = ({error,onChildCloseModal,onChildClickLogin}) => {
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

    const clickHandlerCloseModal=(e)=>{
            onChildCloseModal(e.target.name);
    }
    const clickHandlerConnectModal=(e)=>{
        onChildClickLogin(e.target.name);
    }

    const onChangeLogin = (e) => {
        setLoginForm({...loginForm,  [e.target.name]: e.target.value })}

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    const options = [
    { value: 'chocolate', label: 'Niveau1' },
    { value: 'strawberry', label: 'Niveau2' },
    { value: 'vanilla', label:  'Niveau3'}
  ]

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

        <div style={{backgroundColor:'#FBAB0D',
                     borderRadius:'25px 25px 25px 25px',
                     position:'absolute',
                     width:'110%',
                     top:'-295px'
                     
                     }}>
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
                                height:'640px',
                                backgroundColor:'#FBAB0D',
                                padding:'1% 5% 2% 5%'
                                
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                     <div style={{margin:'0% 0% 1% 0%',cursor:'pointer'}}>
                                         <span style={{float:'left',marginRight:'2%'}} onClick={(e)=>clickHandlerConnectModal(e)}>Se connecter</span>
                                         <span style={{color:'blue'}}><u>S'inscrire</u></span>
                                         <span className='close' style={{float:'right'}} onClick={(e)=>clickHandlerCloseModal(e)}>&times;</span>
                                     </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                       <div style={{margin:'0% 0% 0% 0%',color:'blue'}}>
                                          <span style={{marginRight:'5%',fontSize:'1.2vw'}}>Avez-vous 18 ans?</span>
                                          <img src={ins1} width='12%' />
                                      </div>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                       <div style={{margin:'0% 0% 5% 0%',fontSize:'1.2vw'}}>
                                            <span style={{color:'blue'}}>Quel est votre niveau?</span>
                                          
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                      
                                     <div>
                                         <input type='checkbox' style={{
                                                border:'2px solid #002495',
                                                width:'10%',
                                                height:'15px'}} />
                                         <span style={{color:'blue',fontSize:'1.2vw'}}>Je confirme avoir plus de 18 ans</span>
                                        
                                     </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                      
                                     <div>
                                          <select name="pets" id="pet-select">
                                                <option value="">Niveau</option>
                                                <option value="dog">Niveau 1</option>
                                                <option value="cat">Niveau 2</option>
                                                <option value="hamster">Niveau 3</option>
                                                <option value="parrot">Niveau 3</option>
                                                <option value="spider">Niveau 4</option>
                                                <option value="goldfish">Niveau 5</option>
                                        </select>
                                        
                                     </div>
                                    </GridItem>
                                  </GridContainer>


                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div>
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'blue',
                                                fontSize:'1.5vw'}}><strong style={{marginRight:'2%'}}>Informations personnelles</strong> 
                                                <img src={ins2} width='5%'/>
                                            </div>
                                        
                                        </div>
                                       
                                    </GridItem>
                                  </GridContainer>



                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>
                                      
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                            Nom
                                         <input type='text' placeholder="" style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                     
                                    <GridItem xs={12} sm={12} md={4}>
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                        Prénom
                                         <input type='text' placeholder="" style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                     
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                        Email
                                         <input type='email' placeholder="" style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>
                                      
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                        Téléphone
                                         <input type='text' placeholder="" style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                      Ville
                                         <input type='text'  style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                       Adresse
                                         <input type='text' style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                  </GridContainer>

                                   <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>
                                      
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                     Mot de passe
                                         <input type='text' style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                     <div style={{width:'100%',cursor:'pointer'}}>
                                     Confirmer mot de passe
                                         <input type='text'  style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                         
                                     </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                     <div style={{
                                                margin:'9% 0% 0% 0%',
                                                width:'100%',
                                                height:'45px',
                                                backgroundColor:'#c7d0d8'}}>
                                            Recapchat
                                      </div>
                                    </GridItem>
                                  </GridContainer>

                                  

                                   <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{
                                        margin:'2% 2% 0% 0%',
                                        color:'blue',
                                        fontSize:'1.5vw'}}><strong style={{marginRight:'2%'}}>Informations bancaire</strong>
                                         <img src={mpay} width='5%'/>
                                        </div>
                                            
                                    </GridItem>
                                  </GridContainer>

                                   <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>  
                                         Numéro de carte
                                         <input type='text' style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={4}>
                                         Date d'expiration
                                      <GridContainer>
                                          <GridItem xs={12} sm={12} md={6}>
                                               <input type='text' placeholder="MM" style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}/>
                                        
                                          </GridItem>
                                         
                    
                                         
                                          <GridItem xs={12} sm={12} md={6}>
                                               <input type='text' placeholder="YY" style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}/>
                                          </GridItem>
                                      </GridContainer>

                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={4}>
                                       Code
                                         <input type='text' style={{
                                                border:'2px solid #002495',
                                                width:'100%',
                                                height:'40px'}}
                                         />
                                    </GridItem>
                                  </GridContainer>

                    


                                   <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       <div style={{margin:'0%'}}>
                                          <input type='checkbox' />
                                          <span style={{marginLeft:'2%',fontSize:'1.2vw'}}>En cliquant sur "M'inscrire" je confirme avoir pris connaissance des termes et
conditions d'utilisation de Online Nohellef</span>
                                      </div>
                                    </GridItem>
                                
                                  </GridContainer>

                                   <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    
                                    <div style={{cursor:'pointer',
                                          margin:'2% 20% 0% 20%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#5271ff',
                                          borderRadius: '15px',
                                          borderBottom: '5px solid #002495',
                                          borderRight:  '5px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '55px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'2%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'1.2vw',color:'white'}}>M'inscrire</span>
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
export default RegisterStudent;
