import React from "react"
import style from "./Clock.module.scss"
import TimezoneSelect from "react-timezone-select";
import ClockOutput from "./ClockOutput"

function Clock() {

	const [timeFormat, setTimeFormat] = React.useState(false)

	const [selectedTimezone, setSelectedTimezone] = React.useState({})

	return(
		<div className={style.clock}>
			<ClockOutput format={timeFormat} timezone={selectedTimezone.value}/>
			<ul>
				<li>Формат:</li>
				<li className={style.btn}><label><input type="radio" name="format" onClick={() => setTimeFormat(true)} />12</label></li>
				<li className={style.btn}><label><input type="radio" name="format" onClick={() => setTimeFormat(false)} defaultChecked />24</label></li>
			</ul>
			<TimezoneSelect className={style.timezone}
				
         		value={selectedTimezone}
         		onChange={setSelectedTimezone}
        	/>
		</div>
	)
}

export default Clock;