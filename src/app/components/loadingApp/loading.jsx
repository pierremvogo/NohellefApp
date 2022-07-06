import Loader from 'react-loader-spinner';


const LoadingApp = ({isShow}) => {
	return(
      <div className="modal-content" id='cont'
        style={{
            width: "100%",
            height: "10000%",
            display: isShow,
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
                    position: "fixed",
                    top: "35%",
                    left: "44%"
                }}
                >
               
                    <Loader type="ThreeDots" color="#2BAD60" height="100" width="70" />
                
            </div>
          
      </div>
    
  )
		
}
export default LoadingApp;