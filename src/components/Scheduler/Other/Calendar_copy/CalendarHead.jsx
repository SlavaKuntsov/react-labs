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

	
	const trackWidth = 40 * 7 // 280

	const [position, setPosition] = React.useState((new Date().getMonth()) * 280);
	const [selectDate, setSelectDate] = React.useState( new Date().getMonth() );

	let nowDate = new Date().getMonth()

	props.addClick(position)

	// console.log({selectDate})


	const selectMonths = (id = 3) => {
		console.log({id})
		return months.filter(item => {
			return item.name === id
		})
	}
	
    return (
    	<div className={style.calendarHead}>

			<div className={style.button}>
				<button 
					style={{color: position === 0 ? "gray" : "rgb(78, 135, 251)"}}
					disabled={position === 0 ? true : false} 
					onClick={() => {
						setPosition(pos => pos - trackWidth); 
						setSelectDate(months => months - 1)
					} 
				}>
					{"<"}
				</button>
			
					<div className={style.dateOutput}>
						<select 
							onChange={e => {
								setPosition(pos => (pos * 0) + (e.target.value * trackWidth));
								setSelectDate(months => (months * 0) + Number(e.target.value)) ;
								console.log( Number(e.target.value))
							}}
						>
							{/* {months
							.filter((item, index) => index === selectDate )
							.map((item, index) => (
								<option hidden selected key={index}>{item.name}</option>
							))} */}
							{/* {console.log("select " + selectDate)} */}
							<option hidden defaultValue={new Date().getMonth()} key="">{months[selectDate].name}</option>

							{months.map((item, index) => (
								<option style={{color: index === nowDate && "red"}} value={index} key={index}>{item.name}</option>
							))}
						</select>
						<div>
							2023
						</div>
					</div>

				<button 
					style={{color: position === props.addLength * trackWidth - 280 ? "gray" : "rgb(78, 135, 251)"}}
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

