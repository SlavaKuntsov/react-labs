import React from "react";
import style from "./AllProfessions.module.scss"

function Profession(props) {
	
	const allProfessions = [
		{job:"Программист", key:"prog"},
		{job:"Архитектор", key:"arc"},
		{job:"Химик", key:"him"},
		{job:"Инженер", key:"inj"},
		{job:"Повар", key:"pov"},
	]
	
	const onClickChoose = () => {
		props.onChoose(true);
	}

	const onClickSetKey = (name) => {
		props.onSetKey(name)
	}

    return(
		<ul className={style.jobs}>
			{allProfessions.map((item) => (
				<li	onClick={() => { onClickChoose(); onClickSetKey(item.key) }} key={item.key}><button>{item.job}</button></li>
			))}
		</ul>
	);
}

export default Profession;