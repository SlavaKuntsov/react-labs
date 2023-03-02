import React from 'react'
import style from "../SignUpForm/SignUpForm.module.scss"

function DataSelect(props) {

	const selectFor = (num, zero = 1) => {
        let count = [];
        for (let i = zero; i <= num; i++) {
            count.push(<option key={i}>{i}</option>);
        }
        return count;
    };

	const [day, setDay] = React.useState("00")
	const [month, setMonth] = React.useState("00")
	const [year, setYear] = React.useState("00")

	React.useEffect(() => {
		props.onSetDate(year)
	}, [day, month, year])

  return (
	<div className="allSelect">
		<h4>Дата рождения:</h4>
        <select onChange={e => setDay(e.target.value)} value={day} className="select">
            <option disabled selected hidden>
                00
            </option>
            {selectFor(31)}
        </select>
        .
        <select onChange={e => setMonth(e.target.value)} value={month} className="select">
            <option disabled selected hidden>
                00
            </option>
            {selectFor(12)}
        </select>
        .
        <select onChange={e => setYear(e.target.value)} value={year} className="select">
            <option disabled selected hidden>
                00
            </option>
            {selectFor(2023, 1970)}
        </select>
	</div>
  )
}

export default DataSelect;