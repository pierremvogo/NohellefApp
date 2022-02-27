import React, {useContext, useState, useEffect } from 'react';

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
import d4 from '../../../../assets/images/dashboard/d4.png';
import d5 from '../../../../assets/images/dashboard/d5.png';
import d6 from '../../../../assets/images/dashboard/d6.png';
import d7 from '../../../../assets/images/dashboard/d7.png';
import d8 from '../../../../assets/images/dashboard/d8.png';

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

import AdminContent from '../../components/adminContent.jsx';
import AbonnementContent from '../../components/abonnementContent.jsx';
import AchatContent from '../../components/achatContent.jsx';
import ApprenantContent from '../../components/apprenantContent.jsx';
import TuteurContent from '../../components/tuteurContent.jsx';
import AchatC from '../../components/achatC.jsx';
import FormuleAbonnement from '../../components/formuleAbonnement.jsx';
import PublicityContent from '../../components/publicityContent.jsx';
import ad1 from '../../../../assets/images/admin/ad1.png';
import ad2 from '../../../../assets/images/admin/ad2.png';
import ad3 from '../../../../assets/images/admin/ad3.png';
import ad4 from '../../../../assets/images/admin/ad4.png';
import ad5 from '../../../../assets/images/admin/ad5.png';
import ad6 from '../../../../assets/images/admin/ad6.png';
import dic from '../../../../assets/images/admin/dic.png';
import acc from '../../../../assets/images/admin/acc.png';
import supadm1 from '../../../../assets/images/dashboard/supadm1.png';
import adm3 from '../../../../assets/images/dashboard/adm3.png';
import supadm2 from '../../../../assets/images/dashboard/tut2.png';
import supadm3 from '../../../../assets/images/dashboard/supadm3.png';
import supadm4 from '../../../../assets/images/dashboard/supadm4.png';
import './dashboard.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';
/*import io from 'socket.io-client';*/
import Chat from "../../../../app/components/chat/chat.jsx";
import badge from '../../../../assets/images/dashboard/badge.png';
import ScrollToBottom from "react-scroll-to-bottom";
/*import { SocketContext } from '../../../../SocketContext.js';
import ShareSessionId from "../../../../app/components/ShareSessionId/ShareSessionId.jsx";*/
//5271ff 
//ffce52 
const DashboardSupAdmin = () => {
    const [isAdminContent, setIsAdminContent] = useState(true);
    const [isAbonnementContent, setIsAbonnementContent] = useState(false);
    const [isAchatContent, setIsAchatContent] = useState(false);
    const [isApprenantContent, setIsApprenantContent] = useState(false);
    const [isTuteurContent, setIsTuteurContent] = useState(true);
    const [isPublicityContent, setIsPublicityContent] = useState(false);
    const [isAchatC, setIsAchatC] = useState(false);
    const [countBadge, setCountBadge] = useState(1);
    const [showBadge, setShowBadge] = useState(false);

    const [isFormule, setIsFormule] = useState(false);


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
                document.getElementById('myDiv8'),
            ];
            for(var i of tab1){
                i.style.backgroundColor = ""
            }
        let tab2 = [
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
            ]
            for(var i of tab2){
                i.style.borderRadius = ""
                i.style.width = ""
                i.style.border = ""
            }
        return function cleanup () {
            return;
        }
    },[])


