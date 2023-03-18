import React from "react";
import TableHead from "./TableHead";
import Catalog from "./Catalog";

function SortTable(props) {
    const tableNames = [
        {name: "id" },
        {name: "name" },//
        {name: "price" },//
        {name: "count" },//
        {name: "image" },
        {name: "description" },
        {name: "new" },
        {name: "discount" },//
    ];

    const allTablePositions = [
        { 	
			name: "Nike Blazer Mid Suede", 
			price: 249, 
			count: 10, 
			image:"/img/sneakers/Blazer Mid.png", 
			description:"The Nike Blazer Mid '77 Suede returns in a big way. This hardwood legend gets reimagined with some serious suede. Plus, with the durability and support of the ‘70s classic midtop design, these are more than your dad's kicks.", 
			new: true, 
			discount:30 
		},
        { 	
			name: "Nike Air Max 270", 
			price: 299, 
			count: 30, 
			image:"/img/sneakers/Air Max.png", 
			description:"Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.", 
			new: false, 
			discount:0 
		},
        { 
			name: "Under Armour Curry 8", 
			price: 499, 
			count: 24, 
			image:"/img/sneakers/Under Armour.png", 
			description:"You've never felt a shoe like this before. The Curry Flow 8 is totally rubberless, making it lighter and ridiculously grippy. It gives you a better court feel, lets you start and stop on a dime, and get off the ground faster.", 
			new: false, 
			discount:0 
		},
    	{ 
			name: "Nike Kyrie 7", 
			price: 449, 
			count: 12, 
			image:"/img/sneakers/Nike Kyrie 7.png", 
			description:"Designed for a quick, crafty game, this shoe enables players who use their speed and multi-directional ability to stay in control while taking advantage of the separation they create.", 
			new: false, 
			discount:10  
		},
    	{ 
			name: "Air Jordan 11", 
			price: 599, 
			count: 33, 
			image:"/img/sneakers/Air Jordan 11.png",
			description:"Designed for a quick, crafty game, this shoe enables players who use their speed and multi-directional ability to stay in control while taking advantage of the separation they create.", 
			new: false, 
			discount:5  
		},
    	{ 
			name: "Nike Kyrie Flytrap IV", 
			price: 399,
			count: 5, 
			image:"/img/sneakers/Nike Kyrie Flytrap IV.png", 
			description:"Play quick on your edges in the Kyrie Flytrap 4, a shoe that's lightweight, supportive and easy to move in. It has updated grip, lockdown and responsive cushioning. A large Zoom Air unit returns more energy than the previous model. The internal forefoot band stabilises you over the footbed as you run the floor.", 
			new: true, 
			discount:0  
		},
    ];


	const  [tableItems, setTableItems] = React.useState(allTablePositions)

    const onChangeSort = (bool, item) => {
		
	
		if (!bool)
			return setTableItems(
				allTablePositions.sort((a, b) => (a[item] > b[item] ? 1 : -1))
			);
		if (bool)
			return setTableItems(
				allTablePositions.sort((a, b) => (a[item] > b[item] ? 1 : -1)).reverse()
			);
	}

	// ====================================================
	const [isFirst, setIsFirst] = React.useState(false)
	
	const onFirstClick = (first) => {
		setIsFirst(first)
	}
	// ====================================================


	
	
	
	allTablePositions.sort(function(x, y) {
		// true values first
		return (x["new"] === y["new"])? 0 : x["new"]? -1 : 1;
		// false values first
		// return (x === y)? 0 : x? 1 : -1;
	});

	const [catalogItem, setCatalogItem] = React.useState(allTablePositions);
	
	const changeSort = (item) => {
		console.log('FirstItem: ', item);
		
		if(item.includes("Reverse")) {
			
			item = item.slice(0, item.length - 7);
			console.log('str: ', item);
			
			setCatalogItem(
				allTablePositions.sort((a, b) => (a[item] > b[item] ? 1 : -1)).reverse()
				);
		}
		else{
			setCatalogItem(
				allTablePositions.sort((a, b) => (a[item] > b[item] ? 1 : -1))
				);
		}
		console.table(catalogItem);

		allTablePositions.sort(function(x, y) {
			// true values first
			return (x["new"] === y["new"])? 0 : x["new"]? -1 : 1;
			// false values first
			// return (x === y)? 0 : x? 1 : -1;
		});
	}
	


	const newSort = (index) => {
		// console.log('index: ', index);

		// allTablePositions.splice(index, 1);
		// console.table(allTablePositions);
	}
	
    return (
		<>
		
			<table>
				<thead>
					<tr>
						{tableNames.map((item,index) => (
							<td key={index}>
								<TableHead
									onSort={(bool) => onChangeSort(bool, item.name)}
									onAddSort={(first) => onFirstClick(first)} //=============
									itemName={item.name}
									names={tableNames}
								/>
							</td>
						))}
					</tr>
				</thead>
				<tbody>
					{
						tableItems.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>{item.count}</td>
								<td>
									<img width={40} src={item.image} alt="img" />
								</td>
								<td>{item.description}</td>
								<td>{item.new}</td>
								<td>{item.discount}%</td>
							</tr>
						))
					}
				</tbody>
			</table>

			<Catalog 
				changeSort={(item) => changeSort(item)}
				tableItems={catalogItem}
				addNew={index => newSort(index)}
			/>
		</>
    );
}



export default SortTable;
