import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Avatar   from 'react-avatar';
import Button from '../../../../app/components/buttons/button';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Header from "../../../../app/components/header/header.jsx";
import { Dropdown } from 'react-bootstrap';
import logoImage from '../../../../assets/images/im10.png';
import smile from '../../../../assets/images/main/smile.png';
import ds from '../../../../assets/images/main/d2.png';
import d1 from '../../../../assets/images/dashboard/d1.png';
import d2 from '../../../../assets/images/dashboard/d2.png';
import d3 from '../../../../assets/images/dashboard/d3.png';
import d4 from '../../../../assets/images/dashboard/conf1.png';
import d5 from '../../../../assets/images/dashboard/d5.png';
import d6 from '../../../../assets/images/dashboard/d6.png';
import d7 from '../../../../assets/images/dashboard/d7.png';
import d8 from '../../../../assets/images/dashboard/d8.png';
import tu1 from '../../../../assets/images/dashboard/tu1.png';
import tut1 from '../../../../assets/images/dashboard/tut1.png';
import tut2 from '../../../../assets/images/dashboard/tut2.png';

import im5 from '../../../../assets/images/im5.png';
import ReactPaginate from 'react-paginate';
import GridItem from "../../../../app/components/Grid/GridItem.js";
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Card from "../../../../app/components/Card/Card.js";
import CardHeader from "../../../../app/components/Card/CardHeader.js";
import CardBody from "../../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../../app/components/Card/CardFooter.js";
import { FaRegSnowflake } from "react-icons";
import ReactSearchBox from "react-search-box";
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import dic from '../../../../assets/images/admin/dic.png';
import acc from '../../../../assets/images/admin/acc.png';
import CourseContent from '../../components/courseContent.jsx';
import ChooseTutorContent from '../../components/chooseTutorContent.jsx';
import ConferenceContent from '../../components/conferenceContent.jsx';
import ContactHelpContent from '../../components/contactHelpContent.jsx';
import HistoryContent from '../../components/historyContent.jsx';
import PaymentContent from '../../components/paymentContent.jsx';
import PaymentResourceContent from '../../components/paymentResourceContent.jsx';
import AccountContent from '../../components/accountContent.jsx';

