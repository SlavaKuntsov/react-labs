import React from "react";
import style from "./Comments.module.scss";

import { IconContext } from "react-icons";
import { FiSend } from "react-icons/fi";
import OneComment from "./OneComment";

export default function Comments() {
	const allCommentsArray = [
		// {avatar: "/img/comments/man.png",
		// name: "Слава",
		// text: "Some text",
		// deleteWord: "1",
		// email: "kuncovs19@gmaill.com"},
		
		
	];
	
    const [allComments, setAllComments] = React.useState(allCommentsArray);
	console.table(allComments)

    const allAvatarArray = [
        // { title: "default", avatar: "/img/comments/user.png" },
        { title: "man", avatar: "/img/comments/man.png" },
        { title: "man2", avatar: "/img/comments/man (1).png" },
        { title: "man3", avatar: "/img/comments/man (3).png" },
        { title: "girl", avatar: "/img/comments/girl.png" },
        { title: "girl2", avatar: "/img/comments/girl (1).png" },
        { title: "girl3", avatar: "/img/comments/girl (2).png" },
    ];

    function BlueLargeIcon() {
        return (
            <IconContext.Provider value={{ color: "white" }}>
                <FiSend style={{ width: "20px", height: "15px" }} />
            </IconContext.Provider>
        );
    }

    const [avatarValue, setAvatarValue] = React.useState("/img/comments/user.png");
    // console.log("avatarValue: ", avatarValue);
    const [nameValue, setNameValue] = React.useState("Слава");
    const [emailValue, setEmailValue] = React.useState("kuncovs19@gmaill.com");
    const [textValue, setTextValue] = React.useState("");
    const [deleteWordValue, setDeleteWordValue] = React.useState("");

	const [buttonClick, setButtonClick] = React.useState(false)

	const deleteComment = (indexDel) => {
		if (indexDel > -1) { // only splice array when item is found
			allComments.splice(indexDel, 1)// 2nd parameter means remove one item only
		}
		
		setAllComments(allComments.filter(index => index !== indexDel)) 
		
		// console.log(allComments)
		// setAllComments([

		// 	{avatar: "/img/comments/man.png",
		// name: "Слава",
		// text: "Some text",
		// deleteWord: "1",
		// email: "kuncovs19@gmaill.com"},
		// ])
	}

    const addComment = () => {
		if(nameValue && emailValue && textValue && deleteWordValue !== "") {
			setAllComments([
				...allComments,
				{
					avatar: `${avatarValue}`,
					name: `${nameValue}`,
					text: `${textValue}`,
					deleteWord: `${deleteWordValue}`,
					email: `${emailValue}`,
				},
			]);

			setTextValue("")
			setDeleteWordValue("");
		}
    };

    return (
        <div className={style.comments}>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={avatarValue} alt="avatar" />
                    <select onChange={(e) => setAvatarValue(e.target.value)}>
                        <option
                            defaultValue={"/public/img/comments/user.png"}
                            hidden
                        >
                            Выберите аватар
                        </option>

                        {allAvatarArray.map((item, index) => (
                            <option value={item.avatar} key={index}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={style.name}>
                    <input
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        type="text"
                        placeholder="Введите имя пользователя"
                    />
                    <input
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        type="email"
                        placeholder="Введите email"
                    />
                </div>
            </div>

            <div className={style.commentsInput}>
				<div className={style.commentsTrack}>
				{allComments.length !== 0 ? 
						allComments.map((item, index) => (
							<OneComment 
							key={index}
							index={index}
							avatar={item.avatar}
							name={item.name}
							text={item.text}
							email={item.email}
							deleteWord={item.deleteWord}
							getDeleteComment={indexDel => deleteComment(indexDel)}
							time={new Date()}
						/>
						))
						:
						<h4>Нет заметок</h4>
					}
				</div>
                <div className={style.addComments}>
					{!buttonClick ? 
					<div className={style.black}>
						<input 
							onClick={() => setButtonClick(true)}
							className={style.text}
                        	value={textValue}
                        	onChange={(e) => setTextValue(e.target.value)}
                        	type="text"
                        	placeholder="Введите комментарий"
						/>
					</div>
					:
					<div className={style.transparent}>
						<input 
							onClick={() => setButtonClick(true)}
							className={style.text}
                        	value={textValue}
                        	onChange={(e) => setTextValue(e.target.value)}
                        	type="text"
                        	placeholder="Введите комментарий"
						/>
					</div>}

                    <div className={style.delete}>
                        <input
                            value={deleteWordValue}
                            onChange={(e) => setDeleteWordValue(e.target.value)}
                            type="text"
                            placeholder="Слово для удаления"
                        />
                        <div
                            onClick={() => addComment()}
                            className={style.create}
                        >
                            {BlueLargeIcon()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
