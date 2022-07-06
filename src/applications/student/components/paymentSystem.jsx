import React, {useState, useEffect} from 'react';
import PayPal from '../../../app/components/paypal/paypal.jsx';
import StripeContainer from '../../../app/components/stripe/stripeContainer.jsx';




const PaymentSystem = ({systemChoose, mount, onChildCloseModal}) => {

const [checkOut, setCheckOut] = useState(false);
const [showItem, setShowItem] = useState(false);

useEffect(()=>{
	console.log("my systemChoose");
	console.log(systemChoose);
	console.log(mount);
},[])

const closeModal = (e) => {
        onChildCloseModal(false);
    }


	return(
			<div className="container">
				{systemChoose === "paypal" && 

				<div className="row bg-white" style={{
					         margin:"30px auto",
					     	 height:"600px",
					     	 overflowY:"scroll"}}>
				<div className="col-12">
					<div className="row">
						<div className="col-12">
						 	<span style={{fontSize:'80px',color:"black", cursor:'pointer', margin:'2%', float:"right"}}  onClick={(e)=>closeModal(e)}>&times;</span> 
						</div>
					</div>
					<div className="row text-center">
						<div className="col-12">
						    {
						    	checkOut? (<PayPal mount={mount} />):(<button onClick={setCheckOut(true)}>CheckOut</button>)
							}
						</div>
					</div>
					
				</div>
			</div>
			}
				{systemChoose === "visa_mastercard" && 
				<div className="row bg-white" style={{margin:"30px auto"}}>
					<div className="col-12">
						<div className="row">
							<div className="col-12">
							 	<span style={{fontSize:'80px',color:"black", cursor:'pointer', margin:'2%', float:"right"}}  onClick={(e)=>closeModal(e)}>&times;</span> 
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								{showItem ? (
										<StripeContainer />
									) : (
										<>
											<h3>$5.00</h3>
											<button onClick={() => setShowItem(true)}>Purchase Ice-Cream</button>
										</>
									)
								}
							</div>
						</div>
						
					</div>
				</div>
			}
			</div>
		)
}

export default PaymentSystem;