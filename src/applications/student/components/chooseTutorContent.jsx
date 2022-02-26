import React,{useState,useEffect} from 'react';
import GridItem from "../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../app/components/Grid/GridContainer.js";
import Card from "../../../app/components/Card/Card.js";
import CardHeader from "../../../app/components/Card/CardHeader.js";
import CardBody from "../../../app/components/Card/CardBody.js";
import { useHistory } from "react-router-dom";
import CardAvatar from "../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../app/components/Card/CardFooter.js";
import { Dropdown } from 'react-bootstrap';
import t1 from '../../../assets/images/dashboard/t1.png';
import profilepic from '../../../assets/images/im5.png';
import chat1 from '../../../assets/images/dashboard/chat1.png';
import chat2 from '../../../assets/images/dashboard/chat2.png';
import smile2 from '../../../assets/images/dashboard/smile2.png';
import choisir from '../../../assets/images/dashboard/choisir.png';
import conchat from '../../../assets/images/dashboard/conchat.png';
import ReactSearchBox from "react-search-box";
import Avatar   from 'react-avatar';
import './account.css';
import Pagination from './pagination.jsx';
import Chat from "../../../app/components/chat/chat.jsx";
import io from 'socket.io-client';



const ChooseTutorContent = ({onChildOpenModal}) => {
	const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);
	const [loading, serLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(2);
  const [displayAsk, setDisplayAsk] = useState("none");
  const [showChatModal, setShowChatModal] = useState(false);
  const [isShowChat, setIsShowChat] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [currentPage1, setCurrentPage1] = useState(1);
  const [postPerPage1, setPostPerPage1] = useState(1);
  const [date, setDate] = useState();
  const [showJoin, setShowJoin] = useState(false);

  const history = useHistory();

	useEffect(()=>{
		setPosts(data,setPosts1(data1));
	},[])

  const openModal = (e) => {
    onChildOpenModal(e.target.name)
  }

  let data1 = [
      {
      id: 1,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 2,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 3,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 4,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 5,
      tutorName: "Mme Ngono Marthe",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
   

  ];

    let data = [
    {
      id: 1,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 2,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 3,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 4,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 5,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
    {
      id: 6,
      tutorName: "Pirate bay",
      tutorPicture: profilepic,
      tutorSpeciality: "mathématiques",
    },
  ];
  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);


  const indexOfLastPost1 = currentPage1 * postPerPage1;
  const indexOfFirstPost1 = indexOfLastPost1 - postPerPage1;
  const currentPosts1 = posts1.slice(indexOfFirstPost1,indexOfLastPost1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginate1 = (pageNumber) => setCurrentPage1(pageNumber);

 


	return(
			<div>
			 <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'0%'}}>
                            <div style={{display:'inline-block',color:'red',margin:'2%'}}>
                                Vos Tuteurs
                            </div>
                            <Avatar 
                                size="40"
                                round={true}
                                src={t1}
                                name='logo'
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} style={{marginTop:'2%'}}>
                            
                        </GridItem>
                    </GridContainer>
                 {currentPosts1.map((value,index)=> {
                  return(
                      <GridContainer key={value.id}>
                            <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                              marginBottom: '0%',
                              backgroundColor: '#273941',
                              borderRadius: '15px',
                              borderBottom: '3px solid #9aa7b2',
                              borderRight:  '3px solid #9aa7b2',
                              height: '90px',
                              marginTop:'1%',
                              width: '100%',
                              cursor: 'pointer'

                              }}>
                              <GridContainer>
                                <GridItem xs={2} sm={2} md={2} style={{textAlign:'center'}}>
                                <div style={{margin:'10%'}}>
                                  <Avatar 
                                        size="50"
                                        round={true}
                                        src={value.tutorPicture}
                                        name='logo'
                                    />
                                    
                                  </div>
                                </GridItem>
                                <GridItem xs={5} sm={5} md={5} style={{textAlign:'center'}}>
                                        <div style={{margin:'5%'}}>
                                          <div style={{color:'white',fontSize:'100%'}}>{value.id}-Nom: {value.tutorName}</div>
                                          <div style={{color:'white',fontSize:'100%'}}>Spécialité: {value.tutorSpeciality}</div>
                                        </div>
                                </GridItem>

                                <GridItem xs={5} sm={5} md={5} style={{textAlign:'center'}}>
                                  <div style={{margin:'5%'}}>
                                    <GridContainer>
                                      <GridItem xs={6} sm={6} md={6}>
                                        <img src={conchat} onClick={()=>history.push('/room/chat')} width='30%'/>
                                      </GridItem>
                                      <GridItem xs={6} sm={6} md={6} onClick={(e)=>openModal(e)}>
                                        <img src={chat1} width='100%'/>
                                      </GridItem>
                                    </GridContainer>
                                  </div>
                                </GridItem>


                              </GridContainer>

                              </div>
                            </GridItem>

                      </GridContainer>
                    )
                      })}
                   <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <Pagination 
                          postsPerPage={postPerPage1} 
                          totalPosts={posts1.length} 
                          paginate={paginate1}
                        />
                      </GridItem>
                    </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <div style={{border:'2px solid #002495',width:'100%'}}></div>
                      <div style={{color:'#002495'}}>Avez-vous besoin d'un autre tuteur?</div>
                    </GridItem>
                  </GridContainer>

                   <GridContainer style={{textAlign:'left',fontSize:'100%'}}>
                        <GridItem xs={3} sm={3} md={3} style={{marginTop:'2%'}}>
                            <div style={{display:'inline-block',color:'red',margin:'2%'}}>
                                Rechercher un tuteur
                            </div>
                            <Avatar 
                                size="40"
                                round={true}
                                src={smile2}
                                name='logo'
                            />
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                           <div style={{width:'100%',fontSize:'100%'}}>
                               <input type='date' onChange={e=>setDate(e.target.value)} style={{
                                width:'100%',
                                height:'45px'
                               }}/>
                            </div>
                        </GridItem>
                         <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
                                <select name="pets" id="pet-select">
                                    <option value="">Plage horaire</option>
                                    <option value="dog">07h00 - 08h00</option>
                                    <option value="cat">08h00 - 09h00</option>
                                    <option value="hamster">09h00 - 10h00</option>
                                    <option value="parrot">10h00 - 11h00</option>
                                    <option value="spider">11h00 - 12h00</option>
                                    <option value="goldfish">12h00 - 13h00</option>
                                    <option value="goldfish">13h00 - 14h00</option>
                                    <option value="goldfish">14h00 - 15h00</option>
                                    <option value="goldfish">15h00 - 16h00</option>
                                    <option value="goldfish">16h00 - 17h00</option>
                                    <option value="goldfish">17h00 - 18h00</option>
                                </select>
                            </div>
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>

                             <div style={{border:'2px solid #0069D9', width:'110%'}}>
                                 <ReactSearchBox
                                    placeholder="Nom du tuteur"
                                    value="Doe"
                                    data={data}
                                    callback={(record) => console.log(record)}
                                  />
                            </div>

                           
                        </GridItem>
                        <GridItem xs={2} sm={2} md={2} style={{marginTop:'2%'}}>
                             <div style={{fontSize:'100%'}}>
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

                    {currentPosts.map((value,index) => {
                      return(
                          <GridContainer key={index}>
                             <GridItem xs={12} sm={12} md={12}>
                              <div style={{
                              
                              backgroundColor: '#4b9960',
                              borderRadius: '15px',
                              borderBottom: '3px solid #9aa7b2',
                              borderRight:  '3px solid #9aa7b2',
                              height: '90px',
                              marginTop:'2%',
                              width: '100%',
                              cursor: 'pointer'

                              }}>
                              <GridContainer>
                                <GridItem xs={4} sm={4} md={4} style={{textAlign:'center'}}>
                                <div style={{margin:'5%'}}>
                                  <Avatar 
                                        size="50"
                                        round={true}
                                        src={value.tutorPicture}
                                        name='logo'
                                    />

                                  </div>
                                </GridItem>
                                <GridItem xs={4} sm={4} md={4} style={{textAlign:'center'}}>
                                  <div style={{margin:'5%'}}>
                                    <div style={{color:'white',fontSize:'100%'}}>{value.id}-Nom: {value.tutorName}</div>
                                    <div style={{color:'white',fontSize:'100%'}}>Spécialité: {value.tutorSpeciality}</div>
                                  </div>
                                </GridItem>
                                <GridItem xs={4} sm={4} md={4} style={{textAlign:'center'}}>
                                 
                                  <div style={{margin:'5%'}}>
                                        <img src={choisir} width='90%'/>
                                  </div>
                                  
                                </GridItem>
                              </GridContainer>

                              </div>
                            </GridItem>
                          </GridContainer>
                        )
                    })}
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
export default ChooseTutorContent;



