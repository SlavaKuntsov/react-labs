import React from "react";
import style from "./Calendar.module.scss"
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";
// import Output from "./Output";

export default function Calendar(){

	const [widthTranslate, setWidthTranslate] = React.useState(0);
	const [monthsLength, setMonthsLength] = React.useState(0);

	const [dayOn, setDayOn] = React.useState([]);
	console.log(dayOn.join(" "))

 	return (
		<div className={style.all}>
			
			{/* <Output /> */}

			<div className={style.calendar}>
				<CalendarHead addLength={monthsLength} addClick={(width) => setWidthTranslate(width)}/>

				<CalendarBody getDayOn={day => setDayOn([...dayOn, day])} addMonthsLength={length => setMonthsLength(length)} addWidthTranslate={widthTranslate}/>
			</div>

			{/* <div>{dayOn.join(" ")}</div> */}
		</div>
 	);
}