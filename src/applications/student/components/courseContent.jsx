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
import eye from '../../../assets/icons/eye.png';
import download from '../../../assets/icons/download.png';
import ReactSearchBox from "react-search-box";
import pdfLink from '../../../assets/images/dashboard/smilevid.png';
import videoLink from '../../../assets/video/testvideo2.mp4';
import pdf1 from '../../../assets/pdf/PHP.pdf';
import pdf2 from '../../../assets/pdf/seq.pdf';
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Select from 'react-select';
import SimpleSelect from './select';
import VideoContent from './videoContent';
import vidio from '../../../assets/images/dashboard/vidio.png';
import imgpdf from '../../../assets/images/imgpdf.png';
import './account.css';
import {Document, Page, pdfjs,} from 'react-pdf';
 
const CourseContent = ({onChildClickHandlerVideo,externalLinkVideo}) => {
   
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(4);

    const [numPages, setNumpages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const [showChatModal, setShowChatModal] = useState(false);
    const [displayAsk, setDisplayAsk] = useState("none");
    
    const openVideoTheque = (e) => {
        onChildClickHandlerVideo(e.target.name);
    }

    pdfjs.GlobalWorkerOptions.workerSrc = 
         `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumpages(numPages);
    }

    const goToPrevPage = () =>{
        setPageNumber(pageNumber - 1);
    }

    const goToNextPage = () =>{
        setPageNumber(pageNumber + 1);
    }

	useEffect(()=>{
		setPosts(data);
	},[])

    function closeModal(){
           setShowChatModal(false,setDisplayAsk("none"));
          }
    function openModal(){
            setShowChatModal(true, setDisplayAsk("flex")); 
        }

        const openPdf = (pdfLink) => {
            window.open(pdfLink);
        }

    const ModalChat = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "30%",
            height: "100%",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            backgroundColor: "transparent",
            border:'none',
            top:"0%",
            left:"40%",
            }}
      >
      <GridContainer>
          <GridItem xs={12} sm={12} md={12} style={{
                                        backgroundColor:'#FFCE52',
                                        borderRadius:'20px',
                                        height:'105%',
                                         }}>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <span className='close' onClick={()=>closeModal()}>&times;</span>
                  </GridItem>
              </GridContainer>
              
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <div>
                          <nav>
                              <button onClick={goToPrevPage}>Prev</button>
                              <button onClick={goToNextPage}>Next</button>
                          </nav>

                          <div style={{width: 600}}>
                              <Document
                                   file={'../../../assets/pdf/seq.pdf'}
                                   onLoadSuccess={onDocumentLoadSuccess}
                               >
                               <Page pageNumber={pageNumber} width={600} />
                              </Document>
                          </div>
                          <p>
                              Page {pageNumber} of {numPages}
                          </p>
                      </div>
                  </GridItem>
              </GridContainer>
          </GridItem>
      </GridContainer>
      </div>
    );
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
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf2
    },
    {
      id: 4,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    {
      id: 5,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf2
    },
    {
      id: 6,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf2
    },
    
    {
      id: 7,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    
    {
      id: 8,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf2
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
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    {
      id: 11,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    {
      id: 12,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    {
      id: 13,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    {
      id: 14,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    {
      id: 15,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
    {
      id: 16,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'Video',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: videoLink
    },
    {
      id: 17,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdf1
    },
  ];
  const options = [
    { value: 'francais', label: 'Français' },
    { value: 'anglais', label: 'Anglais' },
    { value: 'math', label: 'Mathématiques' },
    { value: 'physique', label: 'Physiques' },
    { value: 'info', label: 'Informatique' },
    { value: 'ingenieur', label: "Science de l'ingénieur" }
  ]
  const options1 = [
    { value: 'francais', label: 'Français' },
    { value: 'anglais', label: 'Anglais' },
    { value: 'math', label: 'Mathématiques' },
    { value: 'physique', label: 'Physiques' },
    { value: 'info', label: 'Informatique' },
    { value: 'ingenieur', label: "Science de l'ingénieur" }
  ]
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container">
            {showChatModal? <ModalChat />  : ''}
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'red',margin:'2%'}}>
                                Tous les cours
                            </div>
                            <Avatar 
                                size="40"
                                round={true}
                                src={smile}
                                name='logo'
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Rechercher"
                                    value="Doe"
                                    data={data}
                                    callback={(record) => console.log(record)}
                                  />
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                            <div style={{fontSize:'1vw',marginBottom:'2%'}}>
                               <select name="pets" id="pet-select">
                                    <option value="">Spécialité</option>
                                    <option value="dog">Français</option>
                                    <option value="cat">Anglais</option>
                                    <option value="hamster">Mathématiques</option>
                                    <option value="parrot">Physiques</option>
                                    <option value="spider">Informatique</option>
                                    <option value="goldfish">Science de l'ingénieur</option>
                                </select>
                            </div>

                        </GridItem>
                    </GridContainer>
             
			 <GridContainer style={{backgroundColor:'#eeeeee'}}>
			 			{currentPosts.map((post,index)=>{
			 				return(
			 					<GridItem xs={12} sm={12} md={3} key={post.id}>
                        
                                <Card style={{border:"2px solid #5271ff",width:'100%'}}>
                                    <CardHeader style={{backgroundColor:'#5271ff'}}>
                                        {post.id}-{post.courseName}
                                    </CardHeader>
                                    <CardBody style={{width:'100%',textAlign:'center',backgroundColor:'#C7D0D8'}}>
                                        {post.courseFormat == 'Video'?
                                            <img src={vidio} width='100%' height='80px'  /> : 
                                         post.courseFormat == 'PDF'?   
                                            <img src={imgpdf} width='25%' height='80px' />:''}
                                    </CardBody>
                                    <CardFooter style={{width:'100%',backgroundColor:'#ffce52'}}>
                                        <div style={{backgroundColor:'#ffce52',width:'100%',fontSize:'70%',padding:'3%'}}>
                                            <div><strong>Titre:</strong> {post.courseTitle}</div>
                                            <div><strong>Description:</strong> {post.courseDescription}</div>
                                            <div><strong>Type:</strong> {post.courseFormat}</div>
                                            <div><strong>Niveau:</strong> {post.courseLevel}</div>
                                            <div><strong>Sujet:</strong> {post.courseSubjet}</div>
                                       
                                        <div style={{marginTop:'10%'}}>
                                           <span style={{float:'left',cursor:'pointer'}}>
                                                {post.courseLink==videoLink?
                                                <div onClick={(e)=>openVideoTheque(e)}><img src={eye} width='80%'/></div>:
                                                <div onClick={()=>openPdf(post.courseLink)}><img src={eye} width='80%'/></div>}
                                                <div>voir</div>
                                            </span>
                                           
                                        </div> 
                                        </div>
                                    </CardFooter>
                                </Card>
                            
                        </GridItem>
			 					)
			 				
			 			})}
                    </GridContainer>
                    <GridContainer style={{backgroundColor:'#eeeeee'}}>
                    	<GridItem xs={12} sm={12} md={12}>
                    		<Pagination 
	                    		postsPerPage={postPerPage} 
	                    		totalPosts={posts.length} 
	                    		paginate={paginate}
                    		/>
                    	</GridItem>
                    </GridContainer>
                    </div>
		)
}
export default CourseContent


