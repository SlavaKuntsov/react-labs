import React from "react";
import style from "./Calendar.module.scss"

function getDay (year) {
	// console.clear()

	const maxCells = 42

	let monthsCell = []
	var dayArray = []

	for (let monthsNum = 1 ; monthsNum <= 12; monthsNum++) {

		let cell = []
		
		var day = new Date(year + "-" + monthsNum + "-01").getDay() 

		day = (day===0) ? 7 : day // день недели с которого начинается месяц

		// console.log({day})


		if (day > 1) {
			let date = new Date(2023, monthsNum - 1, 0).getDate() // количество дней прошлого месяца

			// console.log({date})
			let prevMonthsDayStart = date - day + 2
			// console.log({prevMonthsDayStart})

			for (let nullCell = 1; nullCell <= day - 1; nullCell++) {
				cell.push(`${prevMonthsDayStart++}`)
			}
			// console.log(cell)
		}
		
		for (let i = 1; i <= new Date(2023, monthsNum, 0).getDate(); i++) {
			cell.push(i)
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
	// console.table(monthsCell)


	return monthsCell.map((item, index) => (
		<div className={style.monthsCell} key={index}>
			{item.map((item, index) => (
				<div 
				style={{
					color: typeof item !== "string" ? "black" : "gray",
					fontWeight: typeof item !== "string" ? "500" : "300"
				}} 
				key={index}
				>
					{item}
				</div>
			))}
		</div>
	))

}

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

    return (
        <div className={style.calendarBody}>
            <div className={style.cellsHead}>
                <h3>Пн</h3>
                <h3>Вт</h3>
                <h3>Ср</h3>
                <h3>Чт</h3>
                <h3>Пт</h3>
                <h3>Сб</h3>
                <h3>Вс</h3>
            </div>
			<div className={style.cellsBody}>
				<div style={{transform: `translateX(-${props.addWidthTranslate}px)`}} className={style.cellsTrack}>
					{getDay(2023)}
				</div>
			</div>
        </div>
    );
}
