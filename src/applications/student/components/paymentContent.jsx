import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import React,{useState,useEffect} from 'react';
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import { Dropdown } from 'react-bootstrap';
import smile from '../../../assets/images/main/smile.png';
import pay from '../../../assets/images/dashboard/pay.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Select from 'react-select';
import masterc from '../../../assets/images/dashboard/masterc.png';
import checkok from '../../../assets/images/dashboard/checkok.png';
import checknone from '../../../assets/images/dashboard/checknone.png';
import visa from '../../../assets/images/dashboard/visa.png';
import PaymentSystem from "./paymentSystem.jsx";
import Pagination from './pagination.jsx';


const PaymentContent = ({onChildClickHandlerPay}) => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage, setPostPerPage] = useState(4);
  const [displayPayment, setDisplayPayment] = useState("flex");
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [formSystem, setFormSystem] = useState("");
  const [mount, setMount] = useState(0);
  const [mountBasic, setMountBasic] = useState(25.00);
  const [mountChat, setMountChat] = useState(45.00);
  const [mountConf, setMountConf] = useState(15.00);

 

  const [isBasic,setIsBasic] = useState(false);
  const [isChat,setIsChat] = useState(false);
  const [isWebConf,setIsWebConf] = useState(false);
  const [message, setMessage] = useState("");


const clickHandlerPay = (e) => {
  onChildClickHandlerPay(e.target.name);
}
  var check1 = document.getElementById("check1");
  var check2 = document.getElementById("check2");
  var check3 = document.getElementById("check3");

