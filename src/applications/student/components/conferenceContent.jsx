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
import poster from '../../../assets/images/dashboard/smilevid.png';
import videoLink from '../../../assets/video/testvideo2.mp4';
import Avatar   from 'react-avatar';
import ReactPlayer from 'react-player/lazy';
import { Player, ControlBar } from 'video-react';
import VideoContent from './videoContent';
import im5 from '../../../assets/images/im5.png';


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
  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/path/to/video.mp4',
      type: 'video/mp4'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

    let data = [
    {
      id: 1,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 2,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 3,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 4,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 5,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 6,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    
    {
      id: 7,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    
    {
      id: 8,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    
    {
      id: 9,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    
    {
      id: 10,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 11,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 12,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 13,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 14,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 15,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 16,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
    {
      id: 17,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: videoLink
    },
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const outPutclickReady =(e)=>{
      console.log('ready start')
  }
  const outPutclickOpen =(e)=>{
    console.log('ready open')
  }
	return(
			<div className="container" style={{margin:'0% 10% 0% 0%'}}>
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
             
			         <GridContainer style={{overflow:'scroll'}}>

			 					  <GridItem xs={12} sm={12} md={8} style={{backgroundColor:'#eeeeee',margin:'0% 0% 0% 0%'}}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={{
                            margin:'2% 0% 0% 0%',
                            width:'100%'

                        }}>
                            <VideoContent videoLink={videoLink} vWidth={600} vHeight={300} />
                          </div>
                        </GridItem>
                    </GridContainer>


                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                       <div style={{width:'100%',margin:'5% 0% 0% 0%'}}>
                          <input type='text' placeholder='Votre commentaire'  style={{
                            width:'100%',
                            borderTop:'none',
                            borderRight:'none',
                            borderBottom:'2px solid blue',
                            borderLeft:'none'}}/>
                       </div>
                      
                        
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div style={{overflow:'scroll',
                              backgroundColor:'white',
                              width:'100%',
                              margin:'5% 0% 0% 0%',
                              height:'150px'}}>
                        {currentPosts.map((value,index)=>{
                          return(
                          <GridContainer >
                            <GridItem xs={12} sm={12} md={3}>
                              <img src={im5} width='45%' style={{margin:'5%'}} />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={9}>
                            <div style={{margin:'5%'}}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                   <strong>Pierre mvogo</strong> <i>il y'a 15 jours</i>
                                </GridItem>
                              </GridContainer>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                <div style={{fontSize:'1vw'}}>
                                     cours intéressant, bravo à vous!!!, je vais télécharger la
                                     suite de la série
                                </div>
                              </GridItem>
                              </GridContainer>
                              </div>
                            </GridItem>
                          </GridContainer>
                        )
                        })}

                        </div>
                        
                      </GridItem>
                    </GridContainer>
                  </GridItem>



			 			      <GridItem xs={12} sm={12} md={4} style={{backgroundColor:'#eeeeee',paddin:'0% 0% 0% 5%'}}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <div style={{
                          width:'100%',
                          height:'50px',
                          border:'1px solid #4d6bf4',
                          borderRadius:'5px',
                          backgroundColor:'#4d6bf4',
                          padding:'3%',
                          margin:'5% 0% 0% 0%'
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
                      <div style={{margin:'5% 0% 0% 0%', cursor:'pointer',overflow:'scroll'}}>
                        {currentPosts.map((value,index)=>{
                          return(
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} style={{padding:'15%'}}>
                                  <div style={{margin:'2%'}}>
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <div style={{
                                    display:'inline-block',
                                    width:'100%',
                                    height:'95px',
                                    backgroundColor:'white',
                                    fontSize:'1vw'
                                    }}> <VideoContent
                                            videoLink={value.courseLinkVideo} 
                                            vWidth={120} 
                                            vHeight={100} />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <div style={{
                                    width:'100%',
                                    display:'inline-block',
                                    height:'95px',
                                    backgroundColor:'#ffce52',
                                    fontSize:'70%'}}>
                                     <div> Comment réussir son
                                      exams en quatre
                                      leçons?</div>
                                      <div><strong>Spécialité:</strong> SVT</div>
                                      <div><strong>Proposé par:</strong> Bekono</div>
                                      <div><strong>Télespcetateurs:</strong> 200</div>
                                    </div>
                                  </GridItem>
                                </GridContainer>
                                  
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



