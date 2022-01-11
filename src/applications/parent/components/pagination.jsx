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
						<li key={number} className='page-item' style={{
							margin:'1%',
							cursor:'pointer',
							marginTop:'1%',
							fontSize:'100%',
							border:'1px solid #5271ff',
							}}>
							<a onClick={()=>paginate(number)} className="page-link">
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