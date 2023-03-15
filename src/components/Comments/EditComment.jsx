import React from "react"
import style from "./Comments.module.scss"
import { BsPencilSquare } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons";



export default function EditComment  (props) {

	const [time, setTime] = React.useState(props.time);
	

    const [click, setClick] = React.useState(false);
    const [clickEdit, setClickEdit] = React.useState(false);

	const [editText, setEditText] = React.useState(props.text);
	console.log('editText', editText)

	// console.log('click: ', click);
	
	const editClick = (cl) => {
		if(cl) {
			setClick(cl)
			// props.editClick(cl)
		}
		else{
			setClick(!cl)
			// props.editClick(!cl)
		}
	}
	
	function BlueLargeIcon() {
        return (
            <IconContext.Provider value={{ color: "white" }}>
                <BsCheckLg style={{ width: "20px", height: "20px", color:"white" }} />
            </IconContext.Provider>
        );
    }

	return (
		<div className={style.edit}>
			<div className={style.text}>
				<p style={{width: !click ? "610px" : "570px"}}>{props.text}</p>	
				{/* {!click ? 
				<p style={{width: !click ? "610px" : "570px"}}>{editText}</p>	
				:
				<input type="text" value={editText} onChange={e => setEditText(e.target.value)}/>
				} */}
			</div>
			<div className={style.textEdit}>
				<button disabled={click}>
					<BsPencilSquare 
						onClick={() => {
							editClick(!click)
						}}
						style={{width:"20px", height:"20px"}}
					/>
				</button>

				{click && 
				<div 
					onClick={() => {
						// props.editClick(false);
						setClick(false)
						setTime(new Date())
						// setClickEdit(true)
						props.date(new Date())
					}} 
					className={style.editButton}
					>
					{BlueLargeIcon()}
				</div>
				}
			</div>

		</div>
	)
};

