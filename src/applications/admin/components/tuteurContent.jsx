import react from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CustomSelect from "../../../app/components/select/select.jsx";
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
import edit from '../../../assets/images/dashboard/edit.png';
import Select from 'react-select';
import './admin.css';
import {Table} from 'react-bootstrap';
import AddCourse from './addCourse.jsx';

const TuteurContent = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(2);
	const [postPerPage] = useState(3);
	const [display, setDisplay] = useState("flex");
	const [showEditModal,setShowEditModal] = useState(false);
	const [checked, setChecked] = useState(false);
  const [lessonData, setLessonData] = useState([]);

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
            height: "100%",
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
                <div style={{display:'inline-block', margin:'3%', fontSize:'100%', width:'170%'}}>
                    <span className='close' onClick={()=>closeModal()}>&times;</span>
                    <AddCourse lessonData={lessonData} /> 
                </div>
               
            </div>
          
      </div>
    )
  };
  
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

  const openModal=(isUpdate,dataLesson)=> {
    if(isUpdate=="yess"){
      setLessonData(dataLesson);
    }else{
      setLessonData([]);
    }
    setDisplay("flex",setShowEditModal(true));
    }

    const checkbox =()=>{
      return(
        <input type="checkbox" />);
    }


    let data = [
    {
      id: 1,
      courseName: 'Algèbre linéaire',
      nbLesson:'10',
      tutorName:"mvogo",
      speciality:"Mathematiques",
      activate: <input type="checkbox" />,
      edit: edit,
    },
    {
      id: 2,
      courseName: 'Algèbre linéaire',
      nbLesson:'10',
      tutorName:"mvogo",
      speciality:"Mathematiques",
      activate:<input type="checkbox" />,
      edit: edit,
    },
    {
      id: 3,
      courseName: 'Algèbre linéaire',
       nbLesson:'10',
      tutorName:"mvogo",
      speciality:"Mathematiques",
      activate:<input type="checkbox" />,
      edit: edit,
    },
    {
      id: 4,
     courseName: 'Algèbre linéaire',
      nbLesson:'10',
      tutorName:"mvogo",
      speciality:"Mathematiques",
      activate:<input type="checkbox" />,
      edit: edit,
    },
    {
      id: 5,
     courseName: 'Algèbre linéaire',
      nbLesson:'10',
      tutorName:"mvogo",
      speciality:"Mathematiques",
      activate:<input type="checkbox" />,
      edit: edit,
    },
    {
      id: 6,
      courseName: 'Algèbre linéaire',
       nbLesson:'10',
      tutorName:"mvogo",
      speciality:"Mathematiques",
      activate:<input type="checkbox" />,
      edit: edit,
    },
    
    {
      id: 7,
      courseName: 'Algèbre linéaire',
       nbLesson:'10',
      tutorName:"mvogo",
      speciality:"Mathematiques",
      activate:<input type="checkbox" />,
      edit: edit,
    },
  
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const options = [
    { value: 'francais', label: 'Français' },
    { value: 'anglais', label: 'Anglais' },
    { value: 'math', label: 'Mathématiques' },
    { value: 'physique', label: 'Physiques' },
    { value: 'info', label: 'Informatique' },
    { value: 'ingenieur', label: "Science de l'ingénieur" }
  ]
	return(
			<div className="container" style={{margin:'5% 0% 0% 0%'}}>

			{showEditModal? <ModalContentEdit /> :'' } 
			 <GridContainer style={{textAlign:'left',fontSize:'1.2vw'}}>

                        <GridItem xs={12} sm={12} md={3}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Cours
                            </div>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                             <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Rechercher"
                                    value="Doe"
                                    data={data}
                                    callback={(record) => console.log(record)}
                                  />
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                            <div style={{width:'100%',fontSize:'1vw'}}>
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

                    <GridContainer>
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
                    </GridContainer>

			 <GridContainer style={{backgroundColor:'#eeeeee',width:'95%'}}> 
        <Table striped bordered hover variant="secondary">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom du cours</th>
                  <th>Unités d'apprentissage</th>
                   <th>Spécialité</th>
                   <th>Nom du Tuteur</th>
                  <th>Activé</th>
                  <th>Editer</th>
                </tr>
              </thead>
              <tbody>
              {currentPosts.map((post,index)=>{
                return(
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.courseName}</td>
                    <td>{post.nbLesson}</td>
                     <td>{post.speciality}</td>
                    <td>{post.tutorName}</td>
                   
                    <td>{post.activate}</td>
                    <td style={{cursor:'pointer'}} onClick={()=>openModal("yess",post)}><img src={post.edit} width='25%'/></td>
                  </tr>
                  )
              })}
              </tbody>
            </Table>
          </GridContainer>

                 
                    <GridContainer>
                    	<GridItem xs={12} sm={12} md={12}>
                    		<div style={{ height: 150, width: '100%' }}>
                          <Pagination 
                          postsPerPage={postPerPage} 
                          totalPosts={posts.length} 
                          paginate={paginate}
                        />
                        </div>
                    	</GridItem>
                    </GridContainer>
        </div>
		)
}
export default TuteurContent


