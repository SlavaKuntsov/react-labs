import React from "react"
import style from "./Comments.module.scss"
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IconContext } from "react-icons";


export default function UserInfo  (props) {

	function BlueLargeIcon() {
        return (
            <IconContext.Provider value={{ color: "white" }}>
                <AiOutlineInfoCircle style={{ width: "20px", height: "20px", color:"black", display:"flex " }} />
            </IconContext.Provider>
        );
    }

	let date = new Date();
	let dateString = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
    date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);


    const [click, setClick] = React.useState(false);


	return (
		<div className={style.info}>
			{/* <div className={style.output}> */}
				{click && 
					<div className={style.user}>
						<p>Email: {props.email}</p>
						<p>Дата {!props.editClick ? "публикации" : "изменения"} {dateString}</p>
					</div>
				}
			
				<div 
					className={style.btn}
					onClick={() => {
					setClick(!click)
				}}>
					{BlueLargeIcon()}
				</div>				
			{/* </div> */}
		</div>
	)
};

