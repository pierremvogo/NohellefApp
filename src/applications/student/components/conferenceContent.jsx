import react,{useState, createRef, useEffect } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import { Dropdown } from 'react-bootstrap';
import smile from '../../../assets/images/main/smile.png';
import ReactSearchBox from "react-search-box";
import smilevid from '../../../assets/images/dashboard/smilevid.png';
import vidio from '../../../assets/images/dashboard/vidio.png';
import poster from '../../../assets/images/dashboard/poster.png';
import videoLink from '../../../assets/video/testvideo2.mp4';
import Avatar   from 'react-avatar';
import ReactPlayer from 'react-player/lazy';
import { Player, ControlBar } from 'video-react';
import VideoPlayer from 'react-video-js-player';
import im5 from '../../../assets/images/im5.png';
import vidioLink4 from '../../../assets/video/testvideo4.mp4';
import vidioLink2 from '../../../assets/video/testvideo.mp4';
import vidioLink3 from '../../../assets/video/testvideo3.mp4';
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import courseService from '../../services/course.service';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareCourses } from '../../redux/reducer/actions/auth';



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


const ConferenceContent = ({courses, playvideo,courseLink}) => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage, setPostPerPage] = useState(4);
  const [play,setPlay] = useState(playvideo);
  const [vidLinks, setVidLinks] = useState(courseLink?courseLink:vidioLink4);

  const dispatch = useDispatch();

	useEffect(()=>{
    getCourses();
	},[])
  const refMedia = createRef();


  const openVideo = () => {
    console.log("auto Play PROPS",refMedia.current.props);

  }
  
  function handleopen(links){
        setPlay(true);
        setVidLinks(links);
  }

  const handlePause = (pause) => {
    setPlay(false);
  }

  const handleEnded = (pause) => {
    setPlay(false);
  }

    const  onPlayerReady = (player) => {
          console.log("VIDEO READY",player)
    }

    const  onVideoPlay = (duration) => {
          console.log("VIDEO Play",duration)
    }

    const  onVideoPause = (player) => {

          console.log("VIDEO pause",player)
    }

    const getCourses = () => {
    const filterPayload = {
                            specialitiesCode: [
                              "fr",
                              "eng",
                              "maths",
                              "phy",
                              "info",
                              "ing",
                            ],
                            levels: [
                              "0",
                              "1",
                              "2",
                              "3",
                              "4",
                              "5",
                              "6",
                            ],
                            types: [
                              "1"
                            ]
                          }
    courseService.filterCourses(filterPayload)
        .then((response)=> {
            console.log("Response for get Courses in Student conference");
            console.log(response.data.courses);
            dispatch(shareCourses(response.data.courses));
        })
        .catch((error)=> {
            console.log("Error Response for get Courses in Student conference");
            console.log(error);
            dispatch(shareCourses(null));
        })
}

    let data = [
    {
      id: 1,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink4
    },
    {
      id: 2,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    {
      id: 3,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink3
    },
    {
      id: 4,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink4
    },
    {
      id: 5,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink3
    },
    {
      id: 6,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    
    {
      id: 7,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    
    {
      id: 8,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    
    {
      id: 9,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    
    {
      id: 10,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    {
      id: 11,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    {
      id: 12,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    {
      id: 13,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink2
    },
    {
      id: 14,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink3
    },
    {
      id: 15,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink3
    },
    {
      id: 16,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink3
    },
    {
      id: 17,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLinkVideo: vidio,
      vidLink: vidioLink3
    },
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = courses&&courses.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const outPutclickReady =(e)=>{
      console.log('ready start')
  }
  const outPutclickOpen =(e)=>{
    console.log('ready open')
  }
	return(
			<div className="container" style={{margin:'0% 0% 0% 0%'}}>
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3}>
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

			 					  <GridItem xs={12} sm={12} md={8} style={{backgroundColor:'#eeeeee'}}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={{
                            margin:'-30% 0% 0% 0%',
                            width:'100%'

                        }}>
                            <ReactPlayer 
                              url={vidLinks}
                              playing={play}
                              controls={true}
                              width={600}
                              height={720}
                              onPause={handlePause}
                              onEnded={handleEnded}
                            />
                          </div>
                        </GridItem>
                    </GridContainer>


                   {/* <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                       <div style={{width:'100%',margin:'-25% 0% 0% 0%'}}>
                          <input type='text' placeholder='Votre commentaire'  style={{
                            width:'100%',
                            borderTop:'none',
                            borderRight:'none',
                            borderBottom:'2px solid blue',
                            borderLeft:'none'}}/>
                       </div>
                      
                        
                      </GridItem>
                    </GridContainer>*/}

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        {/*<div style={{overflow:'scroll',
                              backgroundColor:'white',
                              width:'100%',
                              margin:'-20% 0% 0% 0%',
                              height:'150px'}}>
                        {courses&&courses.map((value,index)=>{
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
                                <div style={{fontSize:'100%'}}>
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

                        </div>*/}
                        
                      </GridItem>
                    </GridContainer>
                  </GridItem>



			 			      <GridItem xs={12} sm={12} md={4} style={{backgroundColor:'#eeeeee'}}>
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
                            fontSize:'100%'}}><img src={smilevid} width='15%' style={{
                              marginRight:'3%'
                            }}/>
                          A regarder également</span>
                         
                        </div>
                        
                      </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12} style={{overflowY:'scroll',height:'480px'}} >
                      <div style={{cursor:'pointer'}}>
                        {courses&&courses.map((post,index)=>{
                          return(
                            <GridContainer key={index}>
                                <GridItem xs={12} sm={12} md={12} style={{padding:'10%'}}>
                                  <div style={{margin:'2%'}}>
                                <GridContainer>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <div style={{
                                    display:'inline-block',
                                    width:'100%',
                                    height:'95px',
                                    backgroundColor:'white',
                                    fontSize:'100%'
                                    }}> {/*<VideoContent
                                            videoLink={value.courseLinkVideo} 
                                            vWidth={120} 
                                            vHeight={100} />*/}
                                        <img src={vidio} onClick={()=>handleopen(post.vidLink)} />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={12} md={6}>
                                    <div style={{
                                    width:'110%',
                                    display:'inline-block',
                                    height:'100px',
                                    backgroundColor:'#ffce52',
                                    padding:'2%',
                                    fontSize:'70%'}}>
                                      <div> {post.title} </div>
                                      <div><strong>Spécialité:</strong> {post.speciality.name} </div>
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

            </div>
		)
}
const mapStateToProps=(state)=>{
  return{
      error: state.authReducer.error,
      courses: state.authReducer.courses,   
  };
};
export default connect(mapStateToProps)(ConferenceContent);



