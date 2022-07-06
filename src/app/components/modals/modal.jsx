import './modal.css';

const Modals = ({ 
          bodyContent, 
          modalClassName, 
          displayModal,
          onChildClick }) => {


      const closeModal = (e) => {
        onChildClick(e.target.name);
       }
    return (
      <div  id='cont'
        style={{
            width: "100%",
            height: "4000px",
            justifyContent: "center",
            display: displayModal,
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
            <div className={
                  modalClassName==="custom-register"? "custom-register": 
                  modalClassName==="custom-askregister"? "custom-askregister" :
                  modalClassName==="custom-login"? "custom-login" : '' } 
                  id='myContain'>
                <div style={{display:'inline-block', fontSize:'1.5vw'}}>
                   
                </div><span className='close' onClick={(e)=>closeModal(e)}>&times;</span>
                {bodyContent}
            </div>
          
      </div>
    )
    
};
export default Modals;