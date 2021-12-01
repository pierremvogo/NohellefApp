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
import AddTutor from './addTutor.jsx';
import download from '../../../assets/icons/download.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Switch from "react-switch";
import './admin.css';

const ApprenantContent = () => {
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
  const CheckBox =()=> {
    return(
        <input type='checkbox' />
      )
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
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635'
    },
    {
      id: 2,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635'
    },
    {
      id: 3,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635'
    },
    {
      id: 4,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635'
    },
    {
      id: 5,
      userProfile: im5,
      userName:"mvogo",
      userSurname:"pierre",
      userEmail:"mvogopierre129@gmail.com",
      userPhone:"698114902",
      userCity:"Yaoundé",
      userAddress: "Rue 5874",
      userCode: '125635'
    },
    
    
   
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
      <div className="container" style={{margin:'5% 0% 0% 0%'}}>

      {showEditModal? <ModalContentEdit /> :'' } 
       <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>

                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Apprenants
                            </div>
                            
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
                            <div style={{width:'100%',fontSize:'1vw'}}>
                                <Dropdown>
                                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Spécialité
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Français</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Anglais</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Mathématiques</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Physiques</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Informatique</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Science de l'ingénieur</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </GridItem>
                    </GridContainer>

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>

                        <div style={{cursor:'pointer',
                                          margin:'1% 0% 1% 80%',
                                          textAlign:'center'}}>
                                 
                                    </div>
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
                              <strong>Ville</strong>
                            </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={1}>
                            <div style={{marginLeft:'540%'}}>
                              <strong>Adresse</strong>
                            </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                            <div style={{marginLeft:'225%'}}>
                              <strong>Code</strong>
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
                            {post.userName}
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
                      <div style={{marginLeft:'460%'}}>
                        {post.userCity}
                      </div>
              
                      </GridItem>

                      <GridItem xs={12} sm={12} md={1}>
                      <div style={{marginLeft:'565%'}}>
                        {post.userAddress}
                      </div>
                      </GridItem>

                      <GridItem xs={12} sm={12} md={1}>
                      <div style={{marginLeft:'600%',cursor:'pointer'}}>
                         {post.userCode}
                        
                       </div>
                      </GridItem>
                          </GridContainer>
                        </div>
                      
                      </GridItem>

                      
                    </GridContainer>
                              
                )
              
            })}
            </GridItem>
                    </GridContainer>
                    <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}>
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
export default  ApprenantContent


