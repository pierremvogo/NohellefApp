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
import Avatar   from 'react-avatar';
import stickheart from '../../../assets/images/dashboard/stickheart.png';
import Pagination from './pagination.jsx';
import eye from '../../../assets/icons/eye.png';
import download from '../../../assets/icons/download.png';
import vidio from '../../../assets/images/dashboard/vidio.png';
import imgpdf from '../../../assets/images/imgpdf.png';
import videoLink from '../../../assets/video/testvideo2.mp4';
import pdf1 from '../../../assets/pdf/PHP.pdf';
import pdf2 from '../../../assets/pdf/seq.pdf';
import {Table} from 'react-bootstrap';



const HistoryContent = ({onChildClickHandlerVideo}) => {
	const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(2);

  const [currentPage1, setCurrentPage1] = useState(1);
  const [postPerPage1, setPostPerPage1] = useState(2);

	useEffect(()=>{
		setPosts(data,setPosts1(data1));
	},[])

  const openVideoTheque = (e) => {
        onChildClickHandlerVideo(e.target.name);
    }

    let data = [
    {
      id: 1,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    {
      id: 2,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    {
      id: 3,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    {
      id: 4,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    {
      id: 5,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    {
      id: 6,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    
    {
      id: 7,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    
    {
      id: 8,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    
    {
      id: 9,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    
    {
      id: 10,
      activity: "Consultation des cours pdf",
      heureConnexion: "10h25",
      heureDeconnexion: "15h50",
      date:'14/12/2014',
      appareil:'Lenovo windoww 10',
    },
    
  ];


  let data1 = [
    {
      id: 1,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    {
      id: 2,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    {
      id: 3,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    {
      id: 4,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    {
      id: 5,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    {
      id: 6,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    
    {
      id: 7,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    
    {
      id: 8,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    
    {
      id: 9,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    
    {
      id: 10,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    
  ];
   const openPdf = (pdfLink) => {
            window.open(pdfLink);
        }
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost1 = currentPage1 * postPerPage1;
  const indexOfFirstPost1 = indexOfLastPost1 - postPerPage1;
  const currentPosts1 = posts1.slice(indexOfFirstPost1,indexOfLastPost1);
  const paginate1 = (pageNumber) => setCurrentPage1(pageNumber);
	return(
			<div className="container">
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                              Historique de vos Activitées
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

                      <GridItem xs={12} sm={12} md={12}>
                            <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
                                <Table striped bordered hover variant="secondary">
                                      <thead>
                                        <tr>
                                          <th>Activités Effectuées</th>
                                          <th>Heure de connexion</th>
                                          <th>Heure de deconnexion</th>
                                          <th>Date</th>
                                          <th>Appareil</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                      {currentPosts.map((post,index)=>{
                                        return(
                                          <tr>
                                            <td>{post.id}-{post.activity}</td>
                                            <td>{post.heureConnexion}</td>
                                            <td>{post.heureDeconnexion}</td>
                                            <td>{post.date}</td>
                                            <td>{post.appareil}</td>
                                          </tr>
                                          )
                                      })}
                                      </tbody>
                                    </Table>
                              </GridContainer>

                            <GridContainer style={{backgroundColor:'#eeeeee',margin:'15%',width:'95%'}}>
                              <GridItem xs={12} sm={12} md={12}>
                                <Pagination 
                                  postsPerPage={postPerPage} 
                                  totalPosts={posts.length} 
                                  paginate={paginate}
                                />
                              </GridItem>
                            </GridContainer>
                  
                      </GridItem>

                    </GridContainer>
                   
                    </div>
		)
}
export default HistoryContent;


