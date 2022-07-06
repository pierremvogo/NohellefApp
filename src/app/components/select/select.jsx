import React from 'react';


const CustomSelect = ({options,...rest}) => {

	return(
			<div>
			  <select>
			  	{options.map((option,index)=>{
			  		<option value={option.value} key={index}>{option.label}</option>
			  	})}
			  </select>
			</div>
		)
}
export default CustomSelect;
