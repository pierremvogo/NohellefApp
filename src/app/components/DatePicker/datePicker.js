import {React,useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({onchildHandleDate}) => {
	const [startDate, setStartDate] = useState(new Date());

	const handleChangeDate = (date) => {
		setStartDate(date);
		onchildHandleDate(formatDate(startDate));
	}

	function formatDate(date) {
	    var month = '' + (date.getMonth() + 1),
	        day = '' + date.getDate(),
	        year = date.getFullYear();

	    if (month.length < 2) 
	        month = '0' + month;
	    if (day.length < 2) 
	        day = '0' + day;

	    return [year, month, day].join('-');
	}

	return (
		<DatePicker
			selected={startDate} 
			onChange={(date) => handleChangeDate(date)} 
		/>
		)
}
export default CustomDatePicker;