function handleCheck(id){
  if(check1.checked){
    setIsBasic(true);
    if(check2.checked&&check3.checked){
      setMount(mountBasic+mountChat+mountConf);
    }else if(check2.checked){
      setMount(mountBasic+mountChat);
    }else if(check3.checked){
      setMount(mountBasic+mountConf);
    }else{
      setMount(mountBasic);
    }
  }else{
    setIsBasic(false);
    
  }
  if(check2.checked){
    setIsChat(true);
    if(check1.checked&&check3.checked){
      setMount(mountChat+mountBasic+mountConf);
    }else if(check1.checked){
      setMount(mountChat+mountBasic);
    }else if(check3.checked){
      setMount(mountChat+mountConf);
    }else{
      setMount(mountChat);
    }
  }else{
    setIsChat(false);
    
  }
  if(check3.checked){
    setIsWebConf(true);
     if(check1.checked&&check2.checked){
      setMount(mountConf+mountChat+mountBasic);
    }else if(check1.checked){
      setMount(mountConf+mountBasic);
    }else if(check2.checked){
      setMount(mountConf+mountChat);
    }else{
      setMount(mountConf);
    }
  }else{
    setIsWebConf(false);
    
  }
}


	useEffect(()=>{
    console.log(formSystem);
	},[])

  const handleForm = (value) => {
    setFormSystem(value)
    setMessage("");
    console.log(value);
  }


  const ModalPayment = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            display: displayPayment,
            zIndex: "900000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            right:"0px",
            bottom:"0px",
            }}
      >
            
                <PaymentSystem systemChoose={formSystem} mount={mount} onChildCloseModal={handleOpenPayment} />

          
      </div>
    )
  };
  const handleOpenPayment = (isShow) => {
    if(formSystem===""){
      setMessage("Veuillez choisir un mode de paiement");
    }else{setShowModalPayment(isShow);}
    
  }

    let data = [
    {
      id: 1,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 2,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 3,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container" style={{backgroundColor:'#eeeeee', paddingBottom:'5%'}}>
      {showModalPayment? <ModalPayment />: ''}
			              <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                                Payer un abonnement
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                
                        </GridItem>
                    </GridContainer>
             
			 <GridContainer>
			 					  <GridItem xs={12} sm={12} md={12} style={{textAlign:'center'}}>
                    <div>
                      <div><img src={pay} width='5%'/></div>
                      <div><p style={{fontSize:'100%'}}>Effectuez vos paiements <br/> en toute sécurité ?</p></div>
                    </div>
                      
                  </GridItem>
        </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div style={{
                          border:'1px solid #ffce52',
                          borderRadius:'25px 25px 25px 25px',
                          width:'70%',
                          height:'370px',
                          backgroundColor:'#ffce52',
                          marginLeft:'15%'
                        }}>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>


                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} style={{margin:'5% 5% 5% 5%'}}>
                                  Choisir votre Formule
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                   <div style={{
                                    backgroundColor:'#9aa7b2',
                                    margin:'0% 0% 0% 5%',
                                    width:'90%',
                                    height:'100px',
                                    fontSize:'100%',
                                    border:'1px solid #9aa7b2'}}>

                                    <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'2%'}}>
                                       <span style={{float:'left'}}><strong>Basique</strong></span>
                                       <span style={{float:'right'}}><input type='checkbox' id='check1' onClick={()=>handleCheck('check1')}/></span>
                                      </div>
                                     </GridItem>
                                   </GridContainer>

                                   <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'2%'}}>
                                       <span style={{float:'left'}}><strong>Chat</strong></span>
                                       <span style={{float:'right'}}><input type='checkbox' id='check2' onClick={()=>handleCheck('check2')}/></span>
                                      </div>
                                     </GridItem>
                                   </GridContainer>

                                   <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'2%'}}>
                                       <span style={{float:'left'}}><strong>Web-Conférence</strong></span>
                                       <span style={{float:'right'}}><input type='checkbox' id='check3'onClick={()=>handleCheck('check3')}/></span>
                                      </div>
                                     </GridItem>
                                   </GridContainer>
                                    
                                  </div>
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                  <span style={{color:'#4d6bf4',margin:'0% 0% 2% 5%', }}><strong>Montant Total: {mount} EUR</strong></span>
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                <div style={{margin:'0% 5% 2% 5%',fontSize:'100%'}}>
                                  <span>Payer par</span>
                                  <span style={{float:'right',color:'#002495',cursor:'pointer'}} onClick={(e)=>clickHandlerPay(e)}><strong>Ajouter un moyen de paiement</strong></span>
                                </div>
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                <div style={{margin:'0% 5% 2% 5%',fontSize:'100%'}}>
                                
                                    <select 
                                            name="payment" 
                                            id="payment"
                                            value={formSystem}
                                            onChange={(e)=>handleForm(e.target.value)}

                                            style={{border:`${formSystem === ""?'2px solid #C84941':'2px solid #002495'}`}}>
                                        <option value="">Moyen de paiement</option>
                                        <option value=""></option>
                                        <option value="paypal">PAYPAL</option>
                                        <option value="visa_mastercard">VISA / MASTERCARD</option>
                                    }
                                    </select>
                                        {message!=""?<span style={{color:"red"}}>{message}</span>:""}
                               
                                  
                                </div>
                                  
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                   <div onClick={()=>handleOpenPayment(true)} style={{cursor:'pointer',
                                          margin:'2% 5% 5% 5%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '25px',
                                          borderBottom: '4px solid #002495',
                                          borderRight:  '4px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'3%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Payer</span>
                              </div>
                                    </div>
                                </GridItem>
                              </GridContainer>

                            </GridItem>


                            <GridItem xs={12} sm={12} md={6}>

                               <GridContainer>
                                <GridItem xs={12} sm={12} md={12} style={{margin:'5% 5% 5% 5%'}}>
                                  Détails de la commande
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                  <div style={{
                                    width:'90%',
                                    backgroundColor:'white',
                                    height:'260px',
                                    margin:'0% 10% 2% 5%',
                                    fontSize:'100%',
                                    padding:'5% 5% 0% 0%'
                                  }}>
                                    <ul>
                                      <li>Accès aux cours<span style={{float:'right'}}>

                                      {isBasic?<img src={checkok} width='20px'/>:
                                               <img src={checknone} width='20px'/>}</span></li>
                                      <li>Accès aux vidéos<span style={{float:'right'}}>

                                      {isBasic?<img src={checkok} width='20px'/>:
                                               <img src={checknone} width='20px'/>}</span></li>
                                      <li>Accès aux chat<span style={{float:'right'}}>

                                      {isChat?<img src={checkok} width='20px'/>:
                                             <img src={checknone} width='20px'/>}</span></li>
                                      <li>Web-Conférence<span style={{float:'right'}}>

                                      {isWebConf?<img src={checkok} width='20px'/>:
                                                 <img src={checknone} width='20px'/>}</span></li>
                                    </ul>
                                  </div>
                                </GridItem>
                              </GridContainer>

                            </GridItem>


                          </GridContainer>
                        </div>
                      </GridItem>
                    </GridContainer>
            </div>
		)
}
export default PaymentContent;


