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

import Pagination from './pagination.jsx';


const PaymentContent = () => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage, setPostPerPage] = useState(4);

  const options = [
    { value: 'chocolate', label: <span><img src={masterc} width='15%'/>**-**-**-6528</span> },
    { value: 'strawberry', label: <span><img src={masterc} width='15%'/>**-**-**-6528</span> },
    { value: 'vanilla', label: <span><img src={masterc} width='15%'/>**-**-**-6528</span> }
  ]

	useEffect(()=>{
		setPosts(data);
	},[])

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
			              <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
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
                      <div><img src={pay} width='10%'/></div>
                      <div><p style={{fontSize:'1.3vw'}}>Effectuez vos paiements <br/> en toute sécurité ?</p></div>
                    </div>
                      
                  </GridItem>
        </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div style={{
                          border:'1px solid #ffce52',
                          borderRadius:'25px 25px 25px 25px',
                          width:'70%',
                          height:'350px',
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
                                    fontSize:'1vw',
                                    border:'1px solid #9aa7b2'}}>

                                    <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'2%'}}>
                                       <span style={{float:'left'}}><strong>Basique</strong></span>
                                       <span style={{float:'right'}}><input type='checkbox'/></span>
                                      </div>
                                     </GridItem>
                                   </GridContainer>

                                   <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'2%'}}>
                                       <span style={{float:'left'}}><strong>Chat</strong></span>
                                       <span style={{float:'right'}}><input type='checkbox'/></span>
                                      </div>
                                     </GridItem>
                                   </GridContainer>

                                   <GridContainer>
                                     <GridItem xs={12} sm={12} md={12}>
                                     <div style={{margin:'2%'}}>
                                       <span style={{float:'left'}}><strong>Web-Conférence</strong></span>
                                       <span style={{float:'right'}}><input type='checkbox'/></span>
                                      </div>
                                     </GridItem>
                                   </GridContainer>
                                    
                                  </div>
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                  <span style={{color:'#4d6bf4',margin:'0% 0% 2% 5%', }}><strong>Montant Total: 28$</strong></span>
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                <div style={{margin:'0% 5% 2% 5%',fontSize:'1vw'}}>
                                  <span>Payer par</span>
                                  <span style={{float:'right',color:'#002495'}}><strong>Ajouter un moyen de paiement</strong></span>
                                </div>
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                <div style={{margin:'0% 5% 2% 5%',fontSize:'1vw'}}>
                                  <Select options={options} />
                                </div>
                                  
                                </GridItem>
                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12} >
                                   <div style={{cursor:'pointer',
                                          margin:'8% 5% 5% 5%',
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
                                
                                <span className="text" style={{fontSize:'1.2vw',color:'white'}}>Payer</span>
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
                                    fontSize:'1.2vw',
                                    padding:'5% 5% 0% 0%'
                                  }}>
                                    <ul>
                                      <li>Accès aux cours<span style={{float:'right'}}><img src={checkok} width='20px'/></span></li>
                                      <li>Accès aux vidéos<span style={{float:'right'}}><img src={checknone} width='20px'/></span></li>
                                      <li>Accès aux chat<span style={{float:'right'}}><img src={checkok} width='20px'/></span></li>
                                      <li>Web-Conférence<span style={{float:'right'}}><img src={checkok} width='20px'/></span></li>
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


