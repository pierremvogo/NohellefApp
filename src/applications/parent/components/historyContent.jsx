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
import im5 from '../../../assets/images/im5.png';
import {Table} from 'react-bootstrap';




const HistoryContent = () => {
	const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);

  const [currentPage1, setCurrentPage1] = useState(1);
  const [postPerPage1, setPostPerPage1] = useState(2);

	useEffect(()=>{
		setPosts(data,setPosts1(data1));
	},[])

    let data = [
     {
      id: 1,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      heureConnexion:"12h45",
      heureDeconnexion:'16h35',
      operations: "lecture du cours de math"
    },
    {
      id: 2,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      heureConnexion:"12h45",
      heureDeconnexion:'16h35',
      operations: "lecture du cours de math"
    },
    {
      id: 3,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      heureConnexion:"12h45",
      heureDeconnexion:'16h35',
      operations: "lecture du cours de math"
    }
    ,
    {
      id: 4,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      heureConnexion:"12h45",
      heureDeconnexion:'16h35',
      operations: "lecture du cours de math"
    }
    ,
    {
      id: 5,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      heureConnexion:"12h45",
      heureDeconnexion:'16h35',
      operations: "lecture du cours de math"
    }
    
  ];


  let data1 = [
    {
      id: 1,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"12h45",
      userNote:'16h35',
      operations: "lecture du cours de math"
    },
    {
      id: 2,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"12h45",
      userNote:'16h35',
      operations: "lecture du cours de math"
    },
    {
      id: 3,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"12h45",
      userNote:'16h35',
      operations: "lecture du cours de math"
    }
    
  ];
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
                        <GridItem xs={12} sm={12} md={6} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#002495',margin:'2%'}}>
                               Consulter l'historique de connexion de vos enfants
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
                      </GridItem>
                    </GridContainer>
     <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Heure de connexion</th>
                  <th>Heure de deconnexion</th>
                  <th>Opérations Effectuées</th>
                </tr>
              </thead>
              <tbody>
              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    <td><Avatar 
                          size="35"
                          round={true}
                          src={post.userProfile}
                          name='logo'
                        /></td>
                    <td>{post.id}{post.userName}</td>
                    <td>{post.userSurname}</td>
                    <td>{post.heureConnexion}</td>
                    <td>{post.heureDeconnexion}</td>
                    <td>{post.operations}</td>
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
export default HistoryContent;


