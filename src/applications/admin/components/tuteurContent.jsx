import react,{useState,useEffect} from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import {connect, useSelector, useDispatch} from 'react-redux';
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CustomSelect from "../../../app/components/select/select.jsx";
import CardBody from "../../../app/components/Card/CardBody.js";
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
import videoIcon from '../../../assets/icons/videoIcon.png';
import pdfIcon from '../../../assets/icons/pdfIcon.png';
import Select from 'react-select';
import './admin.css';
import {Table} from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import trash from '../../../assets/images/dashboard/trash.png';
import DeleteCourse from './askForDelete.jsx';
import AddCourse from './addCourse.jsx';
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import courseService from '../../services/course.service';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareCourses } from '../../redux/reducer/actions/auth';

const TuteurContent = ({courses}) => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState("flex");
	const [postPerPage] = useState(3);
	const [showEditModal,setShowEditModal] = useState(false);
	const [checked, setChecked] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [showModalLoading, setShowModalLoading] = useState(false);
  const [displayLoading, setDisplayLoading] = useState("flex");
  const [courseId, setCourseId] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

	useEffect(()=>{
    getCourses();
	},[])

	const handleChange = (checked) => {
		setChecked(checked)
	}

  const dispatch = useDispatch();

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
        
          <AddCourse 
                      onChildCloseModal={closeModal} 
                      courseData={courseData}
                      isAdd={isAdd}
                      onchildOpenLoading={handleLoading} /> 
              
      
      </div>
    )
  };

  const ModalDeleteCourse  = () => {
    return(
      <div className="" id='cont'
        style={{
            width: "100%",
            height:"100%",
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
                    
        <DeleteCourse  onChildCloseModal={closeModal} 
                       onchildOpenLoading={handleLoading}
                       idCourse={courseId} /> 
            
      </div>
    )
  };

  const openModalDelete = (id) => {
      setCourseId(id);
      setDisplay("flex",
        setShowEditModal(false),
        setShowModalDelete(true));
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
    getCourses();
    setDisplay("none",setShowEditModal(false),setShowModalDelete(false));
  }

  const openModal=(isUpdate,dataCourse)=> {
    if(isUpdate=="yess"){
      setCourseData(dataCourse);
      setIsAdd(false);
    }else{
      setCourseData([]);
      setIsAdd(true);
    }
    setDisplay("flex",setShowEditModal(true),setShowModalDelete(false));
    }
   

    const checkbox =()=>{
      return(
        <input type="checkbox" />);
    }

     const ModalLoading = () => {
    
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            display: displayLoading,
            zIndex: "900000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top:"0px",
            left:"0px",
            }}
      >
            <div
                style={{
                    width: "10%",
                    height: "30%",
                    zIndex: "300000",
                    display: "flex",
                    position: "absolute",
                    top: "30%",
                    left: "48%"
                }}
                >
                <Loader type="Oval" color="#2BAD60" height="100" width="70" />
            </div>
          
      </div>
    )
  };
  const handleLoading = (isShow) => {
    setShowModalLoading(isShow);
  }

  const getCourses = () => {
    const filterPayload = {
                            specialitiesCode: [
                              "fr",
                              "eng",
                              "maths",
                              "phy",
                              "info",
                              "ing",
                            ],
                            levels: [
                              "0",
                              "1",
                              "2",
                              "3",
                              "4",
                              "5",
                              "6",
                            ],
                            types: [
                              "0",
                              "1"
                            ]
                          }
    courseService.filterCourses(filterPayload)
        .then((response)=> {
            console.log("Response for get Courses");
            console.log(response.data.courses);
            dispatch(shareCourses(response.data.courses));
        })
        .catch((error)=> {
            console.log("Error Response for get Courses");
            console.log(error);
            dispatch(shareCourses(null));
        })
}
 const onChangeSearch = (record) => {
    let filter, table, tr, td, i,input, txtValue;
     filter = record.toUpperCase();

    Object.keys(courses&&courses).map((value,index) => {
      console.log(courses[value].title);
      console.log(filter);
      console.log(index);
      if(courses[value].title.toUpperCase().indexOf(filter) > -1){
      if(index===0 || index===1 || index===2){
        paginate(1);
      }else{
        if((index%3) === 0){
          paginate((index/3) + 1);
        }else if(((index-1)%3) === 0){
          paginate(((index-1)/3) + 1);
        }else if(((index-2)%3) === 0){
          paginate(((index-2)/3) + 1);
        } 
      }
    }else{return;}
    })
   
    }


    let data = [
  
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = courses&&courses.slice(indexOfFirstPost,indexOfLastPost);
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
      {showModalLoading? <ModalLoading />: ''}
			{showEditModal? <ModalContentEdit /> :'' } 
      {showModalDelete? <ModalDeleteCourse />: ''}
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>

                        <GridItem xs={12} sm={12} md={3}>
                            <div style={{display:'inline-block',color:'#5271ff',margin:'2%'}}>
                                Tous les Cours
                            </div>
                            
                        </GridItem>
                        
                        <GridItem xs={12} sm={12} md={6} style={{marginTop:'0%'}}>
                             <div style={{border:'2px solid #0069D9', width:'100%'}}>
                                 <ReactSearchBox
                                    placeholder="Search By Course Title"
                                    value="Doe"
                                    data={data}
                                    onChange={onChangeSearch}
                                  />
                            </div>
                        </GridItem>
                        {/*<GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                            <div style={{width:'100%',fontSize:'1vw'}}>
                               <select name="pets" id="pet-select">
                                    <option value="fr">Français</option>
                                    <option value="eng">Anglais</option>
                                    <option value="maths">Mathématiques</option>
                                    <option value="phy">Physiques</option>
                                    <option value="info">Informatique</option>
                                    <option value="ing">Science de l'ingénieur</option>
                                </select>
                            </div>
                        </GridItem>*/}
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
                  <th>Titre</th>
                  <th>Spécialité</th>
                  <th>Type</th>
                  <th>Niveau</th>
                  <th>Nb. Leçons</th>
                  <th>Activé/Désactivé</th>
                  <th>Editer</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
              {currentPosts&&currentPosts.map((post,index)=>{
                return(
                  <tr key={index}>
                    <td>{post.title}</td>
                    <td>{post.speciality.name}</td>
                    <td>{post.type==="0"?
                        <img src={pdfIcon} width='45%'/>:
                        <img src={videoIcon} width='45%'/>}
                    </td>
                    <td>{post.levels.map((value,index) =>{return(<span key={index}>{value.label.toLowerCase()}</span>)})}</td>
                    <td>{post.media}</td>
                  
                    <td><input type="checkbox" /></td>
                    <td style={{cursor:'pointer'}} onClick={()=>openModal("yess",post)}><img src={edit} width='30%'/></td>
                    <td>
                        <img 
                            onClick={()=>openModalDelete(post.id)}
                            src={trash} 
                            width='10%' 
                            style={{cursor:'pointer'}}
                        />
                    </td>
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
                          totalPosts={courses&&courses.length} 
                          paginate={paginate}
                        />
                        </div>
                    	</GridItem>
                    </GridContainer>
        </div>
		)
}
const mapStateToProps=(state)=>{
  return{
      error: state.authReducer.error,
      courses: state.authReducer.courses,   
  };
};
export default connect(mapStateToProps)(TuteurContent);


