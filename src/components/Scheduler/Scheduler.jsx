import React from "react"
import style from "./Scheduler.module.scss"

import Calendar from "./Other/Calendar_copy/Calendar";
import Notes from "./Other/Notes_copy/Notes";

export default function Scheduler () {

	const [addNotes, setAddNotes] = React.useState(false);
	const [notesLength, setNotesLength] = React.useState(0);
	// console.log('notesLength: ', notesLength);

	const [months, setMonths] = React.useState(0);
	// console.log('months: ', months);
	const [day, setDay] = React.useState(0);
	// console.log('day: ', day);

	// console.log({addNotes})

	return (
		<div className={style.scheduler}>
			<Calendar 
				getDay={day => setDay(day)} 
				getMonthOn={month => setMonths(month)}
				addOnClick={addNotes} 
				getOnClick={bool => setAddNotes(bool)}
				addNotesLength={notesLength}
			/>

			<Notes 
				getNotesLength={length => setNotesLength(length)} 
				add={addNotes} 
				addDelete={bool => setAddNotes(bool)}
				addDay={day} 
				addMonths={months} 
				getAdd={bool => setAddNotes(bool)}
			/>
		</div>
	)
};

