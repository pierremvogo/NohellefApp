import React, { useEffect, useState } from 'react';
import Button from '../../../../app/components/buttons/button';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
/*import userService from '../../../services/user.service';
import {authLogout} from '../../../auth/redux/reducer/actions/auth';
import AuthLogin from '../../../auth/pages/auth.screen/auth_login';
import Header from '../../../../app/components/header/header';
import Footer from '../../../../app/components/footer/footer';*/
import Avatar   from 'react-avatar';
import DownloadLink from "react-download-link";
import Loader from 'react-loader-spinner';
//import Modals from '../../../../app/components/modals/modals';
//import PayPal from '../../../../app/components/paypal/paypal'
import slogan from '../../../../assets/images/main/sloagan.png';
import fiche1 from '../../../../assets/images/main/fiche1.png';
import mise1 from '../../../../assets/images/main/mise1.png';
import offre1 from '../../../../assets/images/main/offre1.png';
import offre2 from '../../../../assets/images/main/offre2.png';
import offre3 from '../../../../assets/images/main/offre3.png';
import pour1 from '../../../../assets/images/main/pour1.png';
import smile from '../../../../assets/images/main/smile.png';
import video1 from '../../../../assets/images/main/video1.png';
import web1 from '../../../../assets/images/main/web1.png';
import de from '../../../../assets/images/main/de.png';
import a2 from '../../../../assets/images/a2.png';
import c1 from '../../../../assets/images/c1.png';
import c2 from '../../../../assets/images/c2.png';
import im3 from '../../../../assets/images/im3.png'
import im5 from "../../../../assets/images/im5.png"
import im4 from "../../../../assets/images/im4.png"
import im7 from "../../../../assets/images/im7.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../../../assets/css/templatemo-style.css';
import { Carousel } from 'react-responsive-carousel';
import Header from "../../../../app/components/header/header.jsx";
import Footer from "../../../../app/components/footer/footer.jsx";
import './home.screen.css';

import GridItem from "../../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Card from "../../../../app/components/Card/Card.js";
import CardHeader from "../../../../app/components/Card/CardHeader.js";
import CardBody from "../../../../app/components/Card/CardBody.js";
import { ReactComponent as Eye } from '../../../../assets/css/icons/eye.svg';
import { ReactComponent as Uneye } from '../../../../assets//css/icons/uneye.svg';
import Modals from '../../../../app/components/modals/modal';
import AskRegister from '../../../auth/pages/auth.screen/askRegister.jsx';

