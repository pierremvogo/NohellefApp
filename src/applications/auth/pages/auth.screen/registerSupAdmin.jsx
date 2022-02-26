import React, { useEffect, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../../../app/components/buttons/button';
import Card from "../../../../app/components/Card/Card.js";
import CardHeader from "../../../../app/components/Card/CardHeader.js";
import CardBody from "../../../../app/components/Card/CardBody.js";
import CardAvatar from "../../../../app/components/Card/CardAvatar.js";
import CardFooter from "../../../../app/components/Card/CardFooter.js";
import GridItem from "../../../../app/components/Grid/GridItem.js";
import smileauth from '../../../../assets/images/dashboard/smileauth.png';
import logoImage from '../../../../assets/images/im10.png';
import mpay from '../../../../assets/images/dashboard/mpay.png';
import divid from '../../../../assets/images/dashboard/divid.png';
import GridContainer from "../../../../app/components/Grid/GridContainer.js";
import Footer from "../../../../app/components/footer/footer.jsx";
import ins2 from '../../../../assets/images/home/ins2.png';
import Avatar   from 'react-avatar';
import AddSupAdmin from './addSupAdmin.jsx';

const RegisterSupAdmin = () => {
    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [registerTutorForm, setRegisterTutorForm] = useState(
                        {
                            name: "", 
                            surname: "", 
                            email: "",
                            phone: "",
                            macAddress: ""
                        }   );
    const [errorMessage, setErrorMessage] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [resetPasswordForm,setResetPasswordForm] = useState({email: ""});
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const history = useHistory()
    const dispatch= useDispatch()

  const ModalAddSupAdmin  = () => {
    return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: 'flex',
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
                <div style={{display:'inline-block', margin:'0% 30% 0% 30%', fontSize:'100%',width:'35%'}}>
                    <AddSupAdmin />
                </div>
               
            </div>
          
      </div>
    )
  };
    return(

           <ModalAddSupAdmin />
        )
}

export default RegisterSupAdmin;
