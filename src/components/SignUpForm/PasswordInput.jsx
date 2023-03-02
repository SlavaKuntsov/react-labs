import React from "react";
import ProgressBar from "./ProgressBar";
import style from "./SignUpForm.module.scss"

function SignUpPasswordInput(props) {
	const [password, setPassword] = React.useState("");
    const [secondPassword, setSecondPassword] = React.useState("");
    const [defPassword, setDefPassword] = React.useState(
		"Пароль должен быть более 8 символов"
		);
	const [boolDefend, setBoolDefend] = React.useState(false);
	const [passwordError, setPasswordError] = React.useState("Введите пароль");
	const [passwordDirty, setPasswordDirty] = React.useState(false);
	
	const [border, setBorder] = React.useState("1px solid #565656");
	
	const [progressBar, setProgressBar] = React.useState(false);
	const progress = [];
	const [color, setColor] = React.useState("");

    const pasHandler = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        // console.log("1   " + passwordInput)
    };

    const pasHandler_2 = (e) => {
        const passwordInput_2 = e.target.value;
        setSecondPassword(passwordInput_2);
        // console.log("2    " + passwordInput_2)
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "password":
                if (passwordError === "") {
                    // setDefPassword(true)
                    setPasswordDirty(false);
                } else {
                    setPasswordDirty(true);
                    setBorder("2px solid red"); //red
                    props.onEmail(true);
                }
                break;
            default:
                setPasswordDirty(false);
        }
    };


    React.useEffect(() => {
        if (password) setBoolDefend(true);

        if (password !== secondPassword) {
            props.onEmail(true);
            setPasswordError("Пароли не совпадают");
            setBorder("2px solid red");
        }
        if (
            secondPassword === password &&
            password.length >= 8 &&
            secondPassword.length >= 8
        ) {
            setBoolDefend(false);
            props.onEmail(false);
            setBorder("2px solid rgb(0, 160, 0)"); //green
            setPasswordDirty(false);
            setPasswordError("");
            if (progress.length === 5) {
                setDefPassword("Прекрасный пароль");
            }
        }
        if (password !== secondPassword) {
            props.onEmail(true);
            setPasswordError("Пароли не совпадают");
            setBorder("2px solid red");
        }
        if (password.length === 0 || secondPassword.length === 0) {
            setPasswordError("Введите пароль");
        }
        if (password.length < 8) {
            setDefPassword("Пароль должен быть более 8 символов");
        }

        // if(password.length >= 8) {
        if (password.match(/[0-9]/)) {
            progress.push(1);
            setDefPassword(
                "Пароль может содержать прописные, заглавные буквы и символы"
            );
        }
        if (password.match(/[a-z]/) || password.match(/[а-я]/)) {
            progress.push(1);
            setDefPassword("Пароль может содержать цифры и символы");
        }
        if (password.match(/[A-Z]/) || password.match(/[А-Я]/)) {
            progress.push(1);
            setDefPassword("Пароль может содержать цифры и символы");
        }
        // eslint-disable-next-line no-useless-escape
        if (password.match(/[!@#\$%\^&\*]/)) {
            progress.push(1);
            setDefPassword("Пароль может содержать буквы и цифры");
        }
        if (password.length >= 8) {
            progress.push(1);
        }

        switch (progress.length) {
            case 1:
                setColor("black");
                break;
            case 2:
                setColor("red");
                break;
            case 3:
                setColor("orange");
                break;
            case 4:
                setColor("gold");
                break;
            case 5:
                setColor("ForestGreen");
                break;
            default:
                setColor("black");
                break;
        }

        setProgressBar(progress.length);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password, secondPassword]);

    return (
        <div className="password">
            {/* <label>Password:</label> */}
            <input
                style={{ outline: border }}
                required
                onBlur={blurHandler}
                onChange={pasHandler}
                type="password"
                name="password"
                placeholder="password"
            />
            <input
                style={{ outline: border }}
                required
                onBlur={blurHandler}
                onChange={pasHandler_2}
                type="password"
                name="password"
                placeholder="password"
            />
            {passwordDirty && passwordError && (
                <img width={21} height={21} src="/img/cross.png" alt="cross" />
            )}

            {passwordDirty && passwordError && (
                <div className="invalid">
                    <p>{passwordError}</p>
                </div>
            )}
            {boolDefend && (
                <div className="invalid">
                    <p>{defPassword}</p>
                </div>
            )}

            {password && <ProgressBar color={color} completed={progressBar} />}
        </div>
    );
}

export default SignUpPasswordInput;
