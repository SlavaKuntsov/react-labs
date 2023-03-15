import React from "react";
import style from "./Calendar.module.scss";

export default function Cell (props) {

	const [clickCell, setClickCell] = React.useState(props.onClick);
	// const [doubleClick, setDoubleClick] = React.useState(false);
	const [count, setCount] = React.useState(0);

	let now = new Date().getDate()

	const getDayOn = (day) => {
		props.getDayOn(day)
	}

	const addNotes = () => {
		setCount(count + 1)
		// console.log('count: ', props.index + "	" + count);
		
		// if(count === 1 && props.notString) props.addNotes(true)

		// if(props.addNotesLength !== 0 && count >= 1) {
		// 	props.addNotes(true)
		// } 
		// if(count > 1 && props.addNotesLength === 0) {
		// 	setCount(0)
		// 	props.addNotes(false)
		// }
		// if(props.addOnClick === false && count > 1) setCount(0)
		// if(props.addOnClick) setCount(0)
	}
	
	// console.log('props.addOnClick: ', props.addOnClick);
	
	const getColor = () => {
		// if(props.addNotesLength !== 0 && count >= 1) {
		// 	return style2
		// } 
		// if(props.addOnClick === false && count > 1) return style0
		// // if(props.addNotesLength !== 0) {
		// // 	return style2
		// // } 
		
		// if(count === 2) return style2
		// if(count > 0) return style1
		// if(count === 0) return style0
		
	}

	const style0 = {
		color: props.notString ? "black" : "gray",
		fontWeight: props.notString ? "500" : "300",
		// border: clickCell ? "2px solid rgb(78, 135, 251)" : "2px solid transparent",
		border: (props.notString && props.item === now && props.monthsOn) && "2px solid rgb(78, 135, 251)",
	}
	const style1 = {
		color: props.notString ? "black" : "gray",
		fontWeight: props.notString ? "500" : "300",
		// border: clickCell ? "2px solid rgb(78, 135, 251)" : "2px solid transparent",
		background: clickCell && "rgb(115, 162, 254)",
		border: (props.notString && props.item === now && props.monthsOn) && "2px solid rgb(78, 135, 251)",
	}
	const style2 = {
		color: props.notString ? "black" : "gray",
		fontWeight: props.notString ? "500" : "300",
		// border: clickCell ? "2px solid rgb(78, 135, 251)" : "2px solid transparent",
		background: props.notString && "rgba(215, 93, 255, 0.91)",
		border: (props.notString && props.item === now && props.monthsOn) && "2px solid rgb(78, 135, 251)",
	}

	return (
		<div 
			className={style.cell}
			style={getColor()} 
			key={props.index}

			onClick={() => {
				props.notString && setClickCell(bool => !bool);
				getDayOn(props.item);
				addNotes()
				console.log(count)
			}}
		>
			{props.item}
		</div>
	)
};

