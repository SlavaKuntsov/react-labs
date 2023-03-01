import React from "react"
import style from "./PhoneInput.module.scss"

function PhoneRadio(props) {

	const allCountry = [
        { country: "belarus", operator: "МТС", code: "33" },
        { country: "belarus", operator: "A1", code: "29" },
        { country: "belarus", operator: "life:)", code: "25" },

        { country: "russia", operator: "Билайн", code: "900" },
        { country: "russia", operator: "Мегафон", code: "920" },
        { country: "russia", operator: "МТС", code: "910" },
        { country: "russia", operator: "Tele2", code: "950" },

        { country: "ukraine", operator: "Lifecell", code: "33" },
        { country: "ukraine", operator: "Vodafone", code: "33" },
        { country: "ukraine", operator: "Київстар", code: "33" },

        { country: "poland", operator: "Orange", code: "33" },
        { country: "poland", operator: "Play", code: "33" },
        { country: "poland", operator: "Plus", code: "33" },
        { country: "poland", operator: "T-mobile", code: "33" },

        { country: "litva", operator: "Telia", code: "33" },
        { country: "litva", operator: "Bite", code: "33" },
        { country: "litva", operator: "Tele2", code: "33" },

        { country: "latvia", operator: "LMT", code: "33" },
        { country: "latvia", operator: "Tele2", code: "33" },
        { country: "latvia", operator: "Bite", code: "33" },
    ];


	return(
		<div className={style.radio}>
            {props.addCountry &&
                allCountry
                    .filter((item) => item.country === props.addCountry)
                    .map((item) => (
                        <label onClick={props.addRadioValue} key={item.operator}>
                            <input
                                value={item.code}
                                type="radio"
                                name="radio"
                            />
                            {item.operator}
                        </label>
                    ))}
        </div>
	)
}

export default PhoneRadio;