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
import aide1 from '../../../assets/images/dashboard/aide1.png';
import envoyer from '../../../assets/images/dashboard/envoyer.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';

import Pagination from './pagination.jsx';


const ContactHelpContent = () => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage, setPostPerPage] = useState(4);

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
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container">
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                                Contacter de l'aide
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
                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <img src={aide1} width='5%' />
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                            <div style={{fontSize:'1.5vw'}}>Besoin d'aide?</div>
                          </GridItem>
                        </GridContainer>

                        <GridContainer>
                          <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                                border:'1px solid #ffce52',
                                borderRadius:'25px 25px 25px 25px',
                                width:'50%',
                                height:'420px',
                                backgroundColor:'#ffce52',
                                marginLeft:'25%'
                              }}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <div style={{float:'left',margin:'2%'}}>Objet</div>
                                      <div>
                                      <input type='text' style={{
                                        borderRadius:'10px',
                                        border:'2px solid #002495',
                                        width:'90%',
                                        height:'40px'}}/>
                                      </div>
                                    </GridItem>
                                  </GridContainer>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                      <div style={{float:'left',margin:'2%'}}>Description</div>
                                      <div>
                                      <textarea type='text' style={{
                                        borderRadius:'10px',
                                        border:'2px solid #002495',
                                        width:'90%',
                                        height:'150px'}}/>
                                      </div>
                                    </GridItem>
                                  </GridContainer>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                    <div style={{float:'left',margin:'2%'}}>0/250</div>
                                    <div style={{cursor:'pointer',
                                          marginTop:'10%',
                                          marginBottom:'5%',
                                          marginLeft:'10%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '25px',
                                          borderBottom: '5px solid #002495',
                                          borderRight:  '5px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '60px',
                                          width: '90%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'3%'
                                        }}>
                                
                                <span className="text" style={{fontSize:'1.2vw',color:'white'}}>Envoyer</span>
                              </div>
                                    </div>
                                      
                                    </GridItem>
                                  </GridContainer>
                              </div>
                          </GridItem>
                        </GridContainer>

                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                    	<GridItem xs={12} sm={12} md={12}>
                    		
                    	</GridItem>
                    </GridContainer>
                    </div>
		)
}
export default ContactHelpContent;



