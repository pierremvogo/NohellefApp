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
import ReactSearchBox from "react-search-box";
import smilevid from '../../../assets/images/dashboard/smilevid.png';
import Avatar   from 'react-avatar';
import ReactPlayer from 'react-player/lazy';

/*import "video-react/dist/video-react.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";*/
import Pagination from './pagination.jsx';


const ConferenceContent = () => {
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
    {
      id: 4,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 5,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 6,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 7,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 8,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 9,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    
    {
      id: 10,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 11,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 12,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 13,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 14,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 15,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 16,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques'
    },
    {
      id: 17,
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
			<div className="container" style={{overflowY:'scroll',margin:'2% 10% 0% 0%'}}>
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                                Vidéothèque
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

			 					  <GridItem xs={12} sm={12} md={8} style={{backgroundColor:'#eeeeee',margin:'0% 0% 0% 0%'}}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={{
                            margin:'5% 0% 0% 0%',
                            width:'15%'

                        }}>
                            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                          </div>
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
                  </GridItem>



			 			      <GridItem xs={12} sm={12} md={4} style={{backgroundColor:'#eeeeee',paddin:'0% 0% 0% 5%'}}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div style={{
                          width:'70%',
                          height:'50px',
                          border:'1px solid #4d6bf4',
                          borderRadius:'10px 10px 10px 10px',
                          backgroundColor:'#4d6bf4',
                          padding:'3%',
                          margin:'5% 0% 0% 15%'
                        }}>
                          <span style={{
                            float:'left',
                            fontSize:'1vw'}}><img src={smilevid} width='15%' style={{
                              marginRight:'3%'
                            }}/>
                          A regarder également</span>
                         
                        </div>
                        
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                      <div style={{margin:'5% 0% 0% 0%', cursor:'pointer'}}>
                        {currentPosts.map((value,index)=>{
                          return(
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} style={{padding:'15%'}}>
                                  <div style={{
                                    display:'inline-block',
                                    width:'50%',
                                    height:'95px',
                                    backgroundColor:'white',
                                    fontSize:'1vw'
                                    }}></div>
                                  <div style={{
                                    width:'50%',
                                    display:'inline-block',
                                    height:'95px',
                                    backgroundColor:'#ffce52',
                                    fontSize:'1vw'}}>
                                     <div> Comment réussir son
                                      exams en quatre
                                      leçons?</div>
                                      <div><strong>Spécialité:</strong> SVT</div>
                                      <div><strong>Proposé par:</strong> Bekono</div>
                                      <div><strong>Télespcetateurs:</strong> 200</div>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            )
                        })}
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
export default ConferenceContent;



