import React from "react";
import style from "./Calendar.module.scss"
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default function Calendar(){
  

	const [widthTranslate, setWidthTranslate] = React.useState(0);

 	return (
		<div className={style.calendar}>
			<CalendarHead addClick={(width) => setWidthTranslate(width)}/>

			<CalendarBody addWidthTranslate={widthTranslate}/>
		</div>
 	);
}