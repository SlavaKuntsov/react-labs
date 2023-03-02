import React from "react"

function SelectCountry(props) {

	const countrySelect = [
        { name: "Беларусь", number: "+375" },
        { name: "росcия", number: "+7" },
        { name: "Украина", number: "+380" },
        { name: "Польша", number: "+48" },
        { name: "Литва", number: "+370" },
        { name: "Латвия", number: "+371" },
    ];

	return(
		<select name="select" onChange={props.selectValue}>
             {countrySelect.map((item) => (
                 <option style={{padding:"5px"}} className="option" value={item.number} key={item.number}>
                    {item.name}
                    {item.number}
                 </option>
             ))}
         </select>
	)
}

export default SelectCountry;