import React from "react";
import style from "./Notes.module.scss"



export default function AddNotes(props) {

	const [buttonClick, setButtonClick] = React.useState(false)

	// setButtonClick(props.addClick)

	return(
		<div onClick={() => setButtonClick(true)} className={style.addNotes}>
				<div className={style.textNotes}>
					<div className={style.buttonNotes}>
						{!buttonClick ? <img width={25} src="/img/add-outline.svg" alt="" /> : <div className={style.circle}></div>}
					</div>
					{!buttonClick ? 
					<div className={style.black}>
						<input type="text" placeholder="Добавить заметку"/>
					</div>
					:
					<div className={style.transparent}>
						<input type="text" placeholder="Добавить заметку"/>
					</div>}
				</div>

				{buttonClick && <input type="date" />}
			</div>
	)
}