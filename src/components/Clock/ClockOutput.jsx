import React from "react";
import style from "./Clock.module.scss"

function Clock(props) {
	
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const time = setInterval(() => setDate(new Date()), 1000);
        return function clearTime() {
            clearInterval(time);
        };
    }, []);

    return (
        <div>
            <div className={style.timeOutput}>
                {date.toLocaleTimeString("ru", {
                    hour12: props.format,
                    timeZone: props.timezone,
                })}
            </div>
        </div>
    );
}

export default Clock;
