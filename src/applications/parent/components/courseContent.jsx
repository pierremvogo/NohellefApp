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
import im5 from '../../../assets/images/im5.png';
import setting from '../../../assets/images/admin/setting.png';
import eye from '../../../assets/icons/eye.png';
import download from '../../../assets/icons/download.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Switch from "react-switch";
import edit from '../../../assets/images/dashboard/edit.png';
import './admin.css';
import {Table} from 'react-bootstrap';

const CourseContent = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const [display, setDisplay] = useState("flex");
  const [showEditModal,setShowEditModal] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    setPosts(data);
  },[])

  const handleChange = (checked) => {
    setChecked(checked)
  }

  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
  }

  
  function checkUser(id)
    {
      console.log("Id for usertable");
      console.log(id);
      var checkbox = document.getElementById('userC');
      if (id=1)
      {
       console.log(posts.userName);
      }
    };

  function closeModal(){
    setDisplay("none",setShowEditModal(false));
  }

  const openModal=()=> {
    setDisplay("flex",setShowEditModal(true));
    }

    let data = [
    {
      id: 1,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"Maths",
      userNote:15,
      userStatus: "validée"
    },
    {
      id: 2,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"Science de l'ingénieur",
       userNote:15,
      userStatus: "validée"
    },
    {
      id: 3,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"Maths",
       userNote:15,
      userStatus: "validée"
    }
    ,
    {
      id: 4,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"Maths",
       userNote:15,
      userStatus: "validée"
    }
    ,
    {
      id: 5,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"Maths",
       userNote:15,
      userStatus: "validée"
    }
    ,
    {
      id: 6,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userSpeciality:"Maths",
       userNote:15,
      userStatus: "validée"
    }

    
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{margin:'5% 0% 0% 0%'}}>

    
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>

                        <GridItem xs={12} sm={12} md={6}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'0% 0% 5% 0%'}}>
                                Consulter les travaux de vos enfants
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                             
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                           
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
                   <th>Email</th>
                  <th>Téléphone</th>
                  <th>Spécialité</th>
                   <th>Note / 20</th>
                   <th>Décision</th>
                </tr>
              </thead>
              <tbody>
              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    <td><Avatar 
                                                size="45"
                                                round={true}
                                                src={post.userProfile}
                                                name='logo'
                                            /></td>
                    <td>{post.id}{post.userName}</td>
                    <td>{post.userSurname}</td>
                   <td>{post.userEmail}</td>
                   <td>{post.userPhone}</td>
                   <td>{post.userSpeciality}</td>
                    <td>{post.userNote}</td>
                    <td>{post.userStatus}</td>
                  </tr>
                  )
              })}
              </tbody>
            </Table>
          </GridContainer>
                    <GridContainer >
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


