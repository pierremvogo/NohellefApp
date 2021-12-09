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
import {Table} from 'react-bootstrap';
import chat from '../../../assets/images/dashboard/chat2.png';
import checkok from '../../../assets/images/dashboard/checkok.png';
import checknone from '../../../assets/images/dashboard/checknone.png';
import edit from '../../../assets/images/dashboard/edit.png';



const  FormulaireAbonnement = () => {
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
      userProfile: <img src={checknone} width='15%'/>,
      userName: <img src={checknone} width='15%'/>,
      userSurname: <img src={checkok} width='12%'/>,
      userEmail:<input type='checkbox' />,
      userPhone:  <img src={edit} width='20%'/>,
   
    },
    {
      id: 2,
      userProfile: <img src={checknone} width='15%'/>,
      userName: <img src={checknone} width='15%'/>,
      userSurname: <img src={checkok} width='12%'/>,
      userEmail:<input type='checkbox' />,
      userPhone:  <img src={edit} width='20%'/>,
    },
    {
      id: 3,
      userProfile: <img src={checknone} width='15%'/>,
      userName: <img src={checknone} width='15%'/>,
      userSurname: <img src={checkok} width='12%'/>,
      userEmail:<input type='checkbox' />,
      userPhone:  <img src={edit} width='20%'/>,
    },
    {
      id: 4,
      userProfile: <img src={checknone} width='15%'/>,
      userName: <img src={checknone} width='15%'/>,
      userSurname: <img src={checkok} width='12%'/>,
      userEmail:<input type='checkbox' />,
      userPhone:  <img src={edit} width='20%'/>,
    },
    {
      id: 5,
      userProfile: <img src={checknone} width='15%'/>,
      userName: <img src={checknone} width='15%'/>,
      userSurname: <img src={checkok} width='12%'/>,
      userEmail:<input type='checkbox' />,
      userPhone:  <img src={edit} width='20%'/>,
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
                        <GridItem xs={12} sm={12} md={4} style={{marginTop:'2%'}}>
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
                             
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
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
                  <th>Offre Basique</th>
                  <th>Offre Chat</th>
                  <th>Offre Web-Conference</th>
                  <th>Activer / Desactiver</th>
                  <th>Editer</th>
                </tr>
              </thead>
              <tbody>

              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    <td>{post.userProfile}</td>
                    <td>{post.userName}</td>
                    <td>{post.userSurname}</td>
                    <td>{post.userEmail}</td>
                    <td>{post.userPhone}</td>
                   
                  </tr>
                  )
              })}
              </tbody>
          </Table>
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
export default  FormulaireAbonnement


