import React from "react"
import style from "./Calendar.module.scss"

export default function CalendarHead (props) {

	const months = [
		{name: "Январь"},
		{name: "Февраль"},
		{name: "Март"},
		{name: "Апрель"},
		{name: "Май"},
		{name: "Июнь"},
		{name: "Июль"},
		{name: "Август"},
		{name: "Сентябрь"},
		{name: "Октябрь",},
		{name: "Ноябрь",},
		{name: "Декабрь"},
	]

	
	const trackWidth = (40 * 7)
	const [position, setPosition] = React.useState((new Date().getMonth()) * 280);
	const [selectDate, setSelectDate] = React.useState( new Date().getMonth() );

	let nowDate = new Date().getMonth()
	
	props.addClick(position)
	
    return (
    	<div className={style.calendarHead}>

			<div className={style.button}>
				<button 
					disabled={position === 0 ? true : false} 
					onClick={() => {
						setPosition(pos => pos - trackWidth); 
						setSelectDate(months => months - 1)
					} 
				}>
					{"<"}
				</button>
			
					<div className={style.dateOutput}>
						<select>
							{months
							.filter((item, index) => index === selectDate)
							.map((item, index) => (
								<option hidden selected value={index}>{item.name}</option>
							))}
							{months.map((item, index) => (
								<option style={{color: index === nowDate && "red"}} value={index}>{item.name}</option>
							))}
						</select>
						<div>
							2023
						</div>
					</div>

				<button 
					disabled={position > trackWidth * 10 ? true : false} 
					onClick={() => {
						setPosition(pos => pos + trackWidth); 
						setSelectDate(months => months + 1)
					} 
				}>
					{">"}
				</button>
			</div>
    	</div>


    )
};

