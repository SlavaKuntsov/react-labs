import React from "react"
import Profession from "./Profession";
import JobMenu from "./JobMenu";
import style from "./AllProfessions.module.scss"

function AllProfessions() {

	const [chooseProfession, setChooseProfession] = React.useState(false)
	
	const [key, setKey] = React.useState()

	return(
		<div className={style.allProfessions}>
			<Profession 
				onChoose={(bool) => setChooseProfession(bool)}
				onSetKey={(name) => setKey(name)}
			/>
			{
				chooseProfession
				? 
				<JobMenu oneKey={key}/> 
				: 
				<h3 className={style.noneProf}>Профессия не выбрана</h3>
			}
		</div>
	)
}

export default AllProfessions;