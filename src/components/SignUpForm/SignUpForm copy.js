import React from "react";

function SignUpForm(props) {

	const [isFormValid, setIsFormValid] = React.useState(false)
	// const [isSubmit, setIsSubmit] = React.useState(false)
	
    const isValid = (bool) => {
		if (bool) {
			setIsFormValid(bool)
		}
		if (!bool) {
			setIsFormValid(bool)
		}
	}

	// React.useEffect(() => {
	// 	if (isFormValid) {
	// 		setIsSubmit(true)
	// 	}
	// 	if (!isFormValid){
	// 		setIsSubmit(false)
	// 	}
	// }, [isFormValid])
	
	// console.log(isFormValid)
    return (
        <form className="form">
			<h2>Регистрация g@gmail.com</h2>
			<SignUpEmailInput onEmail={(bool) => isValid(bool)} />
			<SignUpPasswordInput  onEmail={(bool) => isValid(bool)} />
			<input type="text" placeholder="фамилия"/>
			<input type="text" placeholder="имя"/>
			<input type="text" placeholder="отчество"/>
			<div>
				Пол:
				<label><input type="radio" name="sex" />мужчина</label>
				<label><input type="radio" name="sex" />женщина</label>
			</div>
			<div>
				Дата рождения: 
				<select>
					<option>00</option>
				</select>
				.
				<select>
					<option>00</option>
				</select>
				.
				<select>
					<option>00</option>
				</select>
			</div>
			PhoneInput
			<input className="mt-10" type="submit" disabled={isFormValid}/>
        </form>
    );
}

function SignUpEmailInput(props)	{

	const [email, setEmail] = React.useState("")
	const [emailValid, setEmailValid] = React.useState(false)

	const [emailDirty, setEmailDirty] = React.useState(false)
	const [emailError, setEmailError] = React.useState("Введите Email")
	
	const [border, setBorder] = React.useState("1px solid #565656")
	
	const emailHandler = (e) => {
		const emailInput = e.target.value	
		setEmail(emailInput)
		console.log("1" + emailValid)
		setEmailValid(true)
		props.onEmail(emailValid)
		console.log("2" + emailValid)
		
		
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if(!re.test(String(email).toLowerCase())) {
			
			props.onEmail(true)
			
			if(emailInput.length === 0) {
				setEmailError("Введите Email")
				setBorder("2px solid red") //red
			}
			if(emailInput.length >= 1) {
				setEmailError("Некорректный Email")
				setBorder("2px solid red") //red
			}
			if (emailDirty && emailError){
				setEmailError("Некорректный Email")
				setBorder("2px solid red") //red
				setEmailDirty(false)
				// props.onEmail(false)
			}
		}
		else{
			// setEmailValid(false)
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
		<div className="email">
			<label htmlFor="email" className="pb-5">Email:</label>
			<input onBlur={blurHandler} onChange={emailHandler} value={email} style={{outline: border}} type="email" name="email" placeholder="email" id="email"/>
			{(emailDirty && emailError) && <img width={21} height={21} src="/img/cross.png" alt="cross"/>}
			{(emailDirty && emailError) && <div className="invalid"><p>{emailError}</p></div>}
		</div>
	)
	
}

function SignUpPasswordInput() {

	const [passwordValid, setPasswordValid] = React.useState(false)
	const [password, setPassword] = React.useState(false)

	const [border, setBorder] = React.useState("1px solid #565656")

	const pasHandler = (e) => {
		const passwordInput = e.target.value
		setPassword(passwordInput)
		console.log(password)
	}
	const pasHandler_2 = (e) => {
		const passwordInput_2 = e.target.value
		console.log(passwordInput_2)
		if(passwordInput_2 !== password) {
			setPasswordValid(true)
			setBorder("2px solid red")
		}
	}
	
	return (
		<div className="password">
			<input style={{outline: border}} onChange={pasHandler} type="password" placeholder="password"/>
			<input style={{outline: border}} onChange={pasHandler_2} type="password" name="password" placeholder="password"/>
			{passwordValid && <img width={21} height={21} src="/img/cross.png" alt="cross"/>}
			
			{passwordValid && <div className="invalid"><p>Пароли не совпадают</p></div>}
		</div>
	)
}

export default SignUpForm;
