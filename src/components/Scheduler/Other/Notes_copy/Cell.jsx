import React from "react"
import style from "./Notes.module.scss"
import { AiOutlineDelete } from "react-icons/ai";

export default function Cell (props) {


	const formatDate = (dd, mm, yy) => {
		if([...dd].length === 1)  dd = `0${dd}`
		if([...mm].length === 1)  mm = `0${mm}`
		let res = dd + "-" + mm + "-" + yy
		console.log('res: ', res);
		return res
	}
	// console.log('props.item.date: ', props.item.date);

	return (
		<div style={{background: props.index >= 7 ? "rgb(255, 112, 112)" : "rgb(255, 250, 154)"}} className={style.notes}>
			{props.index >= 7 && <span>У вас слишком много заметок</span>}
			<div className={style.heading}>
				<h3>{props.item.title}</h3>
				<p className={style.date}>{formatDate(props.item.dd, props.item.mm, props.item.yyyy)}</p>
			</div>
			<p>{props.item.text}</p>
			{/* img */}
			<AiOutlineDelete 
				onClick={() => {
					props.delete(props.index)
				}} 
				style={{width:"25px", position: "absolute", right:"20px", top:"20px"}}/>
		</div>
	)
};

