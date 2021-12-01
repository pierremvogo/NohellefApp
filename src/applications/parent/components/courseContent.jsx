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
                                Consulter les travaux de votre enfant
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

                    <GridContainer style={{backgroundColor:'#c7d0d8',width:'95%'}}>
                      <GridItem xs={12} sm={12} md={12}>
                        <div style={{margin:'1%',fontSize:'1vw',textAlign:'center'}}>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={1}>
                              <strong> Picture</strong>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                            <div style={{marginLeft:'100%'}}>
                              <strong> Nom</strong>
                            </div>
                              
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                            <div style={{marginLeft:'100%'}}>
                              <strong>Prénom</strong>
                            </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                            <div style={{marginLeft:'220%'}}>
                              <strong>Email</strong>
                            </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                              <div style={{marginLeft:'360%'}}>
                              <strong>Téléphone</strong>
                              </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                            <div style={{marginLeft:'480%'}}>
                              <strong>Spécialité</strong>
                            </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                            <div style={{marginLeft:'540%'}}>
                              <strong>Note/20</strong>
                            </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                            <div style={{marginLeft:'220%'}}>
                              <strong>Décision</strong>
                            </div>
                            </GridItem>
                          </GridContainer>
                        </div>
                      </GridItem>
                    </GridContainer>

       <GridContainer style={{backgroundColor:'#c7d0d8',width:'95%'}}> 
          <GridItem xs={12} sm={12} md={12}>
            {currentPosts.map((post,index)=>{
              console.log("my post")
              console.log(post)
              return(
                 
                    <GridContainer key={post.id}>
                      <GridItem xs={12} sm={12} md={12}>
                        <div style={{margin:'1%',fontSize:'1vw',textAlign:'center'}}>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={1}>
                              <Avatar 
                                                size="45"
                                                round={true}
                                                src={post.userProfile}
                                                name='logo'
                                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                            <div style={{marginLeft:'100%'}}>
                            {post.id}{post.userName}
                          </div>
                      </GridItem>
                      
                      <GridItem xs={12} sm={12} md={1}>
                      <div style={{marginLeft:'100%'}}>
                        {post.userSurname}
                      </div>
                      </GridItem>
                      
                      <GridItem xs={12} sm={12} md={1}>
                      <div style={{marginLeft:'100%'}}>
                        {post.userEmail}
                      </div>
                      </GridItem>
                      
                      <GridItem xs={12} sm={12} md={1}>
                      <div style={{marginLeft:'360%'}}>
                      {post.userPhone}
                      </div>
                      </GridItem>
                  
                      <GridItem xs={12} sm={12} md={1} style={{textAlign:'center'}}>
                      <div style={{marginLeft:'490%'}}>
                        {post.userSpeciality}
                      </div>
              
                      </GridItem>
                       <GridItem xs={12} sm={12} md={1}>
                      <div style={{marginLeft:'600%',cursor:'pointer'}}>
                        {post.userNote}</div>
                      </GridItem>

                      <GridItem xs={12} sm={12} md={1}>
                      <div style={{marginLeft:'600%',cursor:'pointer'}}>
                        {post.userStatus}</div>
                      </GridItem>
                          </GridContainer>
                        </div>
                      
                      </GridItem>

                      
                    </GridContainer>
                              
                )
              
            })}
            </GridItem>
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


