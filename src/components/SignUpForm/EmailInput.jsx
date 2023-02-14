import React from "react";
import style from "./SignUpForm.module.scss"

function SignUpEmailInput(props) {

	const [email, setEmail] = React.useState("")

	const [emailDirty, setEmailDirty] = React.useState(false)
	const [emailError, setEmailError] = React.useState("Введите Email")
	
	const [border, setBorder] = React.useState("1px solid #565656")
	
	const emailHandler = (e) => {
		const emailInput = e.target.value	
		setEmail(emailInput)
		
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if(!re.test(String(email).toLowerCase())) {
			
			props.onEmail(true)
			
			if(emailInput.length === 0 || emailInput==="") {
				setEmailError("Введите Email")
				setBorder("2px solid red") //red
			}
			if(emailInput.length >= 1) {
				setEmailError("Неккоректный Email")
				setBorder("2px solid red") //red
			}
			if (emailDirty && emailError){
				// setEmailError("Неккоректный Email")
				setBorder("2px solid red") //red
			}
		}
		else{
			props.onEmail(false)
			setBorder("2px solid rgb(0, 160, 0)") //green
			setEmailDirty(false)
			setEmailError("")
		}
	}

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "email":
				if (emailError==="") {
					setEmailDirty(false)
				}
				else{
					setEmailDirty(true)
					setBorder("2px solid red") //red
					props.onEmail(true)
				}
				break
			default: setEmailDirty(false)
		}
	}
	
	return (
		<div className={style.email}>
			{/* <label htmlForemail="email" className="pb-5">Email:</label> */}
			<input required onBlur={blurHandler} onChange={emailHandler} value={email} style={{outline: border}} type="email" name="email" placeholder="email" id="email"/>
			{(emailDirty && emailError) && <img width={21} height={21} src="/img/cross.png" alt="cross"/>}
			{(emailDirty && emailError) && <div className={style.invalid}><p>{emailError}</p></div>}
		</div>
	)
	
}

export default SignUpEmailInput;
