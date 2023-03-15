import React from "react";
import style from "./Clock.module.scss"

// function Clock(props) {
	
//     const [date, setDate] = React.useState(new Date());

//     React.useEffect(() => {
//         const time = setInterval(() => setDate(new Date()), 1000);
//         return function clearTime() {
//             clearInterval(time);
//         };
//     }, []);

//     return (
//         <div>
//             <div className={style.timeOutput}>
//                 {date.toLocaleTimeString("ru", {
//                     hour12: props.format,
//                     timeZone: props.timezone,
//                 })}
//             </div>
//         </div>
//     );

// }

class ClockOutput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let TimeZone = this.props.timezone;
        this.setState({
			// берет время с 70 года(нужно для синтаксиса), находит часовой пояс(минуты), переводит в миллисекунды, указываем нужный часовой пояс и переводим в миллисекунды(часы)
            date: new Date(Date.now() + new Date().getTimezoneOffset() * 60000 + parseFloat(TimeZone) * 3600000)
        });
    }

    render() {
        return (
            <div className={style.timeOutput}>
				<p>
                {this.state.date.toLocaleTimeString("ru", {hour12: this.props.format})}
				</p>
            </div>
			
        );
    }
}

export default ClockOutput;