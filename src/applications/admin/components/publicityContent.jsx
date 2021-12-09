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
import './admin.css';

const  PublicityContent = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage] = useState(4);

	useEffect(()=>{
		setPosts(data);
	},[])

    let data = [
    {
      id: 1,
      name: "Jean pierre",
      cathegorie: "Parent",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'listing des résultats',
    },
    {
      id: 2,
      name: "Jean pierre",
      cathegorie: "Tuteur",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'commenter un cours',
    },
    {
      id: 3,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    {
      id: 4,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    {
      id: 5,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    {
      id: 6,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    
    {
      id: 7,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    
    {
      id: 8,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    
    {
      id: 9,
     name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    
    {
      id: 10,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    {
      id: 11,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
    },
    {
      id: 12,
      name: "Jean pierre",
      cathegorie: "Apprenant",
      heureConnect: "10h30",
      heureDisconnect: "15h00",
      operations:'lire un cours pdf',
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
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'red',margin:'2%'}}>
                                Historiques 
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                    </GridContainer>

                             <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Cathégorie</th>
                  <th>Heure Connexion</th>
                  <th>Heure Deconnexion</th>
                  <th>Opérations</th>
                </tr>
              </thead>
              <tbody>
              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    <td>{post.name}</td>
                    <td>{post.cathegorie}</td>
                    <td>{post.heureConnect}</td>
                    <td>{post.heureDisconnect}</td>
                    <td>{post.operations}</td>
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


