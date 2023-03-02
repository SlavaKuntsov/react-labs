import React from 'react'

export default function SelectFaculty(props) {

	const faculty = [
		{id: 1, atr:"ФИТ"},
		{id: 2, atr:"ЛИД"},
		{id: 3, atr:"ПИМ"},
		{id: 3, atr:"ХТИТ"}
	]

	const spec = [
		{atr:"ФИТ", spec:"ПОИТ"},
		{atr:"ФИТ", spec:"ИСиТ"},
		{atr:"ФИТ", spec:"ПОИБМС"},
		{atr:"ФИТ", spec:"ДЭиВИ"},

		{atr:"ЛИД", spec:"ЛИЛК"},
		{atr:"ЛИД", spec:"ТДП"},
		{atr:"ЛИД", spec:"МОЛК"},
		{atr:"ЛИД", spec:"МСиОДП"},

		{atr:"ПИМ", spec:"ПТ"},
		{atr:"ПИМ", spec:"ПОиСОИ"},
		{atr:"ПИМ", spec:"ИД"},
		
		{atr:"ХТИТ", spec:"КиПИКМ"},
		{atr:"ХТИТ", spec:"ПИТТ"},
		{atr:"ХТИТ", spec:"МиАХПиПСМ"},
		{atr:"ХТИТ", spec:"АТПиП"},

	]

	const selectValue = (e) => {
		let value =  e.target.value
		props.onAddSpec(value)
		
		if( value === "ПОИТ" || value === "ИСиТ" || value === "ПОИБМС" || value  === "ДЭиВИ" ) {
			props.onAddFacultet("ФИТ")
		}
		if( value === "ЛИЛК" || value === "ТДП" || value === "МОЛК" || value  === "МСиОДП" ) {
			props.onAddFacultet("ЛИД")
		}
		if( value === "ПТ" || value === "ПОиСОИ" || value  === "ИД" ) {
			props.onAddFacultet("ПИМ")
		}
		if( value === "КиПИКМ" || value === "ПИТТ" || value === "МиАХПиПСМ" || value  === "АТПиП" ) {
			props.onAddFacultet("ХТИТ")
		}
	}

return (
	<>
		<select style={{fontSize:"13px"}} onChange={selectValue}>
			<option disabled selected hidden>
					...
			</option>
			{faculty.map((item, index) => (
				<optgroup key={index} label={item.atr}>
					{spec.filter(spec => spec.atr === item.atr)
						.map(spec => (
							<option key={spec.spec} value={spec.spec}>{spec.spec}</option>
						))}
				</optgroup>
			))}
		</select>
	</>
  )
}
