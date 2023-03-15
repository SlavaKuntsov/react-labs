import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

import style from "./Comments.module.scss";

export default function DeleteComment(props) {
    const [click, setClick] = React.useState(false);
	// console.log('click: ', click);
    const [deleteValue, setDeleteValue] = React.useState("");

	console.log({deleteValue})
	// console.log('props.delete: ', props.delete);

	React.useEffect(() => {
		if(`${props.delete}` === `${deleteValue}`) {
			console.log("deleteValue " + props.index)
		    props.getDeleteComment(props.index)
			setDeleteValue("")
			setClick(false)
		}
	},[props, deleteValue] )

    return (
        <div className={style.delete}>
            {click && (
                <input
                    value={deleteValue}
                    onChange={(e) => {setDeleteValue(e.target.value)}}
                    placeholder="Секретное слово"
                    type="text"
                />
            )}
            <AiOutlineDelete
                onClick={() => setClick(!click)}
                style={{ width: "20px", height: "20px" }}
            />
        </div>
    );
}
