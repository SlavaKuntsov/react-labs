import React from "react";
import style from "./Notes.module.scss"

export default function Notes(props) {
	
	return(
		<div className={style.notesContainer}>
			<h2>Ваши заметки</h2>

			<div className="notesTrack">

			</div>

			<div className="addNotes">

			</div>
		</div>
	)
}
