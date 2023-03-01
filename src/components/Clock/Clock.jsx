import React from "react"
import style from "./Clock.module.scss"
import ClockOutput from "./ClockOutput"

function Clock() {

	const [timeFormat, setTimeFormat] = React.useState(false)
	const [value, setValue] = React.useState("3:00")

	console.log(value)

	const inputChange = (e) => {
		console.log(e.target.value)
		setValue(e.target.value)
	}

	return(
		<div className={style.clock}>
			<ClockOutput format={timeFormat} timezone={value}/>
			<ul>
				<li>Формат:</li>
				<li className={style.btn}><label><input type="radio" name="format" onClick={() => setTimeFormat(true)} />12</label></li>
				<li className={style.btn}><label><input type="radio" name="format" onClick={() => setTimeFormat(false)} defaultChecked />24</label></li>
			</ul>
			<input className={style.input} placeholder="8:00" type="text" value={value} onChange={inputChange}/>
		</div>
	)
}

export default Clock;