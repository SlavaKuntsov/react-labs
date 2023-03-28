import React from "react";
import style from "./Calendar.module.scss"
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";
// import Output from "./Output";

export default function Calendar(props){

	const [widthTranslate, setWidthTranslate] = React.useState(0);
	const [monthsLength, setMonthsLength] = React.useState(0);
	const [newYear, setNewYear] = React.useState(new Date().getFullYear());

	const [dayOn, setDayOn] = React.useState([]);
	console.log('dayOn: ', dayOn);

 	return (
		<div className={style.all}>
			
			<div className={style.calendar}>
				<CalendarHead 
					addLength={monthsLength} 
					addClick={(width) => setWidthTranslate(width)} 
					addYear={year => setNewYear(year)}
				/>

				<CalendarBody 
					addDayOn={day => setDayOn([...dayOn, day])} 
					addMonthsLength={length => setMonthsLength(length)} 
					addWidthTranslate={widthTranslate}
					addYear={newYear}
				/>
			</div>

		</div>
 	);
}