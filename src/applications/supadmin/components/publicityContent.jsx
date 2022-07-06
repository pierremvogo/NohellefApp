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
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import {Table} from 'react-bootstrap';
import AddTutor from './addTutor.jsx';

const  PublicityContent = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage] = useState(4);

  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);

	useEffect(()=>{
		setPosts(data);
	},[])

    let data = [
    {
      id: 1,
      publicityTitle:"first application Nohellef ",
      publicityAction: <input type="checkbox" width="50%" />
    },
    {
      id: 2,
      publicityTitle:"first application Nohellef ",
      publicityAction: <input type="checkbox" width="50%" />
    },
    {
      id: 3,
      publicityTitle:"first application Nohellef ",
      publicityAction: <input type="checkbox" width="50%" />
    },
    {
      id: 4,
      publicityTitle:"first application Nohellef ",
      publicityAction: <input type="checkbox" width="50%" />
    },
    {
      id: 5,
      publicityTitle:"first application Nohellef ",
      publicityAction: <input type="checkbox" width="50%" />
    },
    {
      id: 6,
      publicityTitle:"first application Nohellef ",
      publicityAction: <input type="checkbox" width="50%" />
    },
    
  ];
  function closeModal(){
    setDisplay("none",setShowEditModal(false));
  }
   const openModal=()=> {
    setDisplay("flex",setShowEditModal(true));
    }

   const ModalContentEdit  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "4000px",
            justifyContent: "center",
            display: display,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
           <div className="contain" id='myContain'>
                <div style={{display:'inline-block', margin:'3%', fontSize:'1.5vw'}}>
                    
                </div><span className='close' onClick={()=>closeModal()}>&times;</span>
                <AddTutor /> 
            </div>
          
      </div>
    )
  };

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container">
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'blue',margin:'2%'}}>
                               Toute vos Publicités
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                    </GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                          <div style={{cursor:'pointer',
                                          margin:'1% 0% 1% 78%',
                                          
                                          textAlign:'center'}}>
                                      <div style={{
                                          backgroundColor: '#4b9960',
                                          borderRadius: '10px',
                                          borderBottom: '3px solid #002495',
                                          borderRight:  '3px solid #002495',
                                          borderTop: '1px solid #002495',
                                          borderLeft:  '1px solid #002495',
                                          height: '50px',
                                          width: '70%',
                                          cursor: 'pointer',
                                          textAlign:'center',
                                          paddingTop:'5%'
                                        }} onClick={()=> openModal()}>
                                
                                <span className="text" style={{fontSize:'1.2vw',color:'white'}}>Ajouter</span>
                              </div>
                                    </div>
                          
                      </GridItem>
          <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Titre de la publicité</th>
                  <th>Activer / Désactiver</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    <td>{post.publicityTitle}</td>
                    <td>{post.publicityAction}</td>
                  </tr>
                  )
              })}
              </tbody>
          </Table>
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
export default PublicityContent


