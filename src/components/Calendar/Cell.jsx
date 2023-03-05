import React from "react";
import style from "./Calendar.module.scss";

export default function Cell (props) {

	const [clickCell, setClickCell] = React.useState(props.onClick);

	let now = new Date().getDate()

	const getDayOn = (day) => {
		props.getDayOn(day)
	}

	return (
		<div 
			className={style.cell}
			style={{
				color: props.notString ? "black" : "gray",
				fontWeight: props.notString ? "500" : "300",
				// border: clickCell ? "2px solid rgb(78, 135, 251)" : "2px solid transparent",
				background: clickCell && "rgb(115, 162, 254)",
				border: (props.notString && props.item === now && props.monthsOn) && "2px solid rgb(78, 135, 251)"
			}} 
			key={props.index}
			onClick={() => {
				props.notString && setClickCell(bool => !bool);
				getDayOn(props.item)
			}}
		>
			{props.item}
		</div>
	)
};

