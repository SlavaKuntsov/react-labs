import React from 'react'


export default function UniverDate(props) {

	const selectFor = (num, zero = 1) => {
        let count = [];
        for (let i = zero; i <= num; i++) {
            count.push(<option key={i}>{i}</option>);
        }
        return count;
    };

	const [value, setValue] = React.useState("00")

	const addValue = (e) => {
		setValue(e.target.value)
		if(props.first === 2023) {
			props.onAddYear(e.target.value)			
		}
		if(props.first === 10) {
			props.onAddGroup(e.target.value)	
		}
	}

  return (
	<select onChange={addValue} value={value} style={{fontSize: "12px", fontWeight: "300", color: "rgba(0, 0, 0, 0.778)"}}>
            <option disabled selected hidden>
                00
            </option>
            {selectFor(props.first, props.second)}
    </select>
  )
}
