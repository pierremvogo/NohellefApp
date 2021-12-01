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
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Select from 'react-select';
import VideoContent from './videoContent';

const CourseContent = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(4);

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
      courseSubjet:'Mathématiques',
      courseLink: pdfLink
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
      courseLink: pdfLink
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
      courseLink: pdfLink
    },
    {
      id: 6,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdfLink
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
      courseLink: pdfLink
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
      courseLink: pdfLink
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
      courseLink: pdfLink
    },
    {
      id: 13,
      courseName: "Algèbre Linéaire",
      courseTitle: "Cours de mathématiques",
      courseDescription: "Ce cours est destiné au étudiant en algèbre, son contenu s'articule sur Espace vectoriel, Matrix et Equation multidimentionnelle",
      courseFormat:'PDF',
      courseLevel:'Niveau 8',
      courseSubjet:'Mathématiques',
      courseLink: pdfLink
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
      courseLink: pdfLink
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
      courseLink: pdfLink
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
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
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
                               <Select options={options}/>
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{width:'100%',fontSize:'1vw'}}>
                                <Select options={options1}/>
                            </div>
                        </GridItem>
                    </GridContainer>
             
			 <GridContainer style={{backgroundColor:'#eeeeee'}}>
			 			{currentPosts.map((post,index)=>{
			 				console.log("my post")
			 				console.log(post)
			 				return(
			 					<GridItem xs={12} sm={12} md={3} key={post.id}>
                        
                                <Card style={{border:"2px solid #5271ff",width:'100%'}}>
                                    <CardHeader style={{backgroundColor:'#5271ff'}}>
                                        {post.id}-{post.courseName}
                                    </CardHeader>
                                    <CardBody style={{width:'100%'}}>
                                        {post.courseFormat == 'Video'? <VideoContent
                                                                          videoLink={post.courseLink} 
                                                                          vWidth={210} 
                                                                          vHeight={90} /> : 
                                         post.courseFormat == 'PDF'?   <img src={post.courseLink} width='50%' /> :''}
                                    </CardBody>
                                    <CardFooter style={{width:'100%'}}>
                                        <div style={{backgroundColor:'#ffce52',width:'100%',fontSize:'1vw',padding:'3%'}}>
                                            <div><strong>Titre:</strong> {post.courseTitle}</div>
                                            <div><strong>Description:</strong> {post.courseDescription}</div>
                                            <div><strong>Type:</strong> {post.courseFormat}</div>
                                            <div><strong>Niveau:</strong> {post.courseLevel}</div>
                                            <div><strong>Sujet:</strong> {post.courseSubjet}</div>
                                       
                                        <div style={{marginTop:'10%'}}>
                                           <span style={{float:'left',cursor:'pointer'}}>
                                                <div><img src={eye} width='80%'/></div>
                                                <div>voir</div>
                                            </span>
                                            {post.courseFormat != 'Video'?<span style={{float:'right',cursor:'pointer',textAlign:'center'}}>
                                                <div><img src={download} width='35%'/></div>
                                                <div>Télécharger</div>
                                            </span>:''}
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


