import React from "react"
import style from "./Catalog.module.scss"

export default function Search  (props) {

	const [search, setSearch] = React.useState("");

	props.addSearch(search)

	return (
		<div>
			<input value={search} onChange={e => setSearch(e.target.value)} type="text" />
		</div>
	)
};