//#273941
const Home = ({error}) => {

    const [showAskModal,setShowAskModal] = useState(false);
    const handleConnexionClose = () =>{setShowAskModal(false)};
    const [displayAsk, setDisplayAsk] = useState("flex");
    const history = useHistory()

    const ModalAskInscription = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "4000px",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
            <div className="contain" id='myContain'>
                <div style={{display:'inline-block', fontSize:'1.5vw'}}>
                   
                </div><span className='close' onClick={()=>closeModal()}>&times;</span>
                <AskRegister /> 
            </div>
          
      </div>
    )
  };
   
  /*{showConnexionModal&&document.getElementById('cont').addEventListener("click", function(event){
    if(!event.target.closest("contain")){
        closeModal();
    }
  })}*/
   function closeModal(){
    setDisplayAsk("none",setShowAskModal(false))
  }

    const outPutEventConnexion=(e)=> {
        history.push('/auth/login')
    }

  const outPutEventRegister=(e)=> {
   setDisplayAsk("flex",setShowAskModal(true))
    }

    
    return(
        <div>
        {showAskModal? <ModalAskInscription /> :'' } 
        <Header onChildClickConnexion={outPutEventConnexion} onChildClickRegister={outPutEventRegister} />
         
       <div className="container-fluid" >
         
           
            <div className="main_home">

            <div className="row">
                <div className="col-lg-12 col-md-12">

                    <div className="row slogan">
                            <img src={slogan} width='100%' />
                        
                    </div>
                    
                    <div className='main_content'>
                        
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <span style={{textAlign:'center'}}> 
                                        <div className="dvs"> 
                                            <img src={video1} className='imsc' width='30%'  />
                                            <img src={fiche1} className='imsc' width='30%' />
                                        </div>
                                                
                                        <div className="dvs">
                                            <img src={mise1} className='imsc' width='30%' />
                                            <img src={web1}  className='imsc' width='30%' /> 
                                        </div>
                                                  
                                </span>
                            </GridItem>

                        </GridContainer>

                        <GridContainer >
                            <GridItem xs={12} sm={12} md={12} style={{marginBottom:'3%'}}>
                              <div className="divi">
                                <span className="di">Pourquoi choisir Online Nohellef?</span>
                                    <span><img src={pour1} width='3%' /></span>
                            </div>
                            </GridItem>
                        </GridContainer>

                         <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                               <img src={a2} width='100%' />
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                                <fieldset style={{border:'2px solid #5473FF',textAlign:'center'}}>
                                                          <legend>
                                                            <img src={c1} width='10%' />
                                                          </legend>
                                                           Outil conçu par les experts
                                                      </fieldset>
                                                      <p></p>
                                                    <div style={{marginLeft:'5%'}}>Un prof particulier disponible en ligne grâce au tchat
                                                        Tutoring !</div> <ul style={{fontSize:'12px'}}>
                                                        <li>Du lundi au vendredi de 17h à 20h, et le week-end
                                                        de 14h à 17h</li>
                                                        <li>Du lundi au vendredi de 17h à 20h, et le week-end
                                                        de 14h à 17h</li>
                                                        <li>Réponse en moins de 2min</li>
                                                        <li>Questions illimitées (Méthode, exercice corsé...)</li>
                                                        <li>Pour toutes les matières (enseignement de
                                                        spécialités compris)</li>
                                                        <li>Du CP à la Terminale</li>
                                                        <li>Accessible depuis l'ordinateur familial, la tablette
                                                        ou son mobile</li>

                                                    </ul>
                            </GridItem>
                        </GridContainer>

                         <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                               <fieldset style={{border:'2px solid #208F51',textAlign:'center'}}>
                                                          <legend>
                                                            <img src={c2} width='10%' />
                                                          </legend>
                                                           Des contenus uniques et novateurs
                                                      </fieldset>
                                                      <div style={{marginLeft:'10px',fontSize:'15px'}}>
                                                    Un prof particulier disponible en ligne grâce au 
                                                    tchat Tutoring !
                                                </div>
                                                
                                                <ul style={{fontSize:'12px'}}>
                                                    <li>Du lundi au vendredi de 17h à 20h, et le week-end
                                                    de 14h à 17h</li>
                                                    <li>Du lundi au vendredi de 17h à 20h, et le week-end
                                                    de 14h à 17h</li>
                                                    <li>Réponse en moins de 2min</li>
                                                    <li>Questions illimitées (Méthode, exercice corsé...)</li>
                                                    <li>Pour toutes les matières (enseignement de
                                                    spécialités compris)</li>
                                                    <li>Du CP à la Terminale</li>
                                                    <li>Accessible depuis l'ordinateur familial, la tablette
                                                    ou son mobile</li>
                                                </ul>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                               <img src={im3} width='100%' />

                            </GridItem>
                        </GridContainer>

                         <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                
                            <fieldset style={{marginTop:'5%',marginBottom:'5%',border:'2px solid #FFBF00',borderTopWidth:'2em',backgroundColor:'#FFBF00',color:'white',width:'100%',textAlign:'center'}}>
                                    <legend>
                                        Ce que pensent nos utilisateurs.
                                    </legend>

                                          <Carousel width={100}>
                                                <div>
                                                    <img src={im5} width='3%' />
                                                    <p className="legend">Legend 1</p>
                                                </div>
                                                <div>
                                                    <img src={im5} width='3%' />
                                                    <p className="legend">Legend 2</p>
                                                </div>
                                                <div>
                                                    <img src={im5} width='3%' />
                                                    <p className="legend">Legend 3</p>
                                                </div>
                                          </Carousel>                  
                            </fieldset>

                            </GridItem>
                        </GridContainer>

                         <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                               <img src={im4} width='100%' />
                            </GridItem>
                             <GridItem xs={6} sm={6} md={6}>
                               <p style={{marginBottom:'5%',fontSize:'15px'}}>
                                                    Inscrivez-vous dès maintement et béneficiez d'une reduction de
                                                    plus de 50%
                                                    Qu'attendez-vous?
                                                    ready, Go!
                                                   </p> 

                                                    <Button 
                                                        variant="primary" 
                                                        type="submit" 
                                                        size="sm"
                                                        className="button-primary" 
                                                       >
                                                        Inscription
                                                    </Button>
                            </GridItem>
                        </GridContainer>

                         <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div className="divi1">
                                    <span className="di1">Nos abonnements adaptés pour une année réussie</span>
                                    <span><img src={smile} width='4%' /></span>
                                </div>
                            </GridItem>
                        </GridContainer>

                         <GridContainer style={{textAlign:'center'}}>
                            
                            <GridItem xs={6} sm={6} md={4}>
                                <img src={offre1} width='70%' />
                                <div style={{position:'relative',top:'-12%'}}>
                                     <Button 
                                        variant="primary" 
                                        type="submit" 
                                        size="sm"
                                        className="button-primary">
                                        En savoir plus
                                     </Button>
                                </div>
                                <div style={{position:'relative',top:'-45%'}}>content</div>
                                <div style={{position:'relative',top:'-76%',fontWeight:'bold'}}>14.15$</div>
                            </GridItem>

                            <GridItem xs={6} sm={6} md={4}>
                                <img src={offre2} width='70%' />
                                <div style={{position:'relative',top:'-12%'}}>
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        size="sm"
                                        className="button-primary">
                                        En savoir plus
                                     </Button>
                                </div>
                                <div style={{position:'relative',top:'-40%'}}>content</div>
                                <div style={{position:'relative',top:'-76%',fontWeight:'bold'}}>15.5$</div>
                            </GridItem>

                            <GridItem xs={6} sm={6} md={4}>
                                <img src={offre3} width='70%' />
                                 <div style={{position:'relative',top:'-12%'}}>
                                     <Button 
                                        variant="primary" 
                                        type="submit" 
                                        size="sm"
                                        className="button-primary">
                                        En savoir plus
                                     </Button>
                                 </div>
                                <div style={{position:'relative',top:'-40%'}}>content</div>
                                <div style={{position:'relative',top:'-76%',fontWeight:'bold'}}>27.8$</div>
                            </GridItem>
                        
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div style={{marginBottom:'5%'}}></div>
                            </GridItem>
                        </GridContainer>

                         <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                               <span className='decor22'> 
                                               
                                                 <div style={{marginLeft:'10px',fontSize:'15px',padding:'15px',textAlign:'center'}}>
                                                    A vous les Parents
                                                </div>
                                                
                                                <div style={{fontSize:'12px', padding:'15px',textAlign:'center'}}>
                                                    Une solution adaptée pour suivre les progression des élèves
                                                </div>
                                             <div style={{textAlign:'center'}}><Button 
                                                        variant="danger" 
                                                        type="submit" 
                                                       
                                                        size="xl"
                                                        className="btn-primary2" 
                                                       >
                                                        En savoir plus
                                                    </Button>
</div>
                                                </span>

                                               
                                                   

                                          
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                                <img src={im7} width='100%' />
                            </GridItem>
                        </GridContainer>


                         <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                            
                            </GridItem>
                        </GridContainer>

                         <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               
                            </GridItem>
                        </GridContainer>

                    </div>


                
                <div className="row">
                    <Footer />
                </div>
                </div>

            
 

            </div>
            </div>
            
            
        </div>
    </div>
       
    )
}

const mapStateToProps=(state)=>{
  return{
      isLoggedIn: state.isLoggedIn,
      error: state.error,
      user: state.user
  };
};
export default connect(mapStateToProps)(Home);