function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')
    }

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
            setIsTuteurContent(false,
                    setIsAbonnementContent(false),
                    setIsAchatContent(false),
                    setIsAdminContent(true),
                    setIsApprenantContent(false),
                    setIsPublicityContent(false),
                     setIsAchatC(false),
                      setIsFormule(false),)
            let tab = [
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),


            ];
            for(var i of tab){
                i.style.backgroundColor = ""
            }
            
        }
        else if(id=="myDiv2"){
            element.style.backgroundColor = "#dd1b16";
            setIsTuteurContent(true,
                    setIsAbonnementContent(false),
                    setIsAchatContent(false),
                    setIsAdminContent(false),
                    setIsApprenantContent(false),
                    setIsPublicityContent(false),
                    setIsAchatC(false),
                    setIsFormule(false),)
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv3"){
            element.style.backgroundColor = "#dd1b16";
            setIsTuteurContent(false,
                    setIsAbonnementContent(false),
                    setIsAchatContent(false),
                    setIsAdminContent(false),
                    setIsApprenantContent(true),
                    setIsPublicityContent(false),
                    setIsAchatC(false),
                      setIsFormule(false),)
             let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv4"){
            element.style.backgroundColor = "#dd1b16";
            setIsTuteurContent(false,
                    setIsAbonnementContent(true),
                    setIsAchatContent(false),
                    setIsAdminContent(false),
                    setIsApprenantContent(false),
                    setIsPublicityContent(false),
                    setIsAchatC(false),
                      setIsFormule(false),)
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv5"){
            element.style.backgroundColor = "#dd1b16";
            setIsTuteurContent(false,
                    setIsAbonnementContent(false),
                    setIsAchatContent(false),
                    setIsAdminContent(false),
                    setIsApprenantContent(false),
                    setIsPublicityContent(true),
                    setIsAchatC(false),
                      setIsFormule(false),)
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }
        else if(id=="myDiv6"){
            element.style.backgroundColor = "#dd1b16";
            setIsTuteurContent(false,
                    setIsAbonnementContent(false),
                    setIsAchatContent(false),
                    setIsAdminContent(false),
                    setIsApprenantContent(false),
                    setIsPublicityContent(false),
                    setIsAchatC(false),
                      setIsFormule(true),)
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv7'),
                document.getElementById('myDiv8'),
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }else if(id=="myDiv7"){
            element.style.backgroundColor = "#dd1b16";
            setIsTuteurContent(false,
                    setIsAbonnementContent(false),
                    setIsAchatContent(false),
                    setIsAdminContent(false),
                    setIsApprenantContent(false),
                    setIsPublicityContent(false),
                    setIsAchatC(true),
                      setIsFormule(false),)
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv8'),
            ]
            for(var i of tab){
                i.style.backgroundColor = ""
            }
        }else if(id=="myDiv8"){
            element.style.backgroundColor = "#dd1b16";
            setIsTuteurContent(false,
                    setIsAbonnementContent(false),
                    setIsAchatContent(true),
                    setIsAdminContent(false),
                    setIsApprenantContent(false),
                    setIsPublicityContent(false),
                    setIsAchatC(false),
                      setIsFormule(false),)
            let tab = [
                document.getElementById('myDiv1'),
                document.getElementById('myDiv2'),
                document.getElementById('myDiv3'),
                document.getElementById('myDiv4'),
                document.getElementById('myDiv5'),
                document.getElementById('myDiv6'),
                document.getElementById('myDiv7'),
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
            let tab = [
                document.getElementById('dash2'),
                document.getElementById('dash3'),
                document.getElementById('dash4'),
                
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
                                        size="40"
                                        round={false}
                                        src={supadm1}
                                        name='logo'
                                    />
                                </div>
                               <span className="text">Administrateurs </span>

                              </div>

                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div className="side-content" id="myDiv2" onClick={()=>changeStyle('myDiv2')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={adm3}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Tuteurs</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv3" onClick={()=>changeStyle('myDiv3')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={supadm2}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Apprenants</span>
                              </div>
                            </GridItem>
                                    
                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv4" onClick={()=>changeStyle('myDiv4')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={supadm3}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Parents</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv5" onClick={()=>changeStyle('myDiv5')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={ad5}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Publicités</span>
                              </div>
                            </GridItem>

                      </GridContainer>
                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv6" onClick={()=>changeStyle('myDiv6')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={supadm4}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Formules d'abonnement</span>
                              </div>
                            </GridItem>

                      </GridContainer>

                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv7" onClick={()=>changeStyle('myDiv7')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={ad6}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Les achats</span>
                              </div>
                            </GridItem>

                      </GridContainer>
                      <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <div className="side-content" id="myDiv8" onClick={()=>changeStyle('myDiv8')}>
                                <div style={{padding:'3%',display:'inline-block'}}>
                                    <Avatar 
                                        size="40"
                                        round={false}
                                        src={d7}
                                        name='logo'
                                    />
                                </div>
                                <span className="text">Mon Compte</span>
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
                                        <Dropdown style={{top:'-15px'}}>
                                                    <Dropdown.Toggle
                                                    variant="secondary btn-sm"
                                                    style={{
                                                        width:'0%',

                                                        borderColor:'#fff',
                                                        backgroundColor:'#fff',
                                                        borderRadius:'20%'}}>
                                                    
                                                        <Avatar 
                                                            size="50"
                                                            round={true}
                                                            src={im5}
                                                            name='logo'
                                                        />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu style={{backgroundColor:'#F8D04E',borderRadius:'10%'}}>
                                                        <Dropdown.Item href="#" >
                                                            <div style={{marginBottom:'5%'}}>
                                                                    <img src={acc} width='15%'/>
                                                                    <u>Mon compte</u>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#">
                                                            <div>
                                                                <img src={dic} width='15%'/>
                                                                <u>Se déconnecter</u>
                                                            </div>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                        </GridItem>
                       
                    </GridContainer>

                          {isAdminContent?<AdminContent  />:''}
                          {isAbonnementContent?<AbonnementContent  />:''}
                          {isAchatContent?<AchatContent />:''}
                          {isApprenantContent?<ApprenantContent />:''}
                          {isTuteurContent?<TuteurContent />:''}
                          {isPublicityContent?<PublicityContent />:''}
                          {isAchatC?<AchatC />:''}
                          {isFormule?<FormuleAbonnement />:''}
                         


                </GridItem>


            </GridContainer>
                
            </div>
    
        )
}
export default DashboardSupAdmin;