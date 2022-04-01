import React, {useEffect,useState} from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = [];

	for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
		pageNumbers.push(i);
	}
	const [currentP, setCurrentP] = useState(0);
	useEffect(()=>{
		 
		},[])
	
	function changeStyle(number){
		let pageElement = document.getElementById(`page${number}`);
		if(pageElement.style.backgroundColor = "#56EAFF"){
			console.log("Have a color");
		}else{
			console.log("dont have a color");
		}

	}
	const previousPage = (i) => {
			console.log("My current page")
			console.log(currentP);
			console.log(pageNumbers.length);
			if(currentP === 1){
				paginate(pageNumbers.length);
			}else{
				paginate(i-1);
			}
			setCurrentP(i-1);
	}	
	const nextPage = (i) => {
		console.log("My current page")
			console.log(currentP);
			console.log(pageNumbers.length);
			if(currentP === pageNumbers.length){
				i = 1;
				paginate(i);
				setCurrentP(i);	
			}else{
				paginate(i+1);
			}
			setCurrentP(i+1);
	}


	const handleIdAndPaginate = (number) => {
		 setCurrentP(number);
		 paginate(number);
	}
	return (
		<nav>
			
			<ul className="pagination">
				{pageNumbers&&pageNumbers.map((number,index)=>{
					return(
						<>
						{number>=1 && number<11?
						<li  key={number} className='page-item' style={{
							margin:'1%',
							cursor:'pointer',
							marginTop:'1%',
							fontSize:'100%',
							border:'1px solid #5271ff',
							}}>
						
							  <a id={`page${number}`} onClick={()=>handleIdAndPaginate(number)} className="page-link">
								{number}
							  </a>
					
						</li>:number===11?

						<li  key={number} className='page-item' style={{
							margin:'1%',
							cursor:'pointer',
							marginTop:'1%',
							fontSize:'100%',
							border:'1px solid blue',
							backgroundColor:'#487ECB',
							borderRadius: '5px 5px 5px 5px',
							padding:'2px'
							}}>
							
						    	<span style={{fontSize:'20px',cursor:'pointer', marginRight:'2%'}}  onClick={()=>previousPage(currentP)}>Previous </span>
						    
						</li>:number===12?

						<li  key={number} className='page-item' style={{
							margin:'1%',
							cursor:'pointer',
							marginTop:'1%',
							fontSize:'100%',
							border:'1px solid blue',
							backgroundColor:'#487ECB',
							borderRadius: '5px 5px 5px 5px',
							padding:'2px'
							}}>
							
						    <span style={{fontSize:'20px',cursor:'pointer', marginRight:'2%'}}  onClick={()=>nextPage(currentP)}>Next</span>
						    
						</li>:""}
						</>
						)
				})}
			</ul>
			
		</nav>
		)
}
export default Pagination;