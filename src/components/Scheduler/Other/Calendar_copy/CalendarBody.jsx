import React from "react";
import style from "./Calendar.module.scss"

import Cell from "./Cell";

export default function CalendarBody(props) {
	
	// const months = {
	// 	Jan: 1,
	// 	Feb: 2,
	// 	Mar: 3,
	// 	Apr: 4,
	// 	May: 5,
	// 	Jun: 6,
	// 	Jul: 7,
	// 	Aug: 8,
	// 	Sep: 9,
	// 	Oct: 10,
	// 	Nov: 11,
	// 	Dec: 12,
	// }
	const getDayOn = (day) => {
		props.getDayOn(day)
	}

	const  GetDay = (props, year) => {
		// console.clear()
	
		const maxCells = 42
	
		let monthsCell = []
		var dayArray = []
	
		for (let monthsNum = 1 ; monthsNum <= 12; monthsNum++) {
			// console.log(' monthsNum: ',  monthsNum );

			let cell = []
			
			var day = new Date(year + "-" + monthsNum + "-01").getDay() 
	
			day = (day===0) ? 7 : day // день недели с которого начинается месяц
	
			// console.log({day})
	
			if (day > 1) {
				let date = new Date(2023, monthsNum - 1, 0).getDate() // количество дней прошлого месяца
	
				// console.log(monthsNum - 1)
				let prevMonthsDayStart = date - day + 2
				// console.log({prevMonthsDayStart})
	
				for (let nullCell = 1; nullCell <= day - 1; nullCell++) {
					cell.push(`${prevMonthsDayStart++}`)
				}
				// console.log(cell)
			}
			
			for (let i = 1; i <= new Date(2023, monthsNum, 0).getDate(); i++) {
				// console.log(new Date(2023, monthsNum - 1, i).getDate())
				cell.push(new Date(2023, monthsNum - 1, i).getDate())
			}
	
			// console.log(cell.length) // январь 2023, выводит 37 заполнено
	
			let length = cell.length
	
			// console.log("length " +  (maxCells - cell.length))
	
			// если писать cell.length, а не создать length = cell.length, то цикл не все ячейки заполняет
			for (let nextMonthsDayStart = 1; nextMonthsDayStart <= maxCells - length; nextMonthsDayStart++) {
				cell.push(`${nextMonthsDayStart}`)
				// console.log({nextMonthsDayStart})
			}
	
			monthsCell.push(cell)
			
			dayArray.push(day)
		}
		props.addMonthsLength(monthsCell.length)
		// console.table(monthsCell)

		var boolMonths = false

		let nowMonth = new Date().getMonth()  

		// const [addNotes, setAddNotes] = React.useState(false);
		
		return monthsCell.map((item, index) => (
			<div onClick={e => props.getMonthOn(Number(index + 1))} className={style.monthsCell} key={index}>
				<>
				{/* {console.log({index})} */}
				{index === nowMonth ? boolMonths = true : boolMonths = false}
				{item.map((item, index) => (
					<Cell
						notString={typeof item !== 'string' && true}
						item={item}
						index={index}
						key={index}
						onClick={false}
						monthsOn={boolMonths}
						getDayOn={day => getDayOn(day)}
						addNotes={notes => props.setAddNotes(notes)}
						addNotesLength={props.addNotesLength}
						addOnClick={props.addOnClick} 
					/>
				))}
				</>
			</div>
		))
		
	}

    return (
        <div className={style.calendarBody}>
            <div className={style.cellsHead}>
                <div>Пн</div>
                <div>Вт</div>
                <div>Ср</div>
                <div>Чт</div>
                <div>Пт</div>
                <div>Сб</div>
                <div>Вс</div>
            </div>
			<div className={style.cellsBody}>
				<div style={{transform: `translateX(-${props.addWidthTranslate}px)`}} className={style.cellsTrack}>
					{GetDay(props, 2023)}
				</div>
			</div>
        </div>
    );
}
