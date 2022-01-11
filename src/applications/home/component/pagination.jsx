import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = [];

	for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav style={{marginLeft:'35%'}}>
			
			<ul className="pagination">
				{pageNumbers.map((number,index)=>{
					return(
						<div key={number} className='page-item' style={{
							margin:'1%',
							cursor:'pointer',
							marginTop:'1%',
							fontSize:'100%',
							border:'3px solid #fff',
							width:'30px',
							height:'30px',
							borderRadius:'50%',
							padding:'0% 0% 0% 1%'
							}}>
							<div onClick={()=>paginate(number)}>
								{number}
							</div>
							
						</div>
						)
				})}
			</ul>
			
		</nav>
		)
}
export default Pagination;