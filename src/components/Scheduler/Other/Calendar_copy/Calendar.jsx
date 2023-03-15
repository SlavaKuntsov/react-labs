import React from "react";
import style from "./Calendar.module.scss"
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default function Calendar(props){

	const [widthTranslate, setWidthTranslate] = React.useState(0);
	const [monthsLength, setMonthsLength] = React.useState(0);

	const [dayOn, setDayOn] = React.useState([]);
	// console.log(dayOn.join(" "))

 	return (
		<div className={style.all}>
			
			<div className={style.calendar}>
				<CalendarHead addLength={monthsLength} addClick={(width) => setWidthTranslate(width)}/>

				<CalendarBody 
					setAddNotes={notes => {
						props.getOnClick(notes); 
						console.log(notes)}
					} 
					getDayOn={day => {
						setDayOn([...dayOn, day])
						props.getDay(day)
					}}
					addMonthsLength={length => setMonthsLength(length)} 
					addWidthTranslate={widthTranslate}
					getMonthOn={month => props.getMonthOn(month)}
					addNotesLength={props.addNotesLength}
					addOnClick={props.addOnClick} 
				/>
			</div>

		</div>
 	);
}