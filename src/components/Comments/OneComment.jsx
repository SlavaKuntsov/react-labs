import React from "react"
import style from "./Comments.module.scss"
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import UserInfo from "./UserInfo";

export default function OneComment (props) {

	
	// const [editClick, setEditClick] = React.useState(false);
	// const [editText, setEditText] = React.useState(props.text);
	// console.log('editText: ', editText);
	
	// const [date, setDate] = React.useState(props.time);
	const [newTime, setNewTime] = React.useState(props.time);
	// console.log('date: ', newTime);



	return (
		<div className={style.oneComment}>
			<img src={props.avatar} alt="" />

			<div className={style.text}>
				<div className={style.top}>
					<h5>{props.name}</h5>	
					<div className={style.other}>
						<DeleteComment 
							index={props.index}
							delete={props.deleteWord}
							getDeleteComment={index => props.getDeleteComment(index)}
						/>
					</div>
				</div>

				<div className={style.body}>
					{/* <p>{props.text}</p>	 */}
					{/* {!editClick 
					? 
					<p>{editText}</p>	
					:
					<input type="text" value={editText} onChange={e => setEditText(e.target.value)}/>
					} */}

						
					<EditComment 
						text={props.text}
						time={props.time} 
						// editClick={bool => setEditClick(bool)}
						date={date => setNewTime(date)}
					/>
				</div>

				<div className={style.bottom}>
					<UserInfo 
						email={props.email}
						addDate={newTime}
						// editClick={editClick}
					/>
				</div>
				<p>{props.text}</p>
				<p>{props.deleteWord}</p>
			</div>
		</div>
	)
};

