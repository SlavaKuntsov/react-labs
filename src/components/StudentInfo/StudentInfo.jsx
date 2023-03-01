import React from "react";
import DataSelect from "../SignUpForm/DataSelect";
import UniversityDate from "./UniverDate";
// import PhoneInput from "../PhoneInput/PhoneInput";
// import EmailInput from "../SignUpForm/EmailInput"
import SelectFaculty from "./SelectFaculty";

import style from ".//StudentInfo.module.scss"

export default function StudentInfo() {

	const [selectSpec, setSelectSpec] = React.useState("")
	const [selectFacultet, setSelectFacultet] = React.useState("")

	console.log(selectFacultet)
	console.log(selectSpec)
	
	const [fValue, setFValue] = React.useState("")
	const [IValue, setIValue] = React.useState("")
	const [OValue, setOValue] = React.useState("")
	const [phoneValue, setPhoneValue] = React.useState("")
	const [phoneOperator, setPhoneOperator] = React.useState("Недопустимая форма")
	const [emailValue, setEmailValue] = React.useState("")
	const [emailOperator, setEmailOperator] = React.useState("Недопустимая форма")
	const [date, setDate] = React.useState([])
	const [univerYear, setUniverYear] = React.useState("")
	const [univerGroup, setUniverGroup] = React.useState("")

	const [transformWidth, setTransformWidth] = React.useState(0)

	const operator = (e) => {
		setEmailValue(e.target.value)
		
		let str = e.target.value

		if (str.indexOf("@") >= 0) {
			setEmailOperator(str.slice(str.indexOf('@') + 1))
		}
		else{
			setEmailOperator(" форма")
		}
	}

	React.useEffect(() => {
		if(phoneValue.replace(/\D/g, '').includes("37529")){
			console.log(2900000000000)
			if(phoneValue.replace(/\D/g, '').slice(5, 6).includes("1") || phoneValue.replace(/\D/g, '').slice(5, 6).includes("3") || phoneValue.replace(/\D/g, '').slice(5, 6).includes("6")  || phoneValue.replace(/\D/g, '').slice(5, 6).includes("9")) {
				setPhoneOperator("A1 (Velcom)")
			}
			if(phoneValue.replace(/\D/g, '').slice(5, 6).includes("2") || phoneValue.replace(/\D/g, '').slice(5, 6).includes("5") || phoneValue.replace(/\D/g, '').slice(5, 6).includes("7")  || phoneValue.replace(/\D/g, '').slice(5, 6).includes("8")) {
				setPhoneOperator("МТС")
			}
		}
		if(phoneValue.replace(/\D/g, '').includes("8029")){
			if(phoneValue.replace(/\D/g, '').slice(4, 5).includes("1") || phoneValue.replace(/\D/g, '').slice(4, 5).includes("3") || phoneValue.replace(/\D/g, '').slice(4, 5).includes("6")  || phoneValue.replace(/\D/g, '').slice(4, 5).includes("9")) {
				setPhoneOperator("A1 (Velcom)")
			}
			if(phoneValue.replace(/\D/g, '').slice(4, 5).includes("2") || phoneValue.replace(/\D/g, '').slice(4, 5).includes("5") || phoneValue.replace(/\D/g, '').slice(4, 5).includes("7")  || phoneValue.replace(/\D/g, '').slice(4, 5).includes("8")) {
				setPhoneOperator("МТС")
			}
		}
	
		if(phoneValue.replace(/\D/g, '').includes("37544") || phoneValue.replace(/\D/g, '').includes("8044")){
			setPhoneOperator("A1 (Velcom)")
		}
		if(phoneValue.replace(/\D/g, '').includes("37533") || phoneValue.replace(/\D/g, '').includes("8033")){
			setPhoneOperator("МТС")
		}
	
		if(phoneValue.replace(/\D/g, '').includes("37525") || phoneValue.replace(/\D/g, '').includes("8025")){
			setPhoneOperator("life:)")
		}
		
		if(phoneValue.replace(/\D/g, '').includes("37517") || phoneValue.replace(/\D/g, '').includes("8017")){
			setPhoneOperator("Белтелеком(городской)")
		}
	}, [phoneValue])

	const univer = () => {
		if(2023 - univerYear >= 5 && univerYear !== "") {
			return "Окончил университет"
		}
		if(univerYear === "") {
			return "..."
		}
		else{
			return 2023 - univerYear + " курс"
		}
	}


return(
	<form className={style.form2}> 
		<div  className={style.container}>
			<div style={{transform: `translateX(${transformWidth}%)`}} className={style.trackContainer}>
				<div className={style.firstContainer}>
					<div className={style.h2}>
						<h2>Регистрация</h2>
					</div>
					<div className={style.peopleInfo}>
						<h3>Личные данные</h3>
						<div className={style.nameInput}>
							<div className={style.input}>
								<label htmlFor="input1">Фамилия</label>
								<input onChange={e => setFValue(e.target.value)} value={fValue} id="input1" type="text" placeholder="Введите фамилию"/>
							</div>
							<div className={style.input}>
								<label htmlFor="input2">Имя</label>
								<input onChange={e => setIValue(e.target.value)} value={IValue} id="input2" type="text" placeholder="Введите имя" />
							</div>
							<div className={style.input}>
								<label htmlFor="input3">Отчество</label>
								<input onChange={e => setOValue(e.target.value)} value={OValue} id="input3" type="text" placeholder="Введите отчество" />
							</div>
						</div>
						<div className={style.dataInfo}>
							<div className="dataInput">
								<DataSelect onSetDate={(year) => setDate(year)}/>
							</div>
							<div className={style.input}>
								<label>Электронная почта</label>
								{/* <EmailInput email="2"/> */}
								<input onChange={operator} value={emailValue} type="email" placeholder="Введите Email"/>
							</div>
							<div className={style.input}>
								<label className="label">Введите номер телефона</label>
								{/* <PhoneInput /> */}
								<input onChange={e => setPhoneValue(e.target.value)} value={phoneValue} type="text" placeholder="Введите номер телефона"/>
							</div>
						</div>
					</div>
					<div className={style.univerInfo}>
						<h3>Данные университета</h3>
						<div className={style.univer}>
							<div className={style.input}>
								<label>Год поступления</label>
								<UniversityDate onAddYear={year => setUniverYear(year)} first={2023} second={2000}/>
							</div>
							<div className={style.inputFacultet}>
								<label>Факультет</label>
								<SelectFaculty onAddSpec={(val) => setSelectSpec(val)} onAddFacultet={(val) => setSelectFacultet(val)}/>
							</div>
							<div className={style.input}>
								<label>Группа</label>
								<UniversityDate onAddGroup={group => setUniverGroup(group)} first={10} second={0}/>
							</div>
						</div>
					</div>
					<div onClick={() => setTransformWidth(-100)} className={style.button}>
						<p>Next</p>
						<img width={20} src="/img/icons8-arrow-96.png" alt="arrow" className={style.next}/>
					</div>
				</div>
				<div className={style.secondContainer}>
					<table>
						<tbody>
							<tr>
								<td>Ф.И.О</td>
								<td>{fValue} {IValue} {OValue}</td>
							</tr> 
							<tr>
								<td>Tекущий возраст студента</td>
								<td>{date !== "00" && <>{2023 - date} лет/года</> }</td>
							</tr>
							<tr>
								<td>Факультет, курс, группа</td>
								<td>{selectFacultet !== "" ? selectFacultet : <>...</>}, {univer()}, {univerGroup !== "" ? <>{univerGroup} группа</> : <>...</> }</td>
							</tr>
							<tr>
								<td>Специальность</td>
								<td>{selectSpec !== "" && selectSpec}</td>
							</tr>
							<tr>
								<td>Электронная почта</td>
								<td>{emailValue}</td>
							</tr>
							<tr>
								<td>Оператор услуг электронной почты</td>
								<td>{emailValue !== "" && emailOperator}</td>
							</tr>
							<tr>
								<td>Номер телефона</td>
								<td>{phoneValue}</td>
							</tr>
							<tr>
								<td>Оператора услуг мобильной связи</td>
								<td>{phoneValue !== "" && phoneOperator}</td>
							</tr>	
						</tbody>
					</table>						
					<div onClick={() => setTransformWidth(0)} className={style.button}>
						<img width={20} src="/img/icons8-arrow-96.png" alt="arrow" className={style.prev}/>
						<p>Prev</p>
					</div>
				</div>
			</div>
		</div>
		
	</form>
)
}