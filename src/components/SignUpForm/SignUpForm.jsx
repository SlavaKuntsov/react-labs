import React from "react";
import SignUpEmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import PhoneInput from "../PhoneInput/PhoneInput";
import style from "./SignUpForm.module.scss"
import DataSelect from "./DataSelect";

function SignUpForm(props) {
    const [isFormValid, setIsFormValid] = React.useState(false);

	const [date, setDate] = React.useState("")


    const isValid = (bool) => {
        if (bool) {
            setIsFormValid(bool);
        }
        if (!bool) {
            setIsFormValid(bool);
        }
    };

    return (
        <form className={style.form1}>
            <h2>Регистрация g@gmail.com</h2>
            <SignUpEmailInput email="1" onEmail={(bool) => isValid(bool)} />
            <PasswordInput onEmail={(bool) => isValid(bool)} />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Отчество" />
            <div className={style.sex}>
                <h4>Пол:</h4>
                <div>
                    <label>
                        <input type="radio" name="sex" />
                        Мужчина
                    </label>
                    <label>
                        <input type="radio" name="sex" />
                        Женщина
                    </label>
                </div>
            </div>
			<DataSelect  onSetDate={(day, month, year) => setDate(day, month, year)} />
            <PhoneInput />

            <input className="mt-10" type="submit" disabled={isFormValid} />
        </form>
    );
}

export default SignUpForm;
