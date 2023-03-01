import React from "react";
import SelectCountry from "./SelectCountry";
import PhoneRadio from "./PhoneRadio";
import style from "./PhoneInput.module.scss"

function PhoneInput(props) {
    const [inputValue, setValue] = React.useState("Введите номер телефона");
    const [phone, setPhone] = React.useState("");
	const [test, setTest] = React.useState(true);
	const [flag, setFlag] = React.useState(false);
	const [country, setCountry] = React.useState(false);
	const [phoneCode, setPhoneCode] = React.useState(false);
	const [border, setBorder] = React.useState("1px solid rgba(0, 0, 0, 0.561)");

    const inputClick = () => {
        setValue("+XXX (XX) XXX-XX-XX");
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "input":
                if (inputValue === "+XXX (XX) XXX-XX-XX")
                    setValue("Введите номер телефона");
                else {
                    setValue("");
                }
                break;
            default:
                setValue("Введите номер телефона");
        }
    };


    const inputChange = (e) => {
        let inputNum = e.target.value;
        // console.log("input " + e.target.value);

        if (inputNum === "") {
            setTest(true);
            setFlag(false);
        }
        if (inputNum === "++") {
            setTest(true);
            console.log("+");
            inputNum = inputNum.replace(/^/, "");
        }
        if (inputNum.match(/[0-9]/) && test) {
            if (inputNum[0] !== "+") {
                inputNum = inputNum.replace(/^/, "+");
            }
            setTest(false);
        }
        if (inputNum.match(/[^a-zA-Z]*$/)) {
			inputNum = inputNum.replace(/[^/(?!+)\d]/g, "")
			// console.log("text")
        }

        // let num = "";
        // if (inputNum.length === 4) {
        //     num = inputNum;
        // }
        console.log(inputNum.replace(/\W/g, ''));

		if(inputNum.replace(/\W/g, '').length === 12 && (country === "belarus" || country === "ukraine" || country === "litva")) {
			inputNum = inputNum.replace(/\W/g, '')
			inputNum = `+${inputNum.slice(0,3)} (${inputNum.slice(3,5)}) ${inputNum.slice(5, 8)}-${inputNum.slice(8, 10)}-${inputNum.slice(10, 12)}`
			setBorder("2px solid rgb(0, 160, 0)")
		}
		if(inputNum.replace(/\W/g, '').length === 11 && country === "russia") {
			inputNum = inputNum.replace(/\W/g, '')
			inputNum = `+${inputNum.slice(0,1)} (${inputNum.slice(1,4)}) ${inputNum.slice(4, 7)}-${inputNum.slice(7, 9)}-${inputNum.slice(9, 11)}`
			setBorder("2px solid rgb(0, 160, 0)")
		}
		else if((inputNum.replace(/\W/g, '').length <= 10 || inputNum.replace(/\W/g, '').length >= 13) || inputNum.replace(/\W/g, '').length >= 13) {
			setBorder("1px solid hsl(0, 0%, 80%)")
		}
		
        setPhone(inputNum);
        // console.log(phone);
        switchCountry(inputNum);
    };

    console.log(country);

	const radioValue = (e) => {
		// console.log(e.target.value);
		if (
			e.target.value !== undefined &&
			!phoneCode &&
			(phone.length < 5 || phone === "+7")
		) {
			if(country === "belarus" || country === "ukraine" || country === "litva") {
				const valid = phone + e.target.value
				// console.log(valid);
				setPhoneCode(true);
				setPhone(`${valid.slice(0,4)}(${valid.slice(4,6)})`);
			} 
			if(country === "russia") {
				const valid = phone + e.target.value
				// console.log(valid);
				setPhoneCode(true);
				setPhone(`${valid.slice(0,2)}(${valid.slice(2,5)})`);
			} 
			else{
				setPhoneCode(true);
				setPhone(phone + " (" + e.target.value + ")") //
			}
		} 
		else{
			setPhoneCode(false);
			if((country === "belarus" || country === "ukraine" || country === "litva") && e.target.value !== undefined) {
				const slicePhone = phone.slice(0, 4)
				setPhone(slicePhone + "(" + e.target.value + ")")
			} 
			if((country === "russia") && e.target.value !== undefined) {
				const slicePhone = phone.slice(0, 2)
				setPhone(slicePhone + "(" + e.target.value + ")") //
			} 
		}
	};

	// const phoneValidation = (val) => {
	// 	const phoneNumber = val.replace(/[^\d]/g, "")
	// 	const phoneNumberLength = phoneNumber.length
	// 	console.log("length " + phoneNumberLength)

	// 	if (phoneNumberLength <= 3) return setPhone(phoneNumber)
	// 	if (phoneNumberLength <= 6) {
	// 		setPhone( `+${phoneNumber.slice(0,3)} (${phoneNumber.slice(3,5)})` )
	// 		console.log(`+${phoneNumber.slice(0,3)} (${phoneNumber.slice(3,5)})`)
	// 	}
	// 	console.log(`+${phoneNumber.slice(0,3)} (${phoneNumber.slice(3,5)})`)
	// }

    const selectValue = (e) => {
        setPhone(e.target.value);
        // console.log(e.target.value);
        switchCountry(e.target.value);
    };

    const switchCountry = (val) => {
        switch (val.replace(/\s+/g, "")) {
            case "+375":
                // console.log("Беларусь");
                setCountry("belarus");
                setFlag("/img/беларусь.png");
                break;
            case "+7":
                // console.log("росcия");
                setFlag("/img/россия.png");
                setCountry("russia");
                break;
            case "7":
                // console.log("росcия");
                setFlag("/img/россия.png");
                setCountry("russia");
                break;
            case "+380":
                // console.log("Украина");
                setFlag("/img/украина.png");
                setCountry("ukraine");
                break;
            case "+48":
                // console.log("Польша");
                setFlag("/img/польша.png");
                setCountry("poland");
                break;
            case "+370":
                // console.log("Литва");
                setFlag("/img/литва.png");
                setCountry("litva");
                break;
            case "+371":
                // console.log("Латвия");
                setFlag("/img/латвия.png");
                setCountry("latvia");
                break;

            default:
                // console.log("no");
                if ((val.length < 5 || val === "+7") && flag) {
					setFlag(false);
					
                }
				if (val.length > 1 && val.match(/\+7/)) {
					setFlag("/img/россия.png");
				}
				if(val.length < 1)  setCountry(false);
        }
    }

    return (
        <div className={style.phoneInput}>
            <div className={style.selectInput}>
                <SelectCountry selectValue={selectValue}/>

                <div className={style.input}>
                    {flag && (
                        <img
                            className={style.flag}
                            width={20}
                            src={flag}
                            alt="flag"
                        />
                    )}
                    <input
                        style={{ padding: "10px 25px 10px 35px", outline: border}}
                        value={phone}
                        onChange={inputChange}
                        onBlur={blurHandler}
                        onClick={inputClick}
                        name="input"
                        type="text"
                        list="country"
                        placeholder={inputValue}
                    />
                </div>
            </div>
            
			<PhoneRadio addCountry={country} addRadioValue={radioValue}/>
        </div>
    );
}

export default PhoneInput;
