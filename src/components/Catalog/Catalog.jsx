import React from "react"
import style from "./Catalog.module.scss"
import Cart from "./Cart"
import Search from "./Search";

export default function Catalog  (props) {

	const sort = [
		{title: "A-я", sort: "name"},
		{title: "Я-a", sort: "nameReverse"},
		{title: "Дешевые", sort: "price"},
		{title: "Дорогие", sort: "priceReverse"},
		{title: "Больше", sort: "countReverse"},
		{title: "Меньше", sort: "count"},
		{title: "Скидка", sort: "discountReverse"},
	]

	const [addSort, setAddSort] = React.useState("name");

	const onChangeSort = (item) => {
		console.log(1)
		console.log(item)
		setAddSort(item)
		props.changeSort(item)
	}

	const [search, setSearch] = React.useState();

	return (
		<div className={style.catalog}>
			<Search 
				addSearch={str => setSearch(str)}
			/>
			<select onChange={e =>  onChangeSort(e.target.value)}>
				<option selected disabled>Фильтр</option>
				{sort.map((item, index) => (
					<option value={item.sort} key={index}>{item.title}</option>
				))}
			</select>
			
			{search !== "" ?
			props.tableItems
			.filter(item => item.name.toLocaleLowerCase().includes(search))
			.map((item, index) => (
				<Cart 
					key={index}
					id={index}
					name={item.name}
					price={item.price}
					count={item.count}
					image={item.image}
					description={item.description}
					new={item.new}
					discount={item.discount}

					addNew={index => props.addNew(index)}
				/>
			))
			:
			props.tableItems.map((item, index) => (
				<Cart 
					key={index}
					id={index}
					name={item.name}
					price={item.price}
					count={item.count}
					image={item.image}
					description={item.description}
					new={item.new}
					discount={item.discount}

					addNew={index => props.addNew(index)}
				/>
			))}
		</div>
	)
};

