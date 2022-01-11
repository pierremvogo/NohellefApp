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
import im5 from '../../../assets/images/im5.png';
import Pagination from './pagination.jsx';
import {Table} from 'react-bootstrap';
import EditProgress from './editProgress.jsx';


const ProgressionContent = () => {
	const [posts, setPosts] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(5);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const [progressData, setProgressData] = useState([]);

	useEffect(()=>{
		setPosts(data);
	},[])

    let data = [
    {
      id: 1,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 2,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 3,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 4,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 5,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
    {
      id: 6,
      matiere: "Algèbre Linéaire",
      specialite: "Mathematiques",
      seq1: '10.5 / 20',
      seq2:'10.5 / 20',
      seq3:'15 / 20',
      seq4:'15 / 20',
      seq5:'15 / 20',
      seq6:'15 / 20',
    },
  ];
   const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: display,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top:"0px",
            left:"0px",
            }}
      >
           <div className="contain" id='myContain'>
                <div style={{display:'inline-block', margin:'3%', fontSize:'100%', width:'170%'}}>
                    <span className='close' onClick={()=>closeModal()}>&times;</span>
                    <EditProgress progressData={progressData} /> 
                </div>
                
            </div>
          
      </div>
    )
  };
   function closeModal(){
    setDisplay("none",setShowEditModal(false));
  }

  const openModal=(isUpdate,dataProgress)=> {
    setDisplay("flex",setShowEditModal(true));
    if(isUpdate=="yess"){
      setProgressData(dataProgress);
    }else{
      setProgressData([])}
    }
  
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container">
      {showEditModal? <ModalContentEdit /> :'' } 
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3}>
                            <div style={{display:'inline-block',color:'#002495',margin:'5% 0% 0% 0%'}}>
                                Suivez votre progression
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{cursor:'pointer',
                                          marginTop:'10%',
                                          marginBottom:'5%',
                                          marginLeft:'10%',
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '25px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '100%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }} onClick={()=>openModal()}>
                                
                                <span className="text" style={{fontSize:'100%',color:'white'}}>Ajouter</span>
                              </div>
                            </div>
                        </GridItem>
                    </GridContainer>
             <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Matière</th>
                  <th>Spécialité</th>
                   <th>Note Seq1</th>
                   <th>Note Seq2</th>
                   <th>Note Seq3</th>
                   <th>Note Seq4</th>
                   <th>Note Seq5</th>
                   <th>Note Seq6</th>
                   
                </tr>
              </thead>
              <tbody>
              {currentPosts.map((post,index)=>{
                return(
                  <tr key={index}>
                
                    <td>{post.id}{post.matiere}</td>
                    <td>{post.specialite}</td>
                    <td>{post.seq1}</td>
                    <td>{post.seq2}</td>
                    <td>{post.seq3}</td>
                    <td>{post.seq4}</td>
                    <td>{post.seq5}</td>
                    <td>{post.seq6}</td>
                  </tr>
                  )
              })}
              </tbody>
            </Table>
          </GridContainer>
			            

                    <GridContainer>
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
export default ProgressionContent;



