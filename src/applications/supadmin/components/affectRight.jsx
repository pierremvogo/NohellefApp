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

const AffectRigth = ({error,adminName,onChildCloseModal}) => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [rightForm, setRightForm] = useState({adminName: adminName, rightContent: ""})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()

    

    const onChangeRight = (e) => {
        setRightForm({...rightForm,  [e.target.name]: e.target.value })}

    const onChangeResetPassword = (e) => {
        setResetPasswordForm({...resetPasswordForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    function closeModal(e){
      onChildCloseModal(e.target.name);
  }

    const onSubmit = (e) => {
        
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
                              <div style={{
                                
                                borderRadius:'25px 25px 25px 25px',
                                width:'100%',
                                height:'360px',
                                backgroundColor:'#ffce52',
                                margin:'5%',
                                padding:'2%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <span className='close' style={{fontSize:'20px',cursor:'pointer'}} onClick={(e)=>closeModal(e)}>&times;</span>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      
                                    
                                      
                                            <div style={{
                                                margin:'2% 2% 0% 0%',
                                                color:'blue',
                                                fontSize:'100%'}}><strong style={{marginRight:'2%'}}>Attribuer un droit</strong> 
                                               
                                            </div>
                                      
                                    
                                    </GridItem>
                                  </GridContainer>

                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                       {Object.keys(rightForm).map((input,index)=>{
                                        let label,name,type,id;
                                        if(input==="adminName"){
                                            label="Nom de l'administrateur";
                                            name="adminName";
                                            type="text";
                                            id="adminName";
                                        }else if(input==="rightContent"){
                                            label="Définir le droit";
                                            name="rightContent";
                                            type="text";
                                            id="rightContent";
                                        }
                                        return(
                                            <GridContainer key={index}>
                                                <GridItem xs={12} sm={12} md={12} style={{margin:'5% 0% 0% 0%'}}>
                                                {label}
                                                    
                                              <input 
                                                 type={type}
                                                 value={rightForm[input]}  
                                                 name={name}
                                                 onChange={onChangeRight}

                                                 style={{
                                                    border:'2px solid #002495',
                                                    width:'100%',
                                                    height:'40px'}}/>
                                       
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

                    
                              </div>


                          </GridItem>
                        </GridContainer>
                      </GridItem>


                    </GridContainer>
                    
			 </div>
		)
}
export default AffectRigth;
