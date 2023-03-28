import React from "react";
import style from "./Calendar.module.scss"

import Cell from "./Cell";

export default function CalendarBody(props) {

	const getDayOn = (day) => {
		props.addDayOn(day)
	}

	
	const  GetDay = (props, year) => {

		const maxCells = 42

		let monthsCell = []
		let dayArray = []


		for (let monthsNum = 1 ; monthsNum <= 12; monthsNum++) {
	
			let cell = []
			
			let day = new Date(year + "-" + monthsNum + "-01").getDay() 
	
			day = (day===0) ? 7 : day // день недели с которого начинается месяц
	
			// console.log({day})
	
			if (day > 1) {
				let date = new Date(year, monthsNum - 1, 0).getDate() // количество дней прошлого месяца
	
				// console.log({date})
				let prevMonthsDayStart = date - day + 2
				// console.log({prevMonthsDayStart})
				
// дни пред месяца
				for (let nullCell = 1; nullCell <= day - 1; nullCell++) {
					cell.push(`${prevMonthsDayStart++}`)
				}
				// console.log(cell)
			}
			
// дни месяца
			for (let i = 1; i <= new Date(year, monthsNum, 0).getDate(); i++) {
				cell.push(i)
			}
	
			// console.log(cell.length) // январь 2023, выводит 37 заполнено
	
			let length = cell.length
	
			// console.log("length " +  (maxCells - cell.length))
			

// дни след месяца
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
		
		return monthsCell.map((item, index) => (
			<div className={style.monthsCell} value={index} key={index}>
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
						selectYear={props.addYear}
						getDayOn={day => getDayOn(day)}
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
					{GetDay(props, props.addYear)}
				</div>
			</div>
        </div>
    );
}
