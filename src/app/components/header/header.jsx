import React, { useEffect,useState } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import Avatar   from 'react-avatar';
import {Redirect, useHistory} from 'react-router-dom'
//import { makeStyles } from "@material-ui/core/styles";
//import { Link, Redirect, useHistory } from 'react-router-dom';
import logoImage from '../../../assets/images/im10.png';
import hamburg from '../../../assets/header/hamburg.png';
import im5 from '../../../assets/images/im5.png';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Hidden from "@material-ui/core/Hidden";
import { Dropdown } from 'react-bootstrap';
import './header.styles.css';
import Modals from '../modals/modal';
import Button from '../buttons/button';





const Header = ({
                user,
                onChildClickConnexion,
                onChildClickRegister,
                isDashboard,
                isHome})  =>{
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(()=>{
       let phoneScreen = window.matchMedia("(max-width: 768px)");
       let tabletScreen = window.matchMedia("(max-width: 992px) and (min-width: 780px)");
       let laptopScreen = window.matchMedia("(max-width: 1200px) and (min-width: 992px)");
       let desktopScreen = window.matchMedia("(min-width: 1200px)");

       responsiveHeader("phone",phoneScreen);
       responsiveHeader("tablet",tabletScreen);
       responsiveHeader("laptop",laptopScreen);
       responsiveHeader("desktop",desktopScreen);
    },[])

    const responsiveHeader = (type,screen) => {
        switch(type){
            case 'phone':
                if(screen.matches){
                     setIsSmallScreen(true);
                }
                break;
            case 'tablet':
                if(screen.matches){
                    setIsSmallScreen(true);
                }
                break;
            case 'laptop':
                if(screen.matches){
                    setIsSmallScreen(false);
                }
                break;
            case 'desktop':
                if(screen.matches){
                    setIsSmallScreen(false);
                }
                break;
                default:
                    break;
        }
    }
   
    const clickHandlerConnexion=(isHome)=>{
            onChildClickConnexion(isHome);
    }
    const history = useHistory();

   const disconnectUser = () => {
    localStorage.removeItem("user");
    window.location.reload();
    return false;
   }

   const gotoDashboard = (e) => {
    if(user&&user.accessToken){
        history.push(user.redirect);
    }else{
        clickHandlerConnexion(e);
    }
   }

    const clickHandlerRegister=(e)=>{
            onChildClickRegister(e.target.name);
    }

    function changeStyle1(id) {
        let element = document.getElementById(id);
        if(id=="dash1"){
            element.style.borderRadius = "3px 3px 3px 3px";
            element.style.padding = "1px";
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
            element.style.padding = "1px";
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
            element.style.padding = "1px";
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
            element.style.padding = "1px";
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
        <div className="sticky-top static-top">
    

                        <GridContainer>
                       {!isSmallScreen? <GridItem xs={3} sm={3} md={3} style={{backgroundColor:'#FFFFFF',height:'10px'}}>
                        <div style={{fontSize: 2+'em'}} className="sidebar-brand d-flex align-items-center justify-content-center">    
                            
                            <div className="sidebar-brand-icon  mr-5" style={{
                                cursor:'pointer',
                                position:'fixed', 
                                margin:'12% 5% 0% 5%'}}>
                              
                              <Avatar 
                                    
                                    size="150"
                                    round={true}
                                    src={logoImage}
                                    name=''
                                /> 
                            </div>

                            <div className="sidebar-brand-icon"></div>        
                            <div className="sidebar-brand-text mx-3"><sup></sup></div>
                        </div>
                        </GridItem>:''}

                      {!isSmallScreen?<GridItem xs={9} sm={9} md={9} style={{backgroundColor:'#FFFFFF',height:'10px'}}>
                        <ul style={{fontFamily:'sans-serif'}}>
                        
                             
                                    <span id="dash1" className="nav-menu" onClick={()=>changeStyle1('dash1')}>Qui sommes nous?</span> 
                               
                               
                                    <span id="dash2" className="nav-menu" onClick={()=>changeStyle1('dash2')}>Nos classes</span> 
                             
                            
                                    <span id="dash3" className="nav-menu" onClick={()=>changeStyle1('dash3')}>Nos Enseignants</span>
                          
                            
                                    <span id="dash4" className="nav-menu" onClick={()=>changeStyle1('dash4')}>Nos offres</span>
                           

                            {!user?(<span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#8399FF',
                                width:'15%',
                                fontSize: '1vw',
                                padding:'2.5px'}} 
                                onClick={()=>clickHandlerConnexion('home')}>Connexion</span>):
                            (<span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#8399FF',
                                fontSize: '1vw',
                                width:'15%',
                                padding:'2.5px'}} 
                                onClick={()=>disconnectUser()}>Deconnexion</span>) 

                            }

                                
                             <span className="nav-menu" style={{
                                borderRadius:"5px 5px 5px 5px",
                                textAlign:'center',
                                backgroundColor:'#C84941',
                                fontSize: '1vw',
                                width:'15%',
                                padding:'2.5px'}} 
                                onClick={(e)=>clickHandlerRegister(e)}>Inscription</span> 
                            
                            <span style={{cursor:"pointer",marginLeft:"3%"}} onClick={(e)=>gotoDashboard(e)}>
                             <Avatar 
                                style={{marginTop:'2%'}}
                                size="40"
                                round={true}
                                src={im5}
                                name='Mon Compte'
                             /></span>

                        </ul>
                        </GridItem>:

                         <GridItem xs={12} sm={12} md={12} style={{backgroundColor:'#FFFFFF',height:'70px'}}>
                                        <Dropdown>
                                                    <Dropdown.Toggle
                                                    variant="warning btn-sm"
                                                    style={{
                                                        borderColor:'#fff',
                                                        backgroundColor:'#fff',
                                                        }}>
                                                    
                                                        <Avatar 
                                                            size="30"
                                                            round={false}
                                                            src={hamburg}
                                                            name='logo'
                                                        />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#" style={{backgroundColor:'#E9ECEF'}}>
                                                            <Avatar 
                                                                size="120"
                                                                round={true}
                                                                src={logoImage}
                                                                name=''
                                                            />
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                                  <span id="dash1" onClick={()=>changeStyle1('dash1')}>Qui sommes nous?</span> 
                                                         
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                   
                                                                  <span id="dash2"  onClick={()=>changeStyle1('dash2')}>Nos classes</span> 
                                                           
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                                 <span id="dash3" onClick={()=>changeStyle1('dash3')}>Nos Enseignants</span>
                                                    
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                                <span id="dash4" onClick={()=>changeStyle1('dash4')}>Nos offres</span>
                                                    
                                                        </Dropdown.Item>

                                                        <Dropdown.Item>
                                                                 {!user?(<div  style={{
                                                                    borderRadius:"5px 5px 5px 5px",
                                                                    textAlign:'center',
                                                                    backgroundColor:'#8399FF',
                                                                    width:'100%',
                                                                    fontSize: '100%',
                                                                    padding:'2.5px'
                                                                    }} 
                                                                    onClick={(e)=>clickHandlerConnexion(e)}>Connexion</div>):
                                                                (<div  style={{
                                                                    borderRadius:"5px 5px 5px 5px",
                                                                    textAlign:'center',
                                                                    backgroundColor:'#8399FF',
                                                                    fontSize: '100%',
                                                                    width:'100%',
                                                                    padding:'2.5px',
                                                                    }} 
                                                                    onClick={()=>disconnectUser()}>Deconnexion</div>) 

                                                                }
                                                    
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                                <div style={{
                                                                    borderRadius:"5px 5px 5px 5px",
                                                                    textAlign:'center',
                                                                    backgroundColor:'#C84941',
                                                                    fontSize: '100%',
                                                                    width:'100%',
                                                                    padding:'2.5px'}} 
                                                                    onClick={(e)=>clickHandlerRegister(e)}>Inscription</div>
                                                    
                                                        </Dropdown.Item>

                                                        <Dropdown.Item>
                                                               <span style={{cursor:"pointer",marginLeft:"3%"}} onClick={(e)=>gotoDashboard(e)}>
                                                                 <Avatar 
                                                                    style={{marginTop:'2%'}}
                                                                    size="40"
                                                                    round={true}
                                                                    src={im5}
                                                                    name='Mon Compte'
                                                                 /></span>
                                                    
                                                        </Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                        </GridItem>}
                
                        </GridContainer>
                     
       
                
        </div>





               
    )
}

const mapStateToProps=(state)=>{
  return{
      user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(Header);