import React,{useEffect} from 'react';

const ShareSessionId = ({
						TutorSessionId,
						ParentSessionId,
						AdminSessionId,
						SupAdminSessionId,
						StudentSessionId}) => {
	useEffect(()=>{
		console.log("AdminSessionId",AdminSessionId);
	},[])
	return(
			<div></div>
		)

}
export default ShareSessionId;