//5271ff 
//ffce52 
const DashboardStudent = () => {

    const [isAccountContent, setIsAccountContent] = useState(false);
    const [isChooseTutor, setIsChooseTutorContent] = useState(false);
    const [isConferenceContent, setIsConferenceContent] = useState(false);
    const [isContactHelpContent, setIsContactHelpContent] = useState(false);
    const [isCourseContent, setIsCourseContent] = useState(true);
    const [isHistoryContent, setIsHistoryContent] = useState(false);
    const [isPaymentContent, setIsPaymentContent] = useState(false);
    const [isPaymentResourceContent, setIsPaymentResourceContent] = useState(false);
    const [showModal,setShowModal] = useState(false);

    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')
    }
   

    useEffect(()=>{
        var element1 = document.getElementById("myDiv1");
        var element2 = document.getElementById("dash1");
        element2.style.borderRadius = "3px 3px 3px 3px";
        element2.style.width = "100%";
        element2.style.border = "2px solid #DD1B16";
        element1.style.backgroundColor = "#DD1B16";
        let tab1 = [
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')
            ];
            for(var i of tab1){
                i.style.backgroundColor = ""
            }
        let tab2 = [
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
            ]
            for(var i of tab2){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }

    },[])



    const onChange = () =>{
        console.log("has change")

    }
    let items = [
    {
     
      title:"Algèbre linéaire",
     
    },
    {
    
      title:"Comment résoudre une équation du second degré?",
      
    },
    {
      
      title:"Algèbre linéaire",
     
    },
   
  ];

    let data = [
    {
      key: "math",
      value: "Mathematiques",
    },
    {
      key: "info",
      value: "Informatique",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];


    function changeStyle(id){
        let element = document.getElementById(id);
        if(id=="myDiv1"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(true,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false))
            let tab = [
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')
            ];
            for(var i of tab){
                i.style.backgroundColor = ""
            }
            
        }
        else if(id=="myDiv2"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(true),
                    setIsContactHelpContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv3"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(true))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv4"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(true),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false))
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv5"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(true),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false))
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv6"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(true),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false))
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv7"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(true),
                    setIsHistoryContent(false),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv8')
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv8"){
            element.style.backgroundColor = "#dd1b16";
            setIsCourseContent(false,
                    setIsAccountContent(false),
                    setIsHistoryContent(true),
                    setIsPaymentContent(false),
                    setIsConferenceContent(false),
                    setIsPaymentResourceContent(false),
                    setIsChooseTutorContent(false),
                    setIsContactHelpContent(false))
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7')

            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        
            
          
    }

    function changeStyle1(id) {
        let element = document.getElementById(id);
        if(id=="dash1"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            setShowModal(true);
            let tab = [
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash2"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash3"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash4'),
                document.getElementById('dash5')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash4"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash5')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }
        else if(id=="dash5"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.width = "100%";
            element.style.border = "2px solid #DD1B16";
            let tab = [
                document.getElementById('dash1'),
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4')
            ]
            for(var i of tab){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        }

    }
        return(
            <div style={{overflow:'hidden'}}>
           
            <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                    <ProSidebar style={{width:'100%'}}>
                      <SidebarContent style={{backgroundColor:'#eeeeee', padding:'5%'}}>
                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div className="side-header">
                                <Avatar 
                                        size="100"
                                        round={true}
                                        src={logoImage}
                                        name='logo'
                                    />

                              </div>

                            </GridItem>

                      </GridContainer>


                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div className="side-content siden1" id="myDiv1" onClick={()=>changeStyle('myDiv1')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="45"
                                        round={false}
                                        src={tu1}
                                        name='logo'
                                    />
                                </div>
                               <span className="text">Consulter Votre Agenda</span>

                              </div>

                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div className="side-content" id="myDiv2" onClick={()=>changeStyle('myDiv2')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="45"
                                        round={false}
                                        src={tut1}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Les travaux des apprenants</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv3" onClick={()=>changeStyle('myDiv3')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="45"
                                        round={false}
                                        src={d3}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Contacter de l'aide</span>
                              </div>
                            </GridItem>
                                    
                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv4" onClick={()=>changeStyle('myDiv4')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="45"
                                        round={false}
                                        src={d4}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Web Conference</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv5" onClick={()=>changeStyle('myDiv5')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="45"
                                        round={false}
                                        src={tut2}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Vos apprenants</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div  id="myDiv6" onClick={()=>changeStyle('myDiv6')}>
                                
                               
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div id="myDiv7" onClick={()=>changeStyle('myDiv7')}>
                                
                               
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <div id="myDiv8" onClick={()=>changeStyle('myDiv8')}>
                                
                               
                              </div>
                            </GridItem>

                      </GridContainer>
                        
                      </SidebarContent>
                      <SidebarFooter style={{backgroundColor:'#eeeeee'}}>
                      </SidebarFooter>
                </ProSidebar>;
                </GridItem>


                <GridItem xs={12} sm={12} md={9} style={{marginTop:'2%'}}>

                     <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                            <div id="dash1" className='dash-navitem dashn1' onClick={()=>changeStyle1('dash1')}>Dashboard</div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                             <div id="dash2" className='dash-navitem' onClick={()=>changeStyle1('dash2')}>Qui sommes-nous?</div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                             <div id="dash3" className='dash-navitem' onClick={()=>changeStyle1('dash3')}>Nos offres</div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                             <div id="dash4" className='dash-navitem' onClick={()=>changeStyle1('dash4')}>Nos classes</div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                             <div id="dash5" className='dash-navitem' onClick={()=>changeStyle1('dash5')}>Nos Enseignants</div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                             <div style={{position:'relative',top:'-15px',cursor:'pointer'}}>    
                                    

                                  <div className="action">
                                                <div className='profile' onClick={(e)=>menuToggle(e)}>
                                                    <img src={im5} width='30%'/> 
                                                </div>
                                                <div className="menu">
                                                    <div style={{marginBottom:'5%'}}><img src={acc} width='15%'/><u>Mon compte</u></div>
                                                    <div><img src={dic} width='15%'/><u>Se déconnecter</u></div>
                                                </div>
                                </div>                                               
                             </div>
                        </GridItem>
                       
                    </GridContainer>

                          {isCourseContent?<CourseContent />:''}
                          {isAccountContent?<AccountContent />:''}
                          {isConferenceContent?<ConferenceContent />:''}
                          {isContactHelpContent?<ContactHelpContent />:''}
                          {isHistoryContent?<HistoryContent />:''}
                          {isPaymentContent?<PaymentContent />:''}
                          {isChooseTutor?<ChooseTutorContent />:''}
                          {isPaymentResourceContent?<PaymentResourceContent />:''}


                </GridItem>


            </GridContainer>
                
            </div>
    
        )
}
export default DashboardStudent;