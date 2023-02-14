import React from "react";
import SignUpEmailInput from "./EmailInput";
import SignUpPasswordInput from "./PasswordInput";
import PhoneInput from "../PhoneInput/PhoneInput";
import style from "./SignUpForm.module.scss"

function SignUpForm(props) {
    const [isFormValid, setIsFormValid] = React.useState(false);

    const isValid = (bool) => {
        if (bool) {
            setIsFormValid(bool);
        }
        if (!bool) {
            setIsFormValid(bool);
        }
    };

    const selectFor = (num, zero = 1) => {
        let count = [];
        for (let i = zero; i <= num; i++) {
            count.push(<option key={i}>{i}</option>);
        }
        return count;
    };

    // const num = [31]

    return (
        <form>
            <h2>Регистрация g@gmail.com</h2>
            <SignUpEmailInput onEmail={(bool) => isValid(bool)} />
            <SignUpPasswordInput onEmail={(bool) => isValid(bool)} />
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
            <div className={style.allSelect}>
                <h4>Дата рождения:</h4>
                <select>
                    <option disabled selected hidden>
                        00
                    </option>
                    {selectFor(31)}
                </select>
                .
                <select>
                    <option disabled selected hidden>
                        00
                    </option>
                    {selectFor(12)}
                </select>
                .
                <select>
                    <option disabled selected hidden>
                        00
                    </option>
                    {selectFor(2023, 1900)}
                </select>
            </div>

            <PhoneInput />

            <input className="mt-10" type="submit" disabled={isFormValid} />
        </form>
    );
}

export default SignUpForm;
