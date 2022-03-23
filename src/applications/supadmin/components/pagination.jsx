import React, {useEffect} from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = [];

	for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
		pageNumbers.push(i);
	}
	useEffect(()=>{
		 var page1 = document.getElementById("page1");
		 if(page1){
		 	page1.style.backgroundColor = "#56EAFF";
		 }else{return;}
		 
		},[])
	function changeStyle(number){
		let pageElement = document.getElementById(`page${number}`);
		if(pageElement.style.backgroundColor = "#56EAFF"){
			console.log("Have a color");
		}else{
			console.log("dont have a color");
		}

	}
	const handleIdAndPaginate = (number) => {
		 paginate(number);
	}
	return (
		<nav>
			
			<ul className="pagination">
				{pageNumbers&&pageNumbers.map((number,index)=>{
					return(
						<li  key={number} className='page-item' style={{
							margin:'1%',
							cursor:'pointer',
							marginTop:'1%',
							fontSize:'1.2vw',
							border:'1px solid #5271ff',
							}}>
							<a id={`page${number}`} onClick={()=>handleIdAndPaginate(number)} className="page-link">
								{number}
							</a>
							
						</li>
						)
				})}
			</ul>
			
		</nav>
		)
}
export default Pagination;