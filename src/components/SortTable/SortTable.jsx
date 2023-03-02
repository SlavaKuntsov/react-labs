import React from "react";
import TableHead from "./TableHead";

function SortTable(props) {
    const tableNames = [
        { id: 1, value: 1, name: "id" },
        { id: 2, value: 2, name: "name" },
        { id: 3, value: 3, name: "price" },
        { id: 4, value: 4, name: "inStock" },
    ];

    const allFood = [
        { id: 1, name: "Butter", price: 0.9, inStock: 99 },
        { id: 2, name: "Fancy French Cheese", price: 4.9, inStock: 20 },
        { id: 3, name: "Cheese", price: 99, inStock: 3 },
        { id: 4, name: "Heavy Cream", price: 3.9, inStock: 9 },
        { id: 5, name: "Milk", price: 1.9, inStock: 32 },
        { id: 6, name: "Sour Cream", price: 2.9, inStock: 86 },
        { id: 7, name: "Yoghurt", price: 2.4, inStock: 0 },
    ];

    const whatColor = (item) => {
        if (item <= 3 && item >= 1) return "yellow";
        if (item === 0) return "red";
        else return "white";
    };

	const  [isFood, setIsFood] = React.useState(allFood)

    const onChangeSort = (bool, itemName) => {

        const objName = itemName.name;

        if (!bool)
            return setIsFood(
                allFood.sort((a, b) => (a[objName] > b[objName] ? 1 : -1))
            );
        if (bool)
            return setIsFood(
                allFood.sort((a, b) => (a[objName] > b[objName] ? 1 : -1)).reverse()
            );
    };
	// ====================================================
	const [isFirst, setIsFirst] = React.useState(false)
	
	const onFirstClick = (first) => {
		console.log(first)
		setIsFirst(first)
	}
	// console.log(isFirst)
	// ====================================================


    return (
        <table>
            <thead>
                <tr>
                    {tableNames.map((item) => (
                        <td key={item.id}>
                            <TableHead
                                onSort={(bool) => onChangeSort(bool, item)}
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
					isFood.map((item) => (
                	    <tr key={item.id}>
                	        <td>{item.id}</td>
                	        <td>{item.name}</td>
                	        <td>{item.price}</td>
                	        <td style={{ background: whatColor(item.inStock) }}>
                	            {item.inStock}
                	        </td>
                	    </tr>
                	))
				}
            </tbody>
        </table>
    );
}



export default SortTable;
