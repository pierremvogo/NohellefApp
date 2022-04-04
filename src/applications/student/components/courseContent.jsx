import react,{useState,useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import { Dropdown } from 'react-bootstrap';
import smile from '../../../assets/images/main/smile.png';
import eye from '../../../assets/icons/eye.png';
import download from '../../../assets/icons/download.png';
import ReactSearchBox from "react-search-box";
import pdfLink from '../../../assets/images/dashboard/smilevid.png';
import videoLink from '../../../assets/video/testvideo2.mp4';
import videoLink4 from '../../../assets/video/testvideo4.mp4';
import videoLink2 from '../../../assets/video/testvideo.mp4';
import videoLink3 from '../../../assets/video/testvideo3.mp4';
import pdf1 from '../../../assets/pdf/PHP.pdf';
import pdf2 from '../../../assets/pdf/seq.pdf';
import Avatar   from 'react-avatar';
import Pagination from './pagination.jsx';
import Select from 'react-select';
import SimpleSelect from './select';
import VideoContent from './videoContent';
import vidio from '../../../assets/images/dashboard/vidio.png';
import imgpdf from '../../../assets/images/imgpdf.png';
import './account.css';
import {Document, Page, pdfjs,} from 'react-pdf';
import adminService from '../../services/admin.service';
import authService from '../../services/auth.service';
import courseService from '../../services/course.service';
import {    authRegisterSuccess, 
            authRegisterFailed, 
            authShowMessage, 
            authSetRegisterForm,
            authCreateSuccess,
            shareCourses } from '../../redux/reducer/actions/auth';
 
const CourseContent = ({courses, onChildClickHandlerVideo,externalLinkVideo}) => {
   
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(4);
  const [displayPDF, setDisplayPDF] = useState("flex");
  const [showPDFModal,setShowPDFModal] = useState(false);
  const [linkPDF,setLinkPDF] = useState("");
  const [numPages, setNumpages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showChatModal, setShowChatModal] = useState(false);
  const [displayAsk, setDisplayAsk] = useState("none");
  const dispatch = useDispatch();


  const openVideoTheque = (courselink) => {
        console.log(courselink);
        onChildClickHandlerVideo(courselink);
    }

    pdfjs.GlobalWorkerOptions.workerSrc = 
         `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumpages(numPages);
    }

    const goToPrevPage = () =>{
        setPageNumber(pageNumber - 1);
    }

    const goToNextPage = () =>{
        setPageNumber(pageNumber + 1);
    }

	useEffect(()=>{
    getCourses()
		setPosts(data);
	},[])

    function closeModal(){
        setShowChatModal(false,setDisplayAsk("none"));
        setShowPDFModal(false,setDisplayPDF("none"));
        }

    function openModal(type,link){
      if(type==="pdf"){
        setShowPDFModal(true,
          setLinkPDF(link),
          setDisplayPDF("flex"),
          setShowChatModal(false, 
          setDisplayAsk("none")));
      }else{
        setShowPDFModal(false,
          setDisplayPDF("none"),
          setShowChatModal(true, 
          setDisplayAsk("flex")));
      }
        
        }

        const openPdf = (pdfLink) => {
            window.open(pdfLink);
        }

    const ModalOpenPDF = () => {
      return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: displayPDF,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            top:"0px",
            left:"0px",
            }}
      >
            <div className="contain" id='myContain' style={{backgroundColor:'white'}}>
                <div style={{display:'inline-block', fontSize:'100%'}}>
                   
                </div><span style={{cursor:'pointer'}} className='close' onClick={()=>closeModal()}>&times;</span>
                <iframe allowfullscreen src={`http://38.242.220.206:6051/medias/docs/${linkPDF}` +"#toolbar=0"} style={{width:"70em", height:"35em"}} frameBorder="0"></iframe>
            </div>
          
      </div>
    )
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
            console.log("Response for get Courses in Student");
            console.log(response.data.courses);
            dispatch(shareCourses(response.data.courses));
        })
        .catch((error)=> {
            console.log("Error Response for get Courses in Student");
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
    }else{console.log("return for not match"); paginate(1); return;}
    })
   
    }

    const ModalChat = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "30%",
            height: "100%",
            justifyContent: "center",
            display: displayAsk,
            alignItems: "center",
            zIndex: "300000",
            position: "absolute",
            backgroundColor: "transparent",
            border:'none',
            top:"0%",
            left:"40%",
            }}
      >
      <GridContainer>
          <GridItem xs={12} sm={12} md={12} style={{
                                        backgroundColor:'#FFCE52',
                                        borderRadius:'20px',
                                        height:'105%',
                                         }}>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <span className='close' onClick={()=>closeModal()}>&times;</span>
                  </GridItem>
              </GridContainer>
              
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <div>
                          <nav>
                              <button onClick={goToPrevPage}>Prevew</button>
                              <button onClick={goToNextPage}>Next</button>
                          </nav>

                          <div style={{width: 600}}>
                              <Document
                                   file={'../../../assets/pdf/seq.pdf'}
                                   onLoadSuccess={onDocumentLoadSuccess}
                               >
                               <Page pageNumber={pageNumber} width={600} />
                              </Document>
                          </div>
                          <p>
                              Page {pageNumber} of {numPages}
                          </p>
                      </div>
                  </GridItem>
              </GridContainer>
          </GridItem>
      </GridContainer>
      </div>
    );
  };

    let data = [
  ];
 
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = courses&&courses.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return(
			<div className="container">
            {showChatModal? <ModalChat />  : ''}
            {showPDFModal? <ModalOpenPDF />  : ''}
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'red',margin:'2%'}}>
                                Tous les cours
                            </div>
                            <Avatar 
                                size="40"
                                round={true}
                                src={smile}
                                name='logo'
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{margin:'2%'}}>
                            <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Search By Course Title"
                                    value="Doe"
                                    data={data}
                                    onChange={onChangeSearch}
                                  />
                            </div>
                        </GridItem>
                        {/*<GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                           
                            <div style={{fontSize:'1vw',marginBottom:'2%'}}>
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

                        </GridItem>*/}
                    </GridContainer>
             
			 <GridContainer style={{backgroundColor:'#eeeeee'}}>
			 			{currentPosts&&currentPosts.map((post,index)=>{
			 				return(
			 					<GridItem xs={12} sm={12} md={3} key={post.id}>
                        
                                <Card style={{border:"2px solid #5271ff",width:'100%'}}>
                                    <CardHeader style={{backgroundColor:'#5271ff'}}>
                                       
                                    </CardHeader>
                                    <CardBody style={{width:'100%',textAlign:'center',backgroundColor:'#C7D0D8'}}>
                                        {post.type == '1'?
                                            <img src={vidio} width='100%' height='80px'  /> : 
                                         post.type == '0'?   
                                            <img src={imgpdf} width='25%' height='80px' />:''}
                                    </CardBody>
                                    <CardFooter style={{width:'100%',height:'180px',backgroundColor:'#ffce52'}}>
                                        <div style={{backgroundColor:'#ffce52',width:'100%',fontSize:'80%',padding:'3%'}}>
                                            <div><strong>Titre: </strong> {post.title}</div>
                                            <div><strong>Description: </strong> {post.description}</div>
                                            <div><strong>Type: </strong> {post.type==="0"?
                                                                          "Pdf":
                                                                          'Video'}
                                                                        </div>
                                            <div><strong>Niveau: </strong>{post.levels.map((value,index) =>{return(<span key={index}>{
                                                                                value.level==="0"?"six_secondary":
                                                                                value.level==="1"?"five_secondary":
                                                                                value.level==="2"?"four_secondary":
                                                                                value.level==="3"?"three_secondary":
                                                                                value.level==="4"?"second_secondary":
                                                                                value.level==="5"?"first_secondary":
                                                                                "terminal_secondary"}</span>)})}</div>
                                            <div><strong>Sujet: </strong> {post.speciality.name}</div>
                                       
                                        <div style={{marginTop:'10%'}}>
                                           <span style={{float:'left',cursor:'pointer'}}>
                                                {post.type=="1"?
                                                <div onClick={()=>openVideoTheque(post.courseLink)}><img src={eye} width='80%'/></div>:
                                                <div onClick={()=>openModal('pdf',post.media.hashname)}><img src={eye} width='80%'/></div>}
                                                <div>voir</div>
                                            </span>
                                           
                                        </div> 
                                        </div>
                                    </CardFooter>
                                </Card>
                            
                        </GridItem>
			 					)
			 				
			 			})}
                    </GridContainer>
                    <GridContainer style={{backgroundColor:'#eeeeee'}}>
                    	<GridItem xs={12} sm={12} md={12}>
                    		<Pagination 
	                    		postsPerPage={postPerPage} 
	                    		totalPosts={courses&&courses.length} 
	                    		paginate={paginate}
                    		/>
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
export default connect(mapStateToProps)(CourseContent)


