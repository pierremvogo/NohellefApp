import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = [];

	for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			
			<ul className="pagination">
				{pageNumbers.map((number,index)=>{
					return(
						<li key={number} className='page-item' style={{
							margin:'1%',
							cursor:'pointer',
							marginTop:'1%',
							fontSize:'1.2vw